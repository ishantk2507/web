document.addEventListener('DOMContentLoaded', () => {
  const { featuredSlides, publishers, comics } = window.ComicVerseData;
  ComicVerseUtils.setActiveNav('home');
  renderHeroCarousel(featuredSlides);
  renderNewReleases(comics.filter((comic) => comic.isNew));
  renderPopularSeries(comics.sort((a, b) => b.popularity - a.popularity).slice(0, 4));
  renderPublisherSpotlights(publishers);
});

const renderHeroCarousel = (slides) => {
  const wrapper = document.querySelector('.hero-carousel');
  if (!wrapper) return;
  const slidesMarkup = slides
    .map(
      (slide, index) => `
      <article class="hero-slide${index === 0 ? ' active' : ''}" style="--accent:${slide.accent}">
        <div class="hero-copy">
          <p class="eyebrow">${slide.eyebrow}</p>
          <h1>${slide.headline}</h1>
          <p>${slide.subhead}</p>
          <a class="cta" href="comic-detail.html?id=${slide.id}">${slide.cta}</a>
        </div>
        <div class="hero-art">
          <img src="${slide.art}" alt="${slide.headline} cover art" loading="eager" />
        </div>
      </article>
    `
    )
    .join('');

  const controlsMarkup = `
    <button class="carousel-control prev" aria-label="Previous slide">‹</button>
    <button class="carousel-control next" aria-label="Next slide">›</button>
    <div class="carousel-dots" role="tablist">
      ${slides
        .map(
          (_, index) =>
            `<button class="dot${index === 0 ? ' active' : ''}" data-slide="${index}" role="tab" aria-label="Go to slide ${index +
              1}"></button>`
        )
        .join('')}
    </div>
  `;

  wrapper.innerHTML = slidesMarkup + controlsMarkup;

  const slidesNodes = wrapper.querySelectorAll('.hero-slide');
  const dots = wrapper.querySelectorAll('.dot');
  let currentIndex = 0;
  let intervalId;

  const goToSlide = (index) => {
    slidesNodes[currentIndex].classList.remove('active');
    dots[currentIndex].classList.remove('active');
    currentIndex = (index + slidesNodes.length) % slidesNodes.length;
    slidesNodes[currentIndex].classList.add('active');
    dots[currentIndex].classList.add('active');
  };

  const nextSlide = () => goToSlide(currentIndex + 1);
  const prevSlide = () => goToSlide(currentIndex - 1);

  wrapper.querySelector('.next').addEventListener('click', () => {
    nextSlide();
    restartInterval();
  });
  wrapper.querySelector('.prev').addEventListener('click', () => {
    prevSlide();
    restartInterval();
  });
  dots.forEach((dot) =>
    dot.addEventListener('click', () => {
      goToSlide(Number(dot.dataset.slide));
      restartInterval();
    })
  );

  const restartInterval = () => {
    clearInterval(intervalId);
    intervalId = setInterval(nextSlide, 6000);
  };

  intervalId = setInterval(nextSlide, 6000);
};

const renderNewReleases = (items) => {
  const section = document.querySelector('#new-releases .card-grid');
  if (!section) return;
  section.innerHTML = items
    .map(
      (comic) => `
      <article class="comic-card">
        <a href="comic-detail.html?id=${comic.id}" class="card-cover">
          <img src="${comic.coverImage}" alt="${comic.title} cover" loading="lazy" />
          <span class="badge">New</span>
        </a>
        <div class="card-body">
          <p class="meta">${comic.publisher} · ${ComicVerseUtils.formatDate(comic.releaseDate)}</p>
          <h3>${comic.title}</h3>
          <p>${comic.synopsis.slice(0, 90)}…</p>
          <div class="card-footer">
            <span>${ComicVerseUtils.formatPrice(comic.price)}</span>
            <a href="comic-detail.html?id=${comic.id}" class="text-link">View</a>
          </div>
        </div>
      </article>
    `
    )
    .join('');
};

const renderPopularSeries = (items) => {
  const section = document.querySelector('#popular-series .card-grid');
  if (!section) return;
  section.innerHTML = items
    .map(
      (comic) => `
      <article class="list-card">
        <div>
          <p class="meta">${comic.publisher}</p>
          <h3>${comic.title}</h3>
          <div class="chips">${ComicVerseUtils.createTagChips(comic.genre)}</div>
        </div>
        <div class="list-actions">
          <p>${ComicVerseUtils.formatPrice(comic.price)}</p>
          <button data-id="${comic.id}" class="ghost-btn">Add to Cart</button>
        </div>
      </article>
    `
    )
    .join('');

  section.querySelectorAll('.ghost-btn').forEach((btn) =>
    btn.addEventListener('click', () => {
      ComicVerseStorage.addToCart(btn.dataset.id);
      btn.classList.add('added');
      btn.textContent = 'Added!';
      setTimeout(() => {
        btn.classList.remove('added');
        btn.textContent = 'Add to Cart';
      }, 1500);
    })
  );
};

const renderPublisherSpotlights = (items) => {
  const section = document.querySelector('#publisher-spotlights .spotlight-grid');
  if (!section) return;
  section.innerHTML = items
    .map(
      (publisher) => `
      <article class="spotlight-card">
        <h3>${publisher.name}</h3>
        <p>${publisher.description}</p>
        <a href="browse.html?publisher=${encodeURIComponent(publisher.name)}" class="text-link">Browse catalog</a>
      </article>
    `
    )
    .join('');
};

