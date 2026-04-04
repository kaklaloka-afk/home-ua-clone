// =============================================
// SHARED COMPONENTS - Header & Footer (RU)
// =============================================

function getHeaderHTML(activePage) {
  const user = JSON.parse(localStorage.getItem('loggedIn') || 'null');
  return `
  <div class="social-sidebar">
    <a href="#" class="social-btn telegram" title="Telegram">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L8.32 13.617l-2.96-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.828.942z"/></svg>
    </a>
    <a href="#" class="social-btn instagram" title="Instagram">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
    </a>
  </div>

  <header class="site-header">
    <div class="header-top">
      <div class="container">
        <div class="header-top-inner">
          <div class="header-logo">
            <a href="index.html" id="logo-link">
              <div class="logo-box">
                <span class="logo-h">H<span class="logo-icon">⌂</span>ME</span>
                <span class="logo-ua">.UA</span>
              </div>
            </a>
          </div>
          <div class="header-center">
            <div class="header-phone">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z"/></svg>
              <a href="tel:+79991234567" style="color:inherit;text-decoration:none">+7 (999) 123-45-67</a>
            </div>
          </div>
          <div class="header-right">
            <button class="callback-btn" id="callback-btn">ОБРАТНАЯ СВЯЗЬ</button>
            <div class="header-icons">
              <button class="icon-btn" id="search-btn" title="Поиск">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
              </button>
              <a href="${user ? 'login.html' : 'login.html'}" class="icon-btn" id="account-btn" title="${user ? user.name : 'Войти'}">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="${user ? '#e88a8a' : 'currentColor'}" stroke-width="2"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              </a>
              <a href="cart.html" class="icon-btn cart-btn" id="cart-btn" title="Корзина">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/></svg>
                <span class="cart-badge" id="cart-badge">0</span>
              </a>
            </div>
          </div>
        </div>
        <nav class="main-nav">
          <div class="nav-inner">
            <div class="categories-dropdown">
              <button class="categories-trigger" id="categories-trigger">КАТЕГОРИИ
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>
              </button>
              <div class="categories-menu" id="categories-menu">
                <a href="category.html?cat=gifts">Подарки</a>
                <a href="category.html?cat=candles">Свечи и ароматные стики</a>
                <a href="category.html?cat=dishes">Посуда</a>
                <a href="category.html?cat=decor">Декор</a>
                <a href="category.html?cat=lighting">Освещение</a>
                <a href="category.html?cat=textile">Текстиль</a>
                <a href="category.html?cat=furniture">Мебель</a>
                <a href="category.html?cat=mirrors">Зеркала</a>
                <a href="category.html?cat=vases">Цветочные вазоны</a>
                <a href="category.html?cat=figurines">Статуэтки</a>
                <a href="category.html?cat=frames">Фоторамки</a>
                <a href="category.html?cat=jewelry">Хранение украшений</a>
              </div>
            </div>
            <a href="about.html" class="nav-link ${activePage==='about'?'nav-link--active':''}">О НАС</a>
            <a href="delivery.html" class="nav-link ${activePage==='delivery'?'nav-link--active':''}">ОПЛАТА И ДОСТАВКА</a>
            <a href="contacts.html" class="nav-link ${activePage==='contacts'?'nav-link--active':''}">КОНТАКТЫ</a>
            <a href="sale.html" class="nav-link ${activePage==='sale'?'nav-link--active':''}">АКЦИИ</a>
          </div>
        </nav>
      </div>
    </div>
  </header>

  <div class="search-overlay" id="search-overlay">
    <div class="search-box">
      <input type="text" id="search-input" placeholder="Поиск товаров..." autocomplete="off"/>
      <button class="search-close" id="search-close">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
      </button>
    </div>
  </div>
  `;
}

