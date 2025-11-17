document.addEventListener('DOMContentLoaded', () => {
  ComicVerseUtils.setActiveNav('cart');
  renderCart();
  document.querySelector('.checkout-btn').addEventListener('click', handleCheckout);
  window.addEventListener('comicverse:cart-updated', renderCart);
});

const renderCart = () => {
  const container = document.querySelector('.cart-items');
  const emptyState = document.querySelector('.cart-empty');
  const totals = document.querySelector('.cart-totals');
  const cart = window.ComicVerseStorage.getCart();

  if (!cart.length) {
    container.innerHTML = '';
    emptyState.hidden = false;
    totals.querySelector('.total-value').textContent = ComicVerseUtils.formatPrice(0);
    return;
  }

  emptyState.hidden = true;
  const rows = cart
    .map((item) => {
      const comic = window.ComicVerseData.getComicById(item.id);
      if (!comic) return '';
      return `
        <article class="cart-row" data-id="${item.id}">
          <img src="${comic.coverImage}" alt="${comic.title} cover" />
          <div>
            <h3>${comic.title}</h3>
            <p class="meta">${comic.publisher}</p>
            <div class="chips">${ComicVerseUtils.createTagChips(comic.genre)}</div>
          </div>
          <div class="quantity-controls">
            <button class="qty-btn" data-action="decrease" aria-label="Decrease quantity">-</button>
            <input type="number" min="1" value="${item.quantity}" aria-label="Quantity for ${comic.title}" />
            <button class="qty-btn" data-action="increase" aria-label="Increase quantity">+</button>
          </div>
          <div class="row-price">${ComicVerseUtils.formatPrice(comic.price * item.quantity)}</div>
          <button class="remove-btn" aria-label="Remove ${comic.title}">×</button>
        </article>
      `;
    })
    .join('');
  container.innerHTML = rows;
  bindCartEvents();
  updateTotals();
};

const bindCartEvents = () => {
  document.querySelectorAll('.cart-row').forEach((row) => {
    const id = row.dataset.id;
    const input = row.querySelector('input[type="number"]');
    row.querySelector('[data-action="decrease"]').addEventListener('click', () => {
      const value = Math.max(1, Number(input.value) - 1);
      input.value = value;
      ComicVerseStorage.updateQuantity(id, value);
      updateRow(row, id, value);
    });
    row.querySelector('[data-action="increase"]').addEventListener('click', () => {
      const value = Number(input.value) + 1;
      input.value = value;
      ComicVerseStorage.updateQuantity(id, value);
      updateRow(row, id, value);
    });
    input.addEventListener('change', () => {
      const value = Math.max(1, Number(input.value));
      input.value = value;
      ComicVerseStorage.updateQuantity(id, value);
      updateRow(row, id, value);
    });
    row.querySelector('.remove-btn').addEventListener('click', () => {
      ComicVerseStorage.removeItem(id);
      row.remove();
      updateTotals();
      if (!window.ComicVerseStorage.getCart().length) {
        renderCart();
      }
    });
  });
};

const updateRow = (row, id, quantity) => {
  const comic = window.ComicVerseData.getComicById(id);
  row.querySelector('.row-price').textContent = ComicVerseUtils.formatPrice(
    comic.price * quantity
  );
  updateTotals();
};

const updateTotals = () => {
  const cart = window.ComicVerseStorage.getCart();
  const total = cart.reduce((sum, item) => {
    const comic = window.ComicVerseData.getComicById(item.id);
    return comic ? sum + comic.price * item.quantity : sum;
  }, 0);
  document.querySelector('.total-value').textContent = ComicVerseUtils.formatPrice(total);
};

const handleCheckout = () => {
  const cart = window.ComicVerseStorage.getCart();
  if (!cart.length) return;
  ComicVerseStorage.saveCart([]);
  renderCart();
  const message = document.querySelector('.checkout-message');
  message.textContent = 'Thank you for your simulated order! Your comics ship instantaneously.';
  message.hidden = false;
  setTimeout(() => (message.hidden = true), 4000);
};

