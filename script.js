// =============================================
// HOME RU - КЛОН JAVASCRIPT
// =============================================

// --- ГЛАВНЫЙ СЛАЙДЕР ---
let currentSlide = 0;
const totalSlides = 3;
let autoSlideTimer;

function goToSlide(index) {
  currentSlide = index % totalSlides;
  const wrapper = document.getElementById('slides-wrapper');
  if (wrapper) wrapper.style.transform = `translateX(-${currentSlide * 100}%)`;
  document.querySelectorAll('.dot').forEach((d, i) => {
    d.classList.toggle('active', i === currentSlide);
  });
}

function nextSlide() {
  goToSlide((currentSlide + 1) % totalSlides);
}

function startAutoSlide() {
  autoSlideTimer = setInterval(nextSlide, 5000);
}

function stopAutoSlide() {
  clearInterval(autoSlideTimer);
}

// Инициализация слайдера
document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('slides-wrapper')) {
    goToSlide(0);
    startAutoSlide();

    const sliderEl = document.querySelector('.slider-container');
    if (sliderEl) {
      sliderEl.addEventListener('mouseenter', stopAutoSlide);
      sliderEl.addEventListener('mouseleave', startAutoSlide);
    }
  }
});

// --- СЛАЙДЕР ТОВАРОВ ---
let productOffset = 0;
const productCardWidth = () => {
  const card = document.querySelector('.products-track .product-card');
  if (!card) return 300;
  const style = window.getComputedStyle(card);
  return card.offsetWidth + parseInt(style.marginRight || 20);
};

function slideProducts(direction) {
  const track = document.getElementById('products-track');
  if (!track) return;

  const cards = track.querySelectorAll('.product-card');
  const visibleCount = window.innerWidth > 1024 ? 4 : window.innerWidth > 768 ? 3 : 2;
  const maxOffset = Math.max(0, cards.length - visibleCount);
  const cardW = productCardWidth();

  productOffset = Math.max(0, Math.min(productOffset + direction, maxOffset));
  track.style.transform = `translateX(-${productOffset * cardW}px)`;
}

// --- ПОИСК (OVERLAY) ---
const searchBtn = document.getElementById('search-btn');
const searchOverlay = document.getElementById('search-overlay');
const searchClose = document.getElementById('search-close');
const searchInput = document.getElementById('search-input');

if (searchBtn) {
  searchBtn.addEventListener('click', () => {
    if (searchOverlay) {
        searchOverlay.classList.add('open');
        setTimeout(() => searchInput && searchInput.focus(), 100);
    }
  });
}

if (searchClose && searchOverlay) {
  searchClose.addEventListener('click', () => {
    searchOverlay.classList.remove('open');
  });
}

if (searchOverlay) {
  searchOverlay.addEventListener('click', (e) => {
    if (e.target === searchOverlay) searchOverlay.classList.remove('open');
  });
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && searchOverlay) searchOverlay.classList.remove('open');
});

// --- КНОПКА КОРЗИНЫ (ОБЩАЯ ЛОГИКА) ---
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('add-to-cart-btn')) {
    const btn = e.target;
    // Логика добавления обычно вынесена в components.js или страницы
    // Здесь просто визуальный эффект если нужно
    const originalText = btn.textContent;
    btn.textContent = 'Добавлено ✓';
    btn.style.background = '#27425b';
    btn.style.color = 'white';
    setTimeout(() => {
      btn.textContent = originalText;
      btn.style.background = '';
      btn.style.color = '';
    }, 1500);
  }
});

// --- ОБРАТНЫЙ ЗВОНОК ---
document.addEventListener('click', (e) => {
  if (e.target.id === 'callback-btn') {
    alert('Свяжитесь с нами по телефону: +7 (999) 123-45-67');
  }
});

// --- ВИДЖЕТ ЧАТА ---
const chatWidget = document.getElementById('chat-widget');
if (chatWidget) {
  chatWidget.addEventListener('click', () => {
    alert('Чат поддержки будет доступен в ближайшее время!');
  });
}

// --- ТЕНЬ ШАПКИ ПРИ СКРОЛЛЕ ---
window.addEventListener('scroll', () => {
  const header = document.querySelector('.site-header');
  if (header) {
    header.style.boxShadow = window.scrollY > 10
      ? '0 4 px 20px rgba(39,66,91,0.15)'
      : '0 2 px 8px rgba(0,0,0,0.08)';
  }
});

// --- АНИМАЦИЯ ПОЯВЛЕНИЯ ЭЛЕМЕНТОВ ---
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

function initScrollAnimations() {
    document.querySelectorAll('.product-card, .benefit-item, .banner-item, .icon-item').forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      observer.observe(el);
    });
}

document.addEventListener('DOMContentLoaded', initScrollAnimations);
