document.addEventListener('DOMContentLoaded', () => {
  ComicVerseUtils.setActiveNav('');
  const params = new URLSearchParams(window.location.search);
  const comicId = params.get('id');
  const comic = window.ComicVerseData.getComicById(comicId);
  if (!comic) {
    renderNotFound();
    return;
  }
  renderComicDetail(comic);
});

const renderComicDetail = (comic) => {
  const hero = document.querySelector('.detail-hero');
  hero.innerHTML = `
    <div class="cover">
      <img src="${comic.bannerImage}" alt="${comic.title} banner cover" />
    </div>
    <div class="info">
      <p class="meta">${comic.publisher} · ${ComicVerseUtils.formatDate(comic.releaseDate)}</p>
      <h1>${comic.title}</h1>
      <p>${comic.synopsis}</p>
      <div class="chips">${ComicVerseUtils.createTagChips(comic.genre)}</div>
      <div class="creators">
        <p><strong>Writer:</strong> ${comic.creators.writer}</p>
        <p><strong>Artist:</strong> ${comic.creators.artist}</p>
      </div>
      <div class="purchase-row">
        <span class="price">${ComicVerseUtils.formatPrice(comic.price)}</span>
        <button id="add-to-cart">Add to Cart</button>
      </div>
    </div>
  `;

  document.querySelector('#add-to-cart').addEventListener('click', () => {
    ComicVerseStorage.addToCart(comic.id);
    const button = document.querySelector('#add-to-cart');
    button.textContent = 'Added to Cart';
    button.disabled = true;
    setTimeout(() => {
      button.textContent = 'Add to Cart';
      button.disabled = false;
    }, 1200);
  });
};

const renderNotFound = () => {
  const hero = document.querySelector('.detail-hero');
  hero.innerHTML = `
    <div class="not-found">
      <h1>Signal Lost</h1>
      <p>The comic you’re looking for isn’t in this reality.</p>
      <a href="browse.html" class="text-link">Return to Browse</a>
    </div>
  `;
};

