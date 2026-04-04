// product.js — логика страницы товара

// База товаров для демо
const PRODUCTS_DB = {
  'chair-yellow': {
    id: 'chair-yellow', name: 'Обеденный стул J-LINE плетеный в стиле бистро с открытой спинкой жёлтый',
    model: '60201', price: 14960, oldPrice: null,
    category: 'furniture', categoryName: 'Мебель',
    availability: 'В наличии',
    images: [
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80',
      'https://images.unsplash.com/photo-1567016432779-094069958ea5?w=600&q=80',
    ],
    description: `<p>Обеденный стул J-LINE — это элегантное сочетание традиционного стиля «бистро» и современного дизайна. Стул изготовлен из качественного ротанга ручного плетения, что делает его одновременно лёгким и прочным.</p>
    <p>Желтый цвет придаёт любому пространству яркость и позитивную энергию, делая стул настоящим акцентом в интерьере. Высокая спинка обеспечивает комфортную посадку.</p>
    <ul><li>Производитель: J-LINE (Бельгия)</li><li>Материал: натуральный ротанг, металлический каркас</li><li>Цвет: жёлтый</li><li>Высота: 90 см</li></ul>`,
    specs: [
      ['Производитель', 'J-LINE (Бельгия)'],
      ['Материал', 'Ротанг / Металл'],
      ['Цвет', 'Жёлтый'],
      ['Высота', '90 см'],
      ['Ширина', '45 см'],
      ['Глубина', '50 см'],
      ['Вес', '4 кг'],
      ['Страна происхождения', 'Бельгия'],
    ]
  },
  'chair-pink': {
    id: 'chair-pink', name: 'Обеденный стул J-LINE плетеный в стиле бистро с открытой розовой спинкой',
    model: '60202', price: 14960, oldPrice: null,
    category: 'furniture', categoryName: 'Мебель',
    availability: 'В наличии',
    images: [
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80',
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80',
    ],
    description: `<p>Стул J-LINE в розовом оттенке — идеальный выбор для создания нежного и стильного интерьера. Выполнен из натурального ротанга ручного плетения в классическом стиле «бистро».</p>
    <p>Прочный металлический каркас обеспечивает долговечность изделия, а открытая спинка делает стул лёгким на вид.</p>`,
    specs: [['Производитель','J-LINE (Бельгия)'],['Материал','Ротанг / Металл'],['Цвет','Розовый'],['Высота','90 см'],['Ширина','45 см'],['Глубина','50 см']]
  },
  'lamp-floor': {
    id: 'lamp-floor', name: 'Напольная лампа J-LINE плетёная из ротанга натуральная высота 133 см',
    model: '60301', price: 13530, oldPrice: 15918,
    category: 'lighting', categoryName: 'Освещение',
    availability: 'В наличии',
    images: [
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80',
      'https://images.unsplash.com/photo-1565814636199-ae8133055c1c?w=600&q=80',
    ],
    description: `<p>Напольная лампа J-LINE — изысканный элемент интерьера из натурального ротанга ручного плетения. Создаёт мягкое рассеянное освещение и тёплую атмосферу в любом помещении.</p>
    <p>Благодаря натуральным материалам лампа идеально вписывается в скандинавский, бохо или эко стиль интерьера.</p>`,
    specs: [['Производитель','J-LINE (Бельгия)'],['Материал','Ротанг'],['Высота','133 см'],['Цоколь','E27'],['Мощность лампы','max 40W']]
  },
  'figurine-bulldog': {
    id: 'figurine-bulldog', name: 'Статуэтка бульдог J-LINE баскетболист белая с мячом спортивная высота 25 см',
    model: '60401', price: 2920, oldPrice: 3650,
    category: 'figurines', categoryName: 'Статуэтки',
    availability: 'В наличии',
    images: [
      'https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=600&q=80',
      'https://images.unsplash.com/photo-1513519245088-0e12902e35a7?w=600&q=80',
    ],
    description: `<p>Оригинальная декоративная статуэтка в виде бульдога-баскетболиста от J-LINE. Выполнена из искусственного камня высокого качества.</p>
    <p>Такая статуэтка воспринимается как предмет современного искусства, который подчёркивает вкус владельца и добавляет интерьеру характер, глубину и визуальный интерес.</p>
    <p>Выполнена из искусственного камня.<br>Размер: 25x23x36 см<br>Вес: 2 кг<br>Страна – производитель: Бельгия</p>`,
    specs: [['Производитель','J-LINE (Бельгия)'],['Материал','Искусственный камень'],['Цвет','Белый'],['Высота','25 см'],['Ширина','23 см'],['Глубина','36 см'],['Вес','2 кг']]
  },
  'vase-amadeus': {
    id: 'vase-amadeus', name: 'Ваза с ручкой AMADEUS с потёками краски высота 19 см Франция',
    model: '60501', price: 1870, oldPrice: 2200,
    category: 'vases', categoryName: 'Цветочные вазоны',
    availability: 'В наличии',
    images: [
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80',
      'https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?w=600&q=80',
    ],
    description: `<p>Элегантная ваза с ручкой от французского производителя AMADEUS. Уникальный декор с потёками краски делает каждое изделие неповторимым.</p>
    <p>Идеальна для живых и искусственных цветов, создаёт уютную атмосферу в любом интерьере.</p>`,
    specs: [['Производитель','AMADEUS (Франция)'],['Материал','Керамика'],['Высота','19 см'],['Цвет','Мультиколор']]
  },
  'pitcher-glass': {
    id: 'pitcher-glass', name: 'Кувшин стеклянный прозрачный из боросиликата, который не бьётся',
    model: '60601', price: 2100, oldPrice: null,
    category: 'dishes', categoryName: 'Посуда',
    availability: 'В наличии',
    images: [
      'https://images.unsplash.com/photo-1567016432779-094069958ea5?w=600&q=80',
      'https://images.unsplash.com/photo-1463218648218-e3d5bde3b0e4?w=600&q=80',
    ],
    description: `<p>Кувшин из термостойкого боросиликатного стекла. Прозрачный, лёгкий и долговечный. Подходит для подачи воды, сока, чая или лимонада.</p>
    <p>Выдерживает перепады температуры, можно мыть в посудомоечной машине.</p>`,
    specs: [['Производитель','J-LINE'],['Материал','Боросиликатное стекло'],['Объём','1.5 л'],['Высота','25 см'],['Диаметр','12 см']]
  },
};

