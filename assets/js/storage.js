const ComicVerseStorage = (() => {
  const CART_KEY = 'comicverse-cart';

  const getCart = () => {
    try {
      const raw = localStorage.getItem(CART_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch (error) {
      console.error('Unable to read cart', error);
      return [];
    }
  };

  const saveCart = (cart) => {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
    window.dispatchEvent(new CustomEvent('comicverse:cart-updated', { detail: cart }));
  };

  const addToCart = (comicId, quantity = 1) => {
    const cart = getCart();
    const index = cart.findIndex((item) => item.id === comicId);
    if (index > -1) {
      cart[index].quantity += quantity;
    } else {
      cart.push({ id: comicId, quantity });
    }
    saveCart(cart);
    return cart;
  };

  const updateQuantity = (comicId, quantity) => {
    let cart = getCart();
    cart = cart
      .map((item) => (item.id === comicId ? { ...item, quantity } : item))
      .filter((item) => item.quantity > 0);
    saveCart(cart);
    return cart;
  };

  const removeItem = (comicId) => {
    const cart = getCart().filter((item) => item.id !== comicId);
    saveCart(cart);
    return cart;
  };

  const getCartCount = () =>
    getCart().reduce((total, item) => {
      const comic = window.ComicVerseData.getComicById(item.id);
      return comic ? total + item.quantity : total;
    }, 0);

  return { addToCart, updateQuantity, removeItem, getCart, saveCart, getCartCount };
})();

window.ComicVerseStorage = ComicVerseStorage;

