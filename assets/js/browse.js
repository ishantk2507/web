document.addEventListener('DOMContentLoaded', () => {
  ComicVerseUtils.setActiveNav('browse');
  initFilters();
  renderComics();
});

const state = {
  filters: {
    publisher: 'all',
    genre: 'all',
    character: 'all'
  },
  sort: 'title'
};

const initFilters = () => {
  const { comics } = window.ComicVerseData;
  const publisherSelect = document.querySelector('#filter-publisher');
  const genreSelect = document.querySelector('#filter-genre');
  const characterSelect = document.querySelector('#filter-character');
  const sortSelect = document.querySelector('#sort-comics');

  const publishers = [...new Set(comics.map((comic) => comic.publisher))];
  const genres = [...new Set(comics.flatMap((comic) => comic.genre))];
  const characters = [...new Set(comics.flatMap((comic) => comic.characters))];

  fillSelect(publisherSelect, publishers);
  fillSelect(genreSelect, genres);
  fillSelect(characterSelect, characters);

  const params = new URLSearchParams(window.location.search);
  if (params.get('publisher')) {
    publisherSelect.value = params.get('publisher');
    state.filters.publisher = params.get('publisher');
  }

  publisherSelect.addEventListener('change', (event) => {
    state.filters.publisher = event.target.value;
    renderComics();
  });

  genreSelect.addEventListener('change', (event) => {
    state.filters.genre = event.target.value;
    renderComics();
  });

  characterSelect.addEventListener('change', (event) => {
    state.filters.character = event.target.value;
    renderComics();
  });

  sortSelect.addEventListener('change', (event) => {
    state.sort = event.target.value;
    renderComics();
  });
};

const fillSelect = (select, items) => {
  if (!select) return;
  select.innerHTML =
    '<option value="all">All</option>' +
    items.map((item) => `<option value="${item}">${item}</option>`).join('');
};

const applyFilters = (items) => {
  return items.filter((comic) => {
    const { publisher, genre, character } = state.filters;
    const publisherMatch = publisher === 'all' || comic.publisher === publisher;
    const genreMatch = genre === 'all' || comic.genre.includes(genre);
    const characterMatch = character === 'all' || comic.characters.includes(character);
    return publisherMatch && genreMatch && characterMatch;
  });
};

const applySort = (items) => {
  switch (state.sort) {
    case 'price-low':
      return items.sort((a, b) => a.price - b.price);
    case 'price-high':
      return items.sort((a, b) => b.price - a.price);
    case 'release-new':
      return items.sort(
        (a, b) => new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime()
      );
    case 'release-old':
      return items.sort(
        (a, b) => new Date(a.releaseDate).getTime() - new Date(b.releaseDate).getTime()
      );
    default:
      return items.sort((a, b) => a.title.localeCompare(b.title));
  }
};

const renderComics = () => {
  const container = document.querySelector('.browse-grid');
  const summary = document.querySelector('.results-summary');
  if (!container) return;
  const filtered = applyFilters([...window.ComicVerseData.comics]);
  const sorted = applySort(filtered);

  summary.textContent = `${sorted.length} title${sorted.length === 1 ? '' : 's'} available`;

  container.innerHTML = sorted
    .map(
      (comic) => `
      <article class="browse-card">
        <a href="comic-detail.html?id=${comic.id}">
          <img src="${comic.coverImage}" alt="${comic.title} cover" loading="lazy" />
        </a>
        <div class="card-info">
          <p class="meta">${comic.publisher} · ${ComicVerseUtils.formatDate(comic.releaseDate)}</p>
          <h3>${comic.title}</h3>
          <p>${comic.synopsis.slice(0, 80)}…</p>
          <div class="chips">${ComicVerseUtils.createTagChips(comic.genre)}</div>
          <div class="card-footer">
            <span>${ComicVerseUtils.formatPrice(comic.price)}</span>
            <button data-id="${comic.id}" class="ghost-btn">Add to Cart</button>
          </div>
        </div>
      </article>
    `
    )
    .join('');

  container.querySelectorAll('.ghost-btn').forEach((btn) =>
    btn.addEventListener('click', () => {
      ComicVerseStorage.addToCart(btn.dataset.id);
      btn.textContent = 'Added!';
      btn.disabled = true;
      setTimeout(() => {
        btn.textContent = 'Add to Cart';
        btn.disabled = false;
      }, 1200);
    })
  );
};