// Get related products (same category, different product)
function getRelated(product) {
  return Object.values(PRODUCTS_DB)
    .filter(p => p.id !== product.id)
    .slice(0, 6);
}

document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(location.search);
  const productId = params.get('id') || 'chair-yellow';
  const product = PRODUCTS_DB[productId] || PRODUCTS_DB['chair-yellow'];

  // Set title & breadcrumb
  document.title = product.name + ' — Home UA';
  document.getElementById('product-page-title').textContent = product.name + ' — Home UA';
  document.getElementById('bc-category').textContent = product.categoryName || 'Категория';
  document.getElementById('bc-category').href = `category.html?cat=${product.category}`;
  document.getElementById('bc-product').textContent = product.name;

  // Product info
  document.getElementById('product-detail-name').textContent = product.name;
  document.getElementById('product-model-num').textContent = product.model;
  document.getElementById('product-availability').textContent = product.availability;
  const priceEl = document.getElementById('product-detail-price');
  priceEl.textContent = product.price.toLocaleString('ru-RU') + ' ₴';
  if (product.oldPrice) {
    const oldSpan = document.createElement('span');
    oldSpan.className = 'product-old-price-detail';
    oldSpan.textContent = product.oldPrice.toLocaleString('ru-RU') + ' ₴';
    priceEl.appendChild(oldSpan);
  }

  // Images
  const mainImg = document.getElementById('main-product-img');
  mainImg.src = product.images[0];
  mainImg.alt = product.name;
  const thumbsWrap = document.getElementById('gallery-thumbs');
  product.images.forEach((src, i) => {
    const img = document.createElement('img');
    img.src = src; img.alt = product.name;
    img.className = 'thumb-img' + (i === 0 ? ' active' : '');
    img.addEventListener('click', () => {
      mainImg.src = src;
      document.querySelectorAll('.thumb-img').forEach(t => t.classList.remove('active'));
      img.classList.add('active');
    });
    thumbsWrap.appendChild(img);
  });

  // Description
  document.getElementById('product-description-text').innerHTML = product.description;

  // Specs
  const specsTable = document.getElementById('specs-table');
  product.specs.forEach(([key, val]) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${key}</td><td>${val}</td>`;
    specsTable.appendChild(tr);
  });

  // Tabs
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const tabId = btn.dataset.tab;
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById('tab-panel-' + tabId).classList.add('active');
    });
  });

  // Quantity
  document.getElementById('qty-minus').addEventListener('click', () => {
    const inp = document.getElementById('qty-input');
    if (parseInt(inp.value) > 1) inp.value = parseInt(inp.value) - 1;
  });
  document.getElementById('qty-plus').addEventListener('click', () => {
    const inp = document.getElementById('qty-input');
    if (parseInt(inp.value) < 99) inp.value = parseInt(inp.value) + 1;
  });

  // Add to cart
  document.getElementById('add-to-cart-main').addEventListener('click', function() {
    const qty = parseInt(document.getElementById('qty-input').value) || 1;
    // Store cart item in localStorage
    let cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
    const existing = cartItems.find(i => i.id === product.id);
    if (existing) existing.qty += qty;
    else cartItems.push({ id: product.id, name: product.name, price: product.price, img: product.images[0], qty });
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    // Update badge
    const total = cartItems.reduce((s, i) => s + i.qty, 0);
    localStorage.setItem('cartCount', total);
    document.querySelectorAll('.cart-badge').forEach(b => b.textContent = total);
    this.textContent = '✓ ДОБАВЛЕНО В КОРЗИНУ';
    this.classList.add('added');
    setTimeout(() => {
      this.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/></svg> ДОБАВИТЬ В КОРЗИНУ`;
      this.classList.remove('added');
    }, 2000);
  });

  // Wishlist
  document.getElementById('wishlist-btn').addEventListener('click', function() {
    this.style.color = '#e1306c';
    this.style.borderColor = '#e1306c';
    this.querySelector('svg').setAttribute('fill', '#e1306c');
  });

  // Star rating
  let selectedRating = 5;
  document.querySelectorAll('.star').forEach(star => {
    star.addEventListener('mouseenter', () => {
      const v = parseInt(star.dataset.v);
      document.querySelectorAll('.star').forEach(s => {
        s.classList.toggle('active', parseInt(s.dataset.v) <= v);
      });
    });
    star.addEventListener('mouseleave', () => {
      document.querySelectorAll('.star').forEach(s => {
        s.classList.toggle('active', parseInt(s.dataset.v) <= selectedRating);
      });
    });
    star.addEventListener('click', () => {
      selectedRating = parseInt(star.dataset.v);
      document.getElementById('review-rating').value = selectedRating;
      document.querySelectorAll('.star').forEach(s => {
        s.classList.toggle('active', parseInt(s.dataset.v) <= selectedRating);
      });
    });
  });
  // Init stars
  document.querySelectorAll('.star').forEach(s => s.classList.add('active'));

  // Review form
  window.submitReview = function(e) {
    e.preventDefault();
    const name = document.getElementById('review-name').value;
    const text = document.getElementById('review-text').value;
    const rating = parseInt(document.getElementById('review-rating').value) || 5;
    const reviewsList = document.getElementById('reviews-list');
    document.getElementById('no-reviews-msg').style.display = 'none';
    const item = document.createElement('div');
    item.className = 'review-big-item';
    item.innerHTML = `
      <div class="review-big-header">
        <span class="review-big-name">${name}</span>
        <span class="review-big-stars">${'★'.repeat(rating)}${'☆'.repeat(5-rating)}</span>
        <span class="review-big-date">Только что</span>
      </div>
      <p class="review-big-text">${text}</p>`;
    reviewsList.appendChild(item);
    document.getElementById('review-form').reset();
    document.getElementById('review-success').style.display = 'block';
    setTimeout(() => document.getElementById('review-success').style.display = 'none', 4000);
  };

  // Related products slider
  const related = getRelated(product);
  const track = document.getElementById('related-track');
  related.forEach(p => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <div class="product-img-wrap">
        <a href="product.html?id=${p.id}">
          <img src="${p.images[0]}" alt="${p.name}" loading="lazy"/>
        </a>
      </div>
      <div class="product-info">
        <a href="product.html?id=${p.id}" class="product-name">${p.name}</a>
        <div class="product-footer">
          <span class="product-price">${p.price.toLocaleString('ru-RU')} ₴</span>
          <button class="add-to-cart-btn" onclick="addRelatedToCart('${p.id}')">До кошика</button>
        </div>
      </div>`;
    track.appendChild(card);
  });

  let relOffset = 0;
  const relCard = track.querySelector('.product-card');
  const cardW = relCard ? (relCard.offsetWidth + 20) : 280;
  document.getElementById('rel-prev').addEventListener('click', () => {
    if (relOffset > 0) {
      relOffset--;
      track.style.transform = `translateX(-${relOffset * cardW}px)`;
    }
  });
  document.getElementById('rel-next').addEventListener('click', () => {
    const maxOff = Math.max(0, related.length - 4);
    if (relOffset < maxOff) {
      relOffset++;
      track.style.transform = `translateX(-${relOffset * cardW}px)`;
    }
  });

  window.addRelatedToCart = function(pid) {
    const p = PRODUCTS_DB[pid];
    if (!p) return;
    let cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
    const existing = cartItems.find(i => i.id === pid);
    if (existing) existing.qty++;
    else cartItems.push({ id: pid, name: p.name, price: p.price, img: p.images[0], qty: 1 });
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    const total = cartItems.reduce((s, i) => s + i.qty, 0);
    localStorage.setItem('cartCount', total);
    document.querySelectorAll('.cart-badge').forEach(b => b.textContent = total);
  };

  initCommonComponents();
});
