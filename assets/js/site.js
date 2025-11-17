(() => {
  const headerTemplate = `
    <div class="logo">
      <span class="logo-mark">CV</span>
      <div>
        <p class="logo-title">ComicVerse Hub</p>
        <p class="logo-sub">Since 1998</p>
      </div>
    </div>
    <nav class="site-nav" aria-label="Primary">
      <a href="index.html" data-nav="home">Home</a>
      <a href="browse.html" data-nav="browse">Browse</a>
      <a href="cart.html" data-nav="cart">Cart <span class="cart-count" aria-live="polite">0</span></a>
    </nav>
    <button class="nav-toggle" aria-expanded="false" aria-label="Open navigation">
      <span></span><span></span><span></span>
    </button>
  `;

  const footerTemplate = `
    <div>
      <h3>Stay wired to the Multiverse</h3>
      <p>Weekly drops, creator interviews, and exclusive digital variants.</p>
      <form class="subscribe-form">
        <label class="sr-only" for="subscribe-email">Email</label>
        <input id="subscribe-email" type="email" placeholder="email@domain.com" required />
        <button type="submit">Subscribe</button>
      </form>
    </div>
    <div class="footer-meta">
      <p>© ${new Date().getFullYear()} ComicVerse Hub. For demo purposes only.</p>
      <div class="footer-links">
        <a href="#privacy">Privacy</a>
        <a href="#terms">Terms</a>
        <a href="#accessibility">Accessibility</a>
      </div>
    </div>
  `;

  const initHeaderFooter = () => {
    const header = document.querySelector('.site-header');
    const footer = document.querySelector('.site-footer');
    if (header) {
      header.innerHTML = headerTemplate;
      setupNavToggle(header);
    }
    if (footer) {
      footer.innerHTML = footerTemplate;
    }
    updateCartBadge();
    window.addEventListener('comicverse:cart-updated', updateCartBadge);
  };

  const setupNavToggle = (header) => {
    const toggle = header.querySelector('.nav-toggle');
    const nav = header.querySelector('.site-nav');
    toggle?.addEventListener('click', () => {
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', (!expanded).toString());
      nav?.classList.toggle('open');
    });
  };

  const updateCartBadge = () => {
    const badge = document.querySelector('.cart-count');
    if (!badge) return;
    const count = window.ComicVerseStorage?.getCartCount() ?? 0;
    badge.textContent = count.toString();
  };

  document.addEventListener('DOMContentLoaded', initHeaderFooter);
})();

