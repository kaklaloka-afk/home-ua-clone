// =============================================
// HOME UA - CLONE JAVASCRIPT
// =============================================

// --- HERO SLIDER ---
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
  autoSlideTimer = setInterval(nextSlide, 4000);
}

function stopAutoSlide() {
  clearInterval(autoSlideTimer);
}

// Init slider
document.addEventListener('DOMContentLoaded', () => {
  goToSlide(0);
  startAutoSlide();

  const sliderEl = document.querySelector('.slider-container');
  if (sliderEl) {
    sliderEl.addEventListener('mouseenter', stopAutoSlide);
    sliderEl.addEventListener('mouseleave', startAutoSlide);
  }
});

// --- PRODUCTS SLIDER ---
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

// --- SEARCH OVERLAY ---
const searchBtn = document.getElementById('search-btn');
const searchOverlay = document.getElementById('search-overlay');
const searchClose = document.getElementById('search-close');
const searchInput = document.getElementById('search-input');

if (searchBtn) {
  searchBtn.addEventListener('click', () => {
    searchOverlay.classList.add('open');
    setTimeout(() => searchInput && searchInput.focus(), 100);
  });
}

if (searchClose) {
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
  if (e.key === 'Escape') searchOverlay && searchOverlay.classList.remove('open');
});

// --- CART BUTTON ---
let cartCount = 0;
document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
  btn.addEventListener('click', function () {
    cartCount++;
    const badge = document.querySelector('.cart-badge');
    if (badge) badge.textContent = cartCount;

    this.textContent = 'Р”РѕРґР°РЅРѕ вњ“';
    this.style.background = '#27425b';
    this.style.color = 'white';
    setTimeout(() => {
      this.textContent = 'Р”Рѕ РєРѕС€РёРєР°';
      this.style.background = '';
      this.style.color = '';
    }, 1500);
  });
});

// --- LANG SWITCHER ---
document.getElementById('lang-ua') && document.getElementById('lang-ua').addEventListener('click', () => {
  document.getElementById('lang-ua').classList.add('active');
  document.getElementById('lang-ru').classList.remove('active');
});
document.getElementById('lang-ru') && document.getElementById('lang-ru').addEventListener('click', () => {
  document.getElementById('lang-ru').classList.add('active');
  document.getElementById('lang-ua').classList.remove('active');
});

// --- CALLBACK BUTTON ---
const callbackBtn = document.getElementById('callback-btn');
if (callbackBtn) {
  callbackBtn.addEventListener('click', () => {
    alert('Р—Р°С‚РµР»РµС„РѕРЅСѓР№С‚Рµ РЅР°Рј: +38 (067) 562-28-82');
  });
}

// --- CHAT WIDGET ---
const chatWidget = document.getElementById('chat-widget');
if (chatWidget) {
  chatWidget.addEventListener('click', () => {
    alert('Р§Р°С‚ РїС–РґС‚СЂРёРјРєРё Р±СѓРґРµ РґРѕСЃС‚СѓРїРЅРёР№ РЅР°Р№Р±Р»РёР¶С‡РёРј С‡Р°СЃРѕРј!');
  });
}

// --- STICKY HEADER SHADOW ---
window.addEventListener('scroll', () => {
  const header = document.querySelector('.site-header');
  if (header) {
    header.style.boxShadow = window.scrollY > 10
      ? '0 4px 20px rgba(39,66,91,0.15)'
      : '0 2px 8px rgba(0,0,0,0.08)';
  }
});

// --- CATEGORIES HOVER (mobile support) ---
const categoriesTrigger = document.getElementById('categories-trigger');
const categoriesMenu = document.getElementById('categories-menu');

if (categoriesTrigger && categoriesMenu) {
  categoriesTrigger.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = categoriesMenu.style.display === 'block';
    categoriesMenu.style.display = isOpen ? 'none' : 'block';
  });

  document.addEventListener('click', () => {
    if (categoriesMenu) categoriesMenu.style.display = 'none';
  });
}

// --- SMOOTH FADE IN ANIMATION ---
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.product-card, .benefit-item, .banner-item, .icon-item').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});

