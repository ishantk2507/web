const ComicVerseUtils = (() => {
  const priceFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

  const formatPrice = (value) => priceFormatter.format(value);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const createTagChips = (items = []) =>
    items
      .map((item) => `<span class="chip" data-chip="${item.toLowerCase()}">${item}</span>`)
      .join('');

  const setActiveNav = (target) => {
    const navLinks = document.querySelectorAll('.site-nav a[data-nav]');
    navLinks.forEach((link) => {
      const isActive = link.dataset.nav === target;
      link.classList.toggle('active', isActive);
      link.setAttribute('aria-current', isActive ? 'page' : 'false');
    });
  };

  return { formatPrice, formatDate, createTagChips, setActiveNav };
})();

window.ComicVerseUtils = ComicVerseUtils;