function getFooterHTML() {
  return `
  <section class="social-follow" id="social-follow">
    <div class="container">
      <h2 class="follow-title">НЕ ПРОПУСТИТЕ НАШИ НОВИНКИ И АКЦИОННЫЕ ПРЕДЛОЖЕНИЯ</h2>
      <div class="follow-row">
        <span class="follow-label">СЛЕДИТЕ ЗА НАМИ</span>
        <div class="follow-btns">
          <a href="#" class="follow-btn follow-telegram">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L8.32 13.617l-2.96-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.828.942z"/></svg>
          </a>
          <a href="#" class="follow-btn follow-instagram">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
          </a>
        </div>
      </div>
    </div>
  </section>

  <footer class="site-footer">
    <div class="container">
      <div class="footer-divider"></div>
      <div class="footer-links-grid">
        <div class="footer-col">
          <a href="delivery.html" class="footer-link">Оплата и доставка</a>
          <a href="about.html" class="footer-link">О нас</a>
          <a href="#" class="footer-link">Политика конфиденциальности</a>
          <a href="#" class="footer-link">Договор публичной оферты</a>
        </div>
        <div class="footer-col">
          <a href="#" class="footer-link">Условия возврата товара</a>
          <a href="contacts.html" class="footer-link">Связаться с нами</a>
          <a href="#" class="footer-link">Карта сайта</a>
        </div>
        <div class="footer-col">
          <a href="#" class="footer-link">Бренды</a>
          <a href="category.html?cat=new" class="footer-link">Новые поступления</a>
          <a href="sale.html" class="footer-link">Товары со скидкой</a>
        </div>
        <div class="footer-col">
          <a href="#" class="footer-link">Мои закладки</a>
        </div>
      </div>
      <div class="footer-payment-divider"></div>
      <div class="footer-payment">
        <p class="payment-title">Оплата онлайн</p>
        <div class="payment-icons">
          <span class="payment-liqpay"><span class="liqpay-logo"><span class="liqpay-24">24</span><span class="liqpay-text">LIQPAY</span><span class="liqpay-arrow">»</span></span></span>
          <span class="payment-mastercard">
            <svg xmlns="http://www.w3.org/2000/svg" width="38" height="24" viewBox="0 0 38 24"><rect width="38" height="24" rx="4" fill="#252525"/><circle cx="15" cy="12" r="7" fill="#eb001b"/><circle cx="23" cy="12" r="7" fill="#f79e1b"/><path d="M19 6.8a7 7 0 010 10.4A7 7 0 0119 6.8z" fill="#ff5f00"/></svg>
          </span>
          <span class="payment-visa">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="24" viewBox="0 0 50 24"><rect width="50" height="24" rx="4" fill="#1a1f71"/><text x="8" y="17" font-family="Arial" font-weight="700" font-size="14" fill="white" letter-spacing="1">VISA</text></svg>
          </span>
        </div>
      </div>
      <div class="footer-bottom">
        <span class="copyright">home-ua.store &copy; 2019</span>
        <span class="developed-by">Develop by Łatwa Strona</span>
      </div>
    </div>
  </footer>

  <button class="chat-widget" id="chat-widget" title="Чат">
    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
  </button>
  `;
}

function initCommonComponents(activePage) {
  const headerEl = document.getElementById('site-header-placeholder');
  if (headerEl) headerEl.innerHTML = getHeaderHTML(activePage);

  const footerEl = document.getElementById('site-footer-placeholder');
  if (footerEl) footerEl.innerHTML = getFooterHTML();

  // Sync cart badge
  const cartCount = parseInt(localStorage.getItem('cartCount') || '0');
  document.querySelectorAll('.cart-badge').forEach(b => b.textContent = cartCount);

  // Add to cart (generic buttons on category/sale pages)
  document.querySelectorAll('.add-to-cart-btn:not([data-bound])').forEach(btn => {
    btn.setAttribute('data-bound', '1');
    btn.addEventListener('click', function() {
      const card = this.closest('.product-card');
      const name = card?.querySelector('.product-name')?.textContent || 'Товар';
      const priceText = card?.querySelector('.product-price')?.textContent || '0';
      const price = parseInt(priceText.replace(/[^\d]/g, '')) || 0;
      const img = card?.querySelector('img')?.src || '';
      const id = 'p-' + name.slice(0, 8).replace(/\s/g, '');

      let cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
      const existing = cartItems.find(i => i.id === id);
      if (existing) existing.qty++;
      else cartItems.push({ id, name, price, img, qty: 1 });
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
      const total = cartItems.reduce((s, i) => s + i.qty, 0);
      localStorage.setItem('cartCount', total);
      document.querySelectorAll('.cart-badge').forEach(b => b.textContent = total);

      this.textContent = 'Добавлено ✓';
      this.style.cssText = 'background:#27425b;color:white';
      setTimeout(() => { this.textContent = 'В корзину'; this.style.cssText = ''; }, 1500);
    });
  });

  // Search overlay
  document.addEventListener('click', (e) => {
    if (e.target.id === 'search-btn' || e.target.closest('#search-btn')) {
      document.getElementById('search-overlay')?.classList.add('open');
      setTimeout(() => document.getElementById('search-input')?.focus(), 100);
    }
    if (e.target.id === 'search-close' || e.target.id === 'search-overlay') {
      document.getElementById('search-overlay')?.classList.remove('open');
    }
    if (e.target.id === 'callback-btn') alert('Позвоните нам: +7 (999) 123-45-67');
    if (e.target.id === 'chat-widget' || e.target.closest('#chat-widget')) {
      alert('Чат поддержки:\n+7 (999) 123-45-67\nEmail: home.ua.deco@gmail.com');
    }
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') document.getElementById('search-overlay')?.classList.remove('open');
  });

  // Categories dropdown
  document.addEventListener('click', (e) => {
    if (e.target.closest('#categories-trigger')) {
      e.stopPropagation();
      const menu = document.getElementById('categories-menu');
      if (menu) menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
    } else {
      const menu = document.getElementById('categories-menu');
      if (menu) menu.style.display = 'none';
    }
  });

  // Sticky header shadow
  window.addEventListener('scroll', () => {
    const header = document.querySelector('.site-header');
    if (header) header.style.boxShadow = window.scrollY > 10
      ? '0 4px 20px rgba(39,66,91,0.15)'
      : '0 2px 8px rgba(0,0,0,0.08)';
  });

  // Fade-in animation
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });

  document.querySelectorAll('.product-card, .benefit-item, .info-card').forEach(el => {
    if (!el.style.opacity) {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      observer.observe(el);
    }
  });
}
