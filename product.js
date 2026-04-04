// product.js вЂ” Р»РѕРіРёРєР° СЃС‚СЂР°РЅРёС†С‹ С‚РѕРІР°СЂР°

// Р‘Р°Р·Р° С‚РѕРІР°СЂРѕРІ РґР»СЏ РґРµРјРѕ
const PRODUCTS_DB = {
  'chair-yellow': {
    id: 'chair-yellow', name: 'РћР±РµРґРµРЅРЅС‹Р№ СЃС‚СѓР» J-LINE РїР»РµС‚РµРЅС‹Р№ РІ СЃС‚РёР»Рµ Р±РёСЃС‚СЂРѕ СЃ РѕС‚РєСЂС‹С‚РѕР№ СЃРїРёРЅРєРѕР№ Р¶С‘Р»С‚С‹Р№',
    model: '60201', price: 14960, oldPrice: null,
    category: 'furniture', categoryName: 'РњРµР±РµР»СЊ',
    availability: 'Р’ РЅР°Р»РёС‡РёРё',
    images: [
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80',
      'https://images.unsplash.com/photo-1567016432779-094069958ea5?w=600&q=80',
    ],
    description: `<p>РћР±РµРґРµРЅРЅС‹Р№ СЃС‚СѓР» J-LINE вЂ” СЌС‚Рѕ СЌР»РµРіР°РЅС‚РЅРѕРµ СЃРѕС‡РµС‚Р°РЅРёРµ С‚СЂР°РґРёС†РёРѕРЅРЅРѕРіРѕ СЃС‚РёР»СЏ В«Р±РёСЃС‚СЂРѕВ» Рё СЃРѕРІСЂРµРјРµРЅРЅРѕРіРѕ РґРёР·Р°Р№РЅР°. РЎС‚СѓР» РёР·РіРѕС‚РѕРІР»РµРЅ РёР· РєР°С‡РµСЃС‚РІРµРЅРЅРѕРіРѕ СЂРѕС‚Р°РЅРіР° СЂСѓС‡РЅРѕРіРѕ РїР»РµС‚РµРЅРёСЏ, С‡С‚Рѕ РґРµР»Р°РµС‚ РµРіРѕ РѕРґРЅРѕРІСЂРµРјРµРЅРЅРѕ Р»С‘РіРєРёРј Рё РїСЂРѕС‡РЅС‹Рј.</p>
    <p>Р–РµР»С‚С‹Р№ С†РІРµС‚ РїСЂРёРґР°С‘С‚ Р»СЋР±РѕРјСѓ РїСЂРѕСЃС‚СЂР°РЅСЃС‚РІСѓ СЏСЂРєРѕСЃС‚СЊ Рё РїРѕР·РёС‚РёРІРЅСѓСЋ СЌРЅРµСЂРіРёСЋ, РґРµР»Р°СЏ СЃС‚СѓР» РЅР°СЃС‚РѕСЏС‰РёРј Р°РєС†РµРЅС‚РѕРј РІ РёРЅС‚РµСЂСЊРµСЂРµ. Р’С‹СЃРѕРєР°СЏ СЃРїРёРЅРєР° РѕР±РµСЃРїРµС‡РёРІР°РµС‚ РєРѕРјС„РѕСЂС‚РЅСѓСЋ РїРѕСЃР°РґРєСѓ.</p>
    <ul><li>РџСЂРѕРёР·РІРѕРґРёС‚РµР»СЊ: J-LINE (Р‘РµР»СЊРіРёСЏ)</li><li>РњР°С‚РµСЂРёР°Р»: РЅР°С‚СѓСЂР°Р»СЊРЅС‹Р№ СЂРѕС‚Р°РЅРі, РјРµС‚Р°Р»Р»РёС‡РµСЃРєРёР№ РєР°СЂРєР°СЃ</li><li>Р¦РІРµС‚: Р¶С‘Р»С‚С‹Р№</li><li>Р’С‹СЃРѕС‚Р°: 90 СЃРј</li></ul>`,
    specs: [
      ['РџСЂРѕРёР·РІРѕРґРёС‚РµР»СЊ', 'J-LINE (Р‘РµР»СЊРіРёСЏ)'],
      ['РњР°С‚РµСЂРёР°Р»', 'Р РѕС‚Р°РЅРі / РњРµС‚Р°Р»Р»'],
      ['Р¦РІРµС‚', 'Р–С‘Р»С‚С‹Р№'],
      ['Р’С‹СЃРѕС‚Р°', '90 СЃРј'],
      ['РЁРёСЂРёРЅР°', '45 СЃРј'],
      ['Р“Р»СѓР±РёРЅР°', '50 СЃРј'],
      ['Р’РµСЃ', '4 РєРі'],
      ['РЎС‚СЂР°РЅР° РїСЂРѕРёСЃС…РѕР¶РґРµРЅРёСЏ', 'Р‘РµР»СЊРіРёСЏ'],
    ]
  },
  'chair-pink': {
    id: 'chair-pink', name: 'РћР±РµРґРµРЅРЅС‹Р№ СЃС‚СѓР» J-LINE РїР»РµС‚РµРЅС‹Р№ РІ СЃС‚РёР»Рµ Р±РёСЃС‚СЂРѕ СЃ РѕС‚РєСЂС‹С‚РѕР№ СЂРѕР·РѕРІРѕР№ СЃРїРёРЅРєРѕР№',
    model: '60202', price: 14960, oldPrice: null,
    category: 'furniture', categoryName: 'РњРµР±РµР»СЊ',
    availability: 'Р’ РЅР°Р»РёС‡РёРё',
    images: [
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80',
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80',
    ],
    description: `<p>РЎС‚СѓР» J-LINE РІ СЂРѕР·РѕРІРѕРј РѕС‚С‚РµРЅРєРµ вЂ” РёРґРµР°Р»СЊРЅС‹Р№ РІС‹Р±РѕСЂ РґР»СЏ СЃРѕР·РґР°РЅРёСЏ РЅРµР¶РЅРѕРіРѕ Рё СЃС‚РёР»СЊРЅРѕРіРѕ РёРЅС‚РµСЂСЊРµСЂР°. Р’С‹РїРѕР»РЅРµРЅ РёР· РЅР°С‚СѓСЂР°Р»СЊРЅРѕРіРѕ СЂРѕС‚Р°РЅРіР° СЂСѓС‡РЅРѕРіРѕ РїР»РµС‚РµРЅРёСЏ РІ РєР»Р°СЃСЃРёС‡РµСЃРєРѕРј СЃС‚РёР»Рµ В«Р±РёСЃС‚СЂРѕВ».</p>
    <p>РџСЂРѕС‡РЅС‹Р№ РјРµС‚Р°Р»Р»РёС‡РµСЃРєРёР№ РєР°СЂРєР°СЃ РѕР±РµСЃРїРµС‡РёРІР°РµС‚ РґРѕР»РіРѕРІРµС‡РЅРѕСЃС‚СЊ РёР·РґРµР»РёСЏ, Р° РѕС‚РєСЂС‹С‚Р°СЏ СЃРїРёРЅРєР° РґРµР»Р°РµС‚ СЃС‚СѓР» Р»С‘РіРєРёРј РЅР° РІРёРґ.</p>`,
    specs: [['РџСЂРѕРёР·РІРѕРґРёС‚РµР»СЊ','J-LINE (Р‘РµР»СЊРіРёСЏ)'],['РњР°С‚РµСЂРёР°Р»','Р РѕС‚Р°РЅРі / РњРµС‚Р°Р»Р»'],['Р¦РІРµС‚','Р РѕР·РѕРІС‹Р№'],['Р’С‹СЃРѕС‚Р°','90 СЃРј'],['РЁРёСЂРёРЅР°','45 СЃРј'],['Р“Р»СѓР±РёРЅР°','50 СЃРј']]
  },
  'lamp-floor': {
    id: 'lamp-floor', name: 'РќР°РїРѕР»СЊРЅР°СЏ Р»Р°РјРїР° J-LINE РїР»РµС‚С‘РЅР°СЏ РёР· СЂРѕС‚Р°РЅРіР° РЅР°С‚СѓСЂР°Р»СЊРЅР°СЏ РІС‹СЃРѕС‚Р° 133 СЃРј',
    model: '60301', price: 13530, oldPrice: 15918,
    category: 'lighting', categoryName: 'РћСЃРІРµС‰РµРЅРёРµ',
    availability: 'Р’ РЅР°Р»РёС‡РёРё',
    images: [
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80',
      'https://images.unsplash.com/photo-1565814636199-ae8133055c1c?w=600&q=80',
    ],
    description: `<p>РќР°РїРѕР»СЊРЅР°СЏ Р»Р°РјРїР° J-LINE вЂ” РёР·С‹СЃРєР°РЅРЅС‹Р№ СЌР»РµРјРµРЅС‚ РёРЅС‚РµСЂСЊРµСЂР° РёР· РЅР°С‚СѓСЂР°Р»СЊРЅРѕРіРѕ СЂРѕС‚Р°РЅРіР° СЂСѓС‡РЅРѕРіРѕ РїР»РµС‚РµРЅРёСЏ. РЎРѕР·РґР°С‘С‚ РјСЏРіРєРѕРµ СЂР°СЃСЃРµСЏРЅРЅРѕРµ РѕСЃРІРµС‰РµРЅРёРµ Рё С‚С‘РїР»СѓСЋ Р°С‚РјРѕСЃС„РµСЂСѓ РІ Р»СЋР±РѕРј РїРѕРјРµС‰РµРЅРёРё.</p>
    <p>Р‘Р»Р°РіРѕРґР°СЂСЏ РЅР°С‚СѓСЂР°Р»СЊРЅС‹Рј РјР°С‚РµСЂРёР°Р»Р°Рј Р»Р°РјРїР° РёРґРµР°Р»СЊРЅРѕ РІРїРёСЃС‹РІР°РµС‚СЃСЏ РІ СЃРєР°РЅРґРёРЅР°РІСЃРєРёР№, Р±РѕС…Рѕ РёР»Рё СЌРєРѕ СЃС‚РёР»СЊ РёРЅС‚РµСЂСЊРµСЂР°.</p>`,
    specs: [['РџСЂРѕРёР·РІРѕРґРёС‚РµР»СЊ','J-LINE (Р‘РµР»СЊРіРёСЏ)'],['РњР°С‚РµСЂРёР°Р»','Р РѕС‚Р°РЅРі'],['Р’С‹СЃРѕС‚Р°','133 СЃРј'],['Р¦РѕРєРѕР»СЊ','E27'],['РњРѕС‰РЅРѕСЃС‚СЊ Р»Р°РјРїС‹','max 40W']]
  },
  'figurine-bulldog': {
    id: 'figurine-bulldog', name: 'РЎС‚Р°С‚СѓСЌС‚РєР° Р±СѓР»СЊРґРѕРі J-LINE Р±Р°СЃРєРµС‚Р±РѕР»РёСЃС‚ Р±РµР»Р°СЏ СЃ РјСЏС‡РѕРј СЃРїРѕСЂС‚РёРІРЅР°СЏ РІС‹СЃРѕС‚Р° 25 СЃРј',
    model: '60401', price: 2920, oldPrice: 3650,
    category: 'figurines', categoryName: 'РЎС‚Р°С‚СѓСЌС‚РєРё',
    availability: 'Р’ РЅР°Р»РёС‡РёРё',
    images: [
      'https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=600&q=80',
      'https://images.unsplash.com/photo-1513519245088-0e12902e35a7?w=600&q=80',
    ],
    description: `<p>РћСЂРёРіРёРЅР°Р»СЊРЅР°СЏ РґРµРєРѕСЂР°С‚РёРІРЅР°СЏ СЃС‚Р°С‚СѓСЌС‚РєР° РІ РІРёРґРµ Р±СѓР»СЊРґРѕРіР°-Р±Р°СЃРєРµС‚Р±РѕР»РёСЃС‚Р° РѕС‚ J-LINE. Р’С‹РїРѕР»РЅРµРЅР° РёР· РёСЃРєСѓСЃСЃС‚РІРµРЅРЅРѕРіРѕ РєР°РјРЅСЏ РІС‹СЃРѕРєРѕРіРѕ РєР°С‡РµСЃС‚РІР°.</p>
    <p>РўР°РєР°СЏ СЃС‚Р°С‚СѓСЌС‚РєР° РІРѕСЃРїСЂРёРЅРёРјР°РµС‚СЃСЏ РєР°Рє РїСЂРµРґРјРµС‚ СЃРѕРІСЂРµРјРµРЅРЅРѕРіРѕ РёСЃРєСѓСЃСЃС‚РІР°, РєРѕС‚РѕСЂС‹Р№ РїРѕРґС‡С‘СЂРєРёРІР°РµС‚ РІРєСѓСЃ РІР»Р°РґРµР»СЊС†Р° Рё РґРѕР±Р°РІР»СЏРµС‚ РёРЅС‚РµСЂСЊРµСЂСѓ С…Р°СЂР°РєС‚РµСЂ, РіР»СѓР±РёРЅСѓ Рё РІРёР·СѓР°Р»СЊРЅС‹Р№ РёРЅС‚РµСЂРµСЃ.</p>
    <p>Р’С‹РїРѕР»РЅРµРЅР° РёР· РёСЃРєСѓСЃСЃС‚РІРµРЅРЅРѕРіРѕ РєР°РјРЅСЏ.<br>Р Р°Р·РјРµСЂ: 25x23x36 СЃРј<br>Р’РµСЃ: 2 РєРі<br>РЎС‚СЂР°РЅР° вЂ“ РїСЂРѕРёР·РІРѕРґРёС‚РµР»СЊ: Р‘РµР»СЊРіРёСЏ</p>`,
    specs: [['РџСЂРѕРёР·РІРѕРґРёС‚РµР»СЊ','J-LINE (Р‘РµР»СЊРіРёСЏ)'],['РњР°С‚РµСЂРёР°Р»','РСЃРєСѓСЃСЃС‚РІРµРЅРЅС‹Р№ РєР°РјРµРЅСЊ'],['Р¦РІРµС‚','Р‘РµР»С‹Р№'],['Р’С‹СЃРѕС‚Р°','25 СЃРј'],['РЁРёСЂРёРЅР°','23 СЃРј'],['Р“Р»СѓР±РёРЅР°','36 СЃРј'],['Р’РµСЃ','2 РєРі']]
  },
  'vase-amadeus': {
    id: 'vase-amadeus', name: 'Р’Р°Р·Р° СЃ СЂСѓС‡РєРѕР№ AMADEUS СЃ РїРѕС‚С‘РєР°РјРё РєСЂР°СЃРєРё РІС‹СЃРѕС‚Р° 19 СЃРј Р¤СЂР°РЅС†РёСЏ',
    model: '60501', price: 1870, oldPrice: 2200,
    category: 'vases', categoryName: 'Р¦РІРµС‚РѕС‡РЅС‹Рµ РІР°Р·РѕРЅС‹',
    availability: 'Р’ РЅР°Р»РёС‡РёРё',
    images: [
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80',
      'https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?w=600&q=80',
    ],
    description: `<p>Р­Р»РµРіР°РЅС‚РЅР°СЏ РІР°Р·Р° СЃ СЂСѓС‡РєРѕР№ РѕС‚ С„СЂР°РЅС†СѓР·СЃРєРѕРіРѕ РїСЂРѕРёР·РІРѕРґРёС‚РµР»СЏ AMADEUS. РЈРЅРёРєР°Р»СЊРЅС‹Р№ РґРµРєРѕСЂ СЃ РїРѕС‚С‘РєР°РјРё РєСЂР°СЃРєРё РґРµР»Р°РµС‚ РєР°Р¶РґРѕРµ РёР·РґРµР»РёРµ РЅРµРїРѕРІС‚РѕСЂРёРјС‹Рј.</p>
    <p>РРґРµР°Р»СЊРЅР° РґР»СЏ Р¶РёРІС‹С… Рё РёСЃРєСѓСЃСЃС‚РІРµРЅРЅС‹С… С†РІРµС‚РѕРІ, СЃРѕР·РґР°С‘С‚ СѓСЋС‚РЅСѓСЋ Р°С‚РјРѕСЃС„РµСЂСѓ РІ Р»СЋР±РѕРј РёРЅС‚РµСЂСЊРµСЂРµ.</p>`,
    specs: [['РџСЂРѕРёР·РІРѕРґРёС‚РµР»СЊ','AMADEUS (Р¤СЂР°РЅС†РёСЏ)'],['РњР°С‚РµСЂРёР°Р»','РљРµСЂР°РјРёРєР°'],['Р’С‹СЃРѕС‚Р°','19 СЃРј'],['Р¦РІРµС‚','РњСѓР»СЊС‚РёРєРѕР»РѕСЂ']]
  },
  'pitcher-glass': {
    id: 'pitcher-glass', name: 'РљСѓРІС€РёРЅ СЃС‚РµРєР»СЏРЅРЅС‹Р№ РїСЂРѕР·СЂР°С‡РЅС‹Р№ РёР· Р±РѕСЂРѕСЃРёР»РёРєР°С‚Р°, РєРѕС‚РѕСЂС‹Р№ РЅРµ Р±СЊС‘С‚СЃСЏ',
    model: '60601', price: 2100, oldPrice: null,
    category: 'dishes', categoryName: 'РџРѕСЃСѓРґР°',
    availability: 'Р’ РЅР°Р»РёС‡РёРё',
    images: [
      'https://images.unsplash.com/photo-1567016432779-094069958ea5?w=600&q=80',
      'https://images.unsplash.com/photo-1463218648218-e3d5bde3b0e4?w=600&q=80',
    ],
    description: `<p>РљСѓРІС€РёРЅ РёР· С‚РµСЂРјРѕСЃС‚РѕР№РєРѕРіРѕ Р±РѕСЂРѕСЃРёР»РёРєР°С‚РЅРѕРіРѕ СЃС‚РµРєР»Р°. РџСЂРѕР·СЂР°С‡РЅС‹Р№, Р»С‘РіРєРёР№ Рё РґРѕР»РіРѕРІРµС‡РЅС‹Р№. РџРѕРґС…РѕРґРёС‚ РґР»СЏ РїРѕРґР°С‡Рё РІРѕРґС‹, СЃРѕРєР°, С‡Р°СЏ РёР»Рё Р»РёРјРѕРЅР°РґР°.</p>
    <p>Р’С‹РґРµСЂР¶РёРІР°РµС‚ РїРµСЂРµРїР°РґС‹ С‚РµРјРїРµСЂР°С‚СѓСЂС‹, РјРѕР¶РЅРѕ РјС‹С‚СЊ РІ РїРѕСЃСѓРґРѕРјРѕРµС‡РЅРѕР№ РјР°С€РёРЅРµ.</p>`,
    specs: [['РџСЂРѕРёР·РІРѕРґРёС‚РµР»СЊ','J-LINE'],['РњР°С‚РµСЂРёР°Р»','Р‘РѕСЂРѕСЃРёР»РёРєР°С‚РЅРѕРµ СЃС‚РµРєР»Рѕ'],['РћР±СЉС‘Рј','1.5 Р»'],['Р’С‹СЃРѕС‚Р°','25 СЃРј'],['Р”РёР°РјРµС‚СЂ','12 СЃРј']]
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
  document.title = product.name + ' вЂ” Home UA';
  document.getElementById('product-page-title').textContent = product.name + ' вЂ” Home UA';
  document.getElementById('bc-category').textContent = product.categoryName || 'РљР°С‚РµРіРѕСЂРёСЏ';
  document.getElementById('bc-category').href = `category.html?cat=${product.category}`;
  document.getElementById('bc-product').textContent = product.name;

  // Product info
  document.getElementById('product-detail-name').textContent = product.name;
  document.getElementById('product-model-num').textContent = product.model;
  document.getElementById('product-availability').textContent = product.availability;
  const priceEl = document.getElementById('product-detail-price');
  priceEl.textContent = product.price.toLocaleString('ru-RU') + ' в‚ґ';
  if (product.oldPrice) {
    const oldSpan = document.createElement('span');
    oldSpan.className = 'product-old-price-detail';
    oldSpan.textContent = product.oldPrice.toLocaleString('ru-RU') + ' в‚ґ';
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
    this.textContent = 'вњ“ Р”РћР‘РђР’Р›Р•РќРћ Р’ РљРћР Р—РРќРЈ';
    this.classList.add('added');
    setTimeout(() => {
      this.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/></svg> Р”РћР‘РђР’РРўР¬ Р’ РљРћР Р—РРќРЈ`;
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
        <span class="review-big-stars">${'в…'.repeat(rating)}${'в†'.repeat(5-rating)}</span>
        <span class="review-big-date">РўРѕР»СЊРєРѕ С‡С‚Рѕ</span>
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
          <span class="product-price">${p.price.toLocaleString('ru-RU')} в‚ґ</span>
          <button class="add-to-cart-btn" onclick="addRelatedToCart('${p.id}')">Р”Рѕ РєРѕС€РёРєР°</button>
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

