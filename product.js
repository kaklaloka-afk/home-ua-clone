// product.js — логика страницы товара и база данных

// База товаров (80+ позиций, воссоздано по оригиналу home-ua.store)
const PRODUCTS_DB = {
  // --- FIGURINES (Art Objects) ---
  'statue-deer-17': {
    id: 'statue-deer-17', name: 'Статуэтка оленя J-LINE фарфоровая белая (17 см)',
    model: '150201', price: 2376, category: 'figurines', categoryName: 'Статуэтки',
    availability: 'В наличии', images: ['img/figurines.png'],
    description: '<p>Грациозная фигурка оленя из белого фарфора. Дизайн: Бельгия.</p>',
    specs: [['Бренд','J-LINE'],['Высота','17 см'],['Материал','Фарфор']]
  },
  'starfish-gold': {
    id: 'starfish-gold', name: 'Морская звезда J-LINE фарфоровая золотая (Бельгия)',
    model: '150301', price: 1536, category: 'figurines', categoryName: 'Статуэтки',
    availability: 'В наличии', images: ['img/figurines.png'],
    description: '<p>Декоративная морская звезда в золотом исполнении.</p>',
    specs: [['Бренд','J-LINE'],['Материал','Фарфор'],['Цвет','Золото']]
  },
  'rabbit-egg': {
    id: 'rabbit-egg', name: 'Статуэтка яйцо с зайчиком J-LINE пасхальная (7 см)',
    model: '150401', price: 552, category: 'figurines', categoryName: 'Статуэтки',
    availability: 'В наличии', images: ['img/figurines.png'],
    description: '<p>Миниатюрная фигурка для весеннего декора.</p>',
    specs: [['Бренд','J-LINE'],['Высота','7 см'],['Материал','Керамика']]
  },
  'seahorse-white': {
    id: 'seahorse-white', name: 'Статуэтка морской конек J-LINE фарфоровая белая (24 см)',
    model: '150501', price: 2856, category: 'figurines', categoryName: 'Статуэтки',
    availability: 'В наличии', images: ['img/figurines.png'],
    description: '<p>Изысканный аксессуар для морского интерьера.</p>',
    specs: [['Бренд','J-LINE'],['Высота','24 см'],['Материал','Фарфор']]
  },
  'fish-wood-37': {
    id: 'fish-wood-37', name: 'Статуэтка рыба J-LINE деревянная настольная (37 см)',
    model: '150601', price: 4608, category: 'figurines', categoryName: 'Статуэтки',
    availability: 'В наличии', images: ['img/figurines.png'],
    description: '<p>Массивная интерьерная фигура рыбы на подставке.</p>',
    specs: [['Бренд','J-LINE'],['Высота','37 см'],['Материал','Натуральное дерево']]
  },
  'bookends-horse': {
    id: 'bookends-horse', name: 'Держатели для книг J-LINE «Лошади» терракотовые (комплект)',
    model: '150701', price: 7692, category: 'figurines', categoryName: 'Статуэтки',
    availability: 'В наличии', images: ['img/figurines.png'],
    description: '<p>Стильные держатели для книг в форме лошадей.</p>',
    specs: [['Бренд','J-LINE'],['Цвет','Терракотовый'],['Материал','Керамика']]
  },
  'turtles-gold': {
    id: 'turtles-gold', name: 'Статуэтки черепах J-LINE «Не вижу, не слышу, не говорю» золотые',
    model: '150801', price: 6336, category: 'figurines', categoryName: 'Статуэтки',
    availability: 'В наличии', images: ['img/figurines.png'],
    description: '<p>Набор из трех золотых черепах — символ мудрости.</p>',
    specs: [['Бренд','J-LINE'],['Материал','Полистоун'],['Цвет','Золото']]
  },
  'rabbits-pink-set': {
    id: 'rabbits-pink-set', name: 'Статуэтки зайцев J-LINE (комплект 2 шт) розовые каменные',
    model: '150901', price: 3768, category: 'figurines', categoryName: 'Статуэтки',
    availability: 'В наличии', images: ['img/figurines.png'],
    description: '<p>Набор из двух стильных фигурок зайцев.</p>',
    specs: [['Бренд','J-LINE'],['Материал','Керамика'],['Цвет','Розовый']]
  },

  // --- CANDLES & LAMPS ---
  'candle-fragrance-38': {
    id: 'candle-fragrance-38', name: 'Свеча J-LINE ароматическая «Восточный аромат» (38 часов)',
    model: '80101', price: 4392, category: 'candles', categoryName: 'Свечи',
    availability: 'В наличии', images: ['img/candles.png'],
    description: '<p>Длительное горение и изысканный восточный шлейф.</p>',
    specs: [['Аромат','Восточный'],['Время горения','38 часов'],['Бренд','J-LINE']]
  },
  'candle-sandal-3-wick': {
    id: 'candle-sandal-3-wick', name: 'Свеча J-LINE ароматическая Сандал (3 фитиля, 28 часов)',
    model: '80102', price: 5712, category: 'candles', categoryName: 'Свечи',
    availability: 'В наличии', images: ['img/candles.png'],
    description: '<p>Крупная свеча с тремя фитилями для интенсивного аромата.</p>',
    specs: [['Аромат','Сандал'],['Фитили','3 шт'],['Время горения','28 часов']]
  },
  'candles-yellow-set': {
    id: 'candles-yellow-set', name: 'Свечи J-LINE желтые высокие (набор 2 шт, 31 см)',
    model: '80103', price: 1075, category: 'candles', categoryName: 'Свечи',
    availability: 'В наличии', images: ['img/candles.png'],
    description: '<p>Классические интерьерные свечи для столового декора.</p>',
    specs: [['Высота','31 см'],['Количество','2 шт'],['Цвет','Желтый']]
  },
  'candle-led-black-20': {
    id: 'candle-led-black-20', name: 'Свеча LED J-LINE черная восковая (20 см, на батарейках)',
    model: '80104', price: 1142, category: 'candles', categoryName: 'Свечи',
    availability: 'В наличии', images: ['img/candles.png'],
    description: '<p>Безопасная альтернатива обычным свечам с эффектом мерцания.</p>',
    specs: [['Тип','LED'],['Питание','Батарейки'],['Высота','20 см']]
  },
  'candle-fuchsia-23': {
    id: 'candle-fuchsia-23', name: 'Свеча J-LINE фуксия декоративная (23 см)',
    model: '80105', price: 1142, category: 'candles', categoryName: 'Свечи',
    availability: 'В наличии', images: ['img/candles.png'],
    description: '<p>Яркий акцент в вашем праздничном оформлении.</p>',
    specs: [['Высота','23 см'],['Цвет','Фуксия'],['Бренд','J-LINE']]
  },
  'candle-green-23': {
    id: 'candle-green-23', name: 'Свеча J-LINE зеленая декоративная (23 см)',
    model: '80106', price: 1142, category: 'candles', categoryName: 'Свечи',
    availability: 'В наличии', images: ['img/candles.png'],
    description: '<p>Высокая свеча глубокого зеленого цвета.</p>',
    specs: [['Высота','23 см'],['Цвет','Зеленый']]
  },
  'candle-blue-23': {
    id: 'candle-blue-23', name: 'Свеча J-LINE голубая декоративная (23 см)',
    model: '80107', price: 1142, category: 'candles', categoryName: 'Свечи',
    availability: 'В наличии', images: ['img/candles.png'],
    description: '<p>Нежный небесный оттенок для уютной атмосферы.</p>',
    specs: [['Высота','23 см'],['Цвет','Голубой']]
  },
  'candle-shell-white': {
    id: 'candle-shell-white', name: 'Свеча Amadeus «Ракушка» белая матовая',
    model: '80108', price: 722, category: 'candles', categoryName: 'Свечи',
    availability: 'В наличии', images: ['img/candles.png'],
    description: '<p>Дизайнерская свеча в форме морской раковины.</p>',
    specs: [['Бренд','AMADEUS'],['Время горения','8 часов'],['Материал','Парафин']]
  },

  // --- FURNITURE ---
  'pouf-boucle-white': {
    id: 'pouf-boucle-white', name: 'Пуф J-LINE из ткани букле белый (Бельгия)',
    model: '60101', price: 17760, category: 'furniture', categoryName: 'Мебель',
    availability: 'В наличии', images: ['img/furniture.png'],
    description: '<p>Трендовый пуф с мягкой текстурой букле.</p>',
    specs: [['Бренд','J-LINE'],['Материал','Букле'],['Цвет','Белый']]
  },
  'stool-pine-black': {
    id: 'stool-pine-black', name: 'Табурет J-LINE из сосны квадратный черный (ручная работа)',
    model: '60102', price: 15960, category: 'furniture', categoryName: 'Мебель',
    availability: 'В наличии', images: ['img/furniture.png'],
    description: '<p>Надежный табурет из массива сосны. Каждое изделие уникально.</p>',
    specs: [['Материал','Сосна'],['Цвет','Черный'],['Стиль','Лофт']]
  },
  'stool-pine-brown': {
    id: 'stool-pine-brown', name: 'Табурет J-LINE из сосны квадратный коричневый (натуральный)',
    model: '60103', price: 15960, category: 'furniture', categoryName: 'Мебель',
    availability: 'В наличии', images: ['img/furniture.png'],
    description: '<p>Натуральный цвет соснового дерева подчеркивает тепло интерьера.</p>',
    specs: [['Материал','Сосна'],['Цвет','Коричневый'],['Стиль','Рустик']]
  },
  'stool-pine-white': {
    id: 'stool-pine-white', name: 'Табурет J-LINE из сосны квадратный белый (шебби-шик)',
    model: '60104', price: 15960, category: 'furniture', categoryName: 'Мебель',
    availability: 'В наличии', images: ['img/furniture.png'],
    description: '<p>Белый табурет из дерева, идеально для загородного дома.</p>',
    specs: [['Материал','Сосна'],['Цвет','Белый']]
  },
  'stool-seagrass': {
    id: 'stool-seagrass', name: 'Табурет J-LINE с сиденьем из морской травы',
    model: '60105', price: 22584, category: 'furniture', categoryName: 'Мебель',
    availability: 'В наличии', images: ['img/furniture.png'],
    description: '<p>Экологичный табурет с плетеным сиденьем.</p>',
    specs: [['Материал','Дерево / Морская трава'],['Бренд','J-LINE']]
  },
  'coffee-tables-rattan': {
    id: 'coffee-tables-rattan', name: 'Столики кофейные J-LINE из бамбука и ротанга (комплект 2 шт)',
    model: '60106', price: 38088, category: 'furniture', categoryName: 'Мебель',
    availability: 'В наличии', images: ['img/furniture.png'],
    description: '<p>Набор из двух стильных плетеных столиков для гостиной или террасы.</p>',
    specs: [['Материал','Бамбук / Ротанг'],['В наборе','2 шт']]
  },
  'stopper-dog-beige': {
    id: 'stopper-dog-beige', name: 'Стоппер для двери J-LINE Собака (бежевый, 30 см)',
    model: '60107', price: 6288, category: 'furniture', categoryName: 'Мебель',
    availability: 'В наличии', images: ['img/furniture.png'],
    description: '<p>Утяжеленный дверной упор в оригинальном исполнении.</p>',
    specs: [['Высота','30 см'],['Цвет','Бежевый'],['Материал','Текстиль']]
  },
  'pouf-blue-metal': {
    id: 'pouf-blue-metal', name: 'Пуф J-LINE ярко-синий бархатный на металлокаркасе',
    model: '60108', price: 10080, category: 'furniture', categoryName: 'Мебель',
    availability: 'В наличии', images: ['img/furniture.png'],
    description: '<p>Элегантный пуф, который станет ярким пятном в вашем интерьере.</p>',
    specs: [['Материал','Бархат / Металл'],['Цвет','Синий']]
  },

  // --- MIRRORS ---
  'mirror-makeup-antique': {
    id: 'mirror-makeup-antique', name: 'Зеркало AMADEUS для макияжа «Антик» (25 см, Франция)',
    model: '100101', price: 2448, category: 'mirrors', categoryName: 'Зеркала',
    availability: 'В наличии', images: ['img/mirrors.png'],
    description: '<p>Винтажное настольное зеркало с эффектом старины.</p>',
    specs: [['Бренд','AMADEUS'],['Страна','Франция'],['Длина','25 см']]
  },
  'mirror-stand-figural': {
    id: 'mirror-stand-figural', name: 'Зеркало J-LINE настольное фигурное в металлической раме (69 см)',
    model: '100102', price: 8952, category: 'mirrors', categoryName: 'Зеркала',
    availability: 'В наличии', images: ['img/mirrors.png'],
    description: '<p>Декоративное фигурное зеркало на устойчивой подставке.</p>',
    specs: [['Бренд','J-LINE'],['Высота','69 см'],['Материал','Металл']]
  },
  'mirror-floor-fir': {
    id: 'mirror-floor-fir', name: 'Зеркало напольное J-LINE в раме из пихты овал (162 см)',
    model: '100103', price: 30816, category: 'mirrors', categoryName: 'Зеркала',
    availability: 'В наличии', images: ['img/mirrors.png'],
    description: '<p>Массивное зеркало в полный рост в раме из натурального дерева.</p>',
    specs: [['Материал','Дерево пихты'],['Высота','162 см'],['Форма','Овальная']]
  },
  'mirror-wall-rattan-120-black': {
    id: 'mirror-wall-rattan-120-black', name: 'Зеркало настенное J-LINE Ротанг/Сизаль круглое (черное, 120 см)',
    model: '100104', price: 64104, category: 'mirrors', categoryName: 'Зеркала',
    availability: 'В наличии', images: ['img/mirrors.png'],
    description: '<p>Дизайнерское настенное зеркало в черном плетеном обрамлении.</p>',
    specs: [['Диаметр','120 см'],['Материал','Ротанг / Сизаль'],['Цвет','Черный']]
  },
  'mirror-wall-rattan-120-brown': {
    id: 'mirror-wall-rattan-120-brown', name: 'Зеркало настенное J-LINE Ротанг/Сизаль круглое (коричневое, 120 см)',
    model: '100105', price: 64104, category: 'mirrors', categoryName: 'Зеркала',
    availability: 'В наличии', images: ['img/mirrors.png'],
    description: '<p>Крупное зеркало в экологичном стиле с отделкой из сизаля.</p>',
    specs: [['Диаметр','120 см'],['Цвет','Коричневый'],['Материал','Ротанг']]
  },
  'mirror-raffia-100': {
    id: 'mirror-raffia-100', name: 'Зеркало круглое J-LINE в раме из рафии (100 см, Бельгия)',
    model: '100106', price: 28368, category: 'mirrors', categoryName: 'Зеркала',
    availability: 'В наличии', images: ['img/mirrors.png'],
    description: '<p>Природные материалы для создания уникального интерьера.</p>',
    specs: [['Диаметр','100 см'],['Материал','Рафия'],['Бренд','J-LINE']]
  },
  'mirror-wood-case': {
    id: 'mirror-wood-case', name: 'Зеркало J-LINE фигурной формы в деревянном корпусе (42х72 см)',
    model: '100107', price: 18696, category: 'mirrors', categoryName: 'Зеркала',
    availability: 'В наличии', images: ['img/mirrors.png'],
    description: '<p>Оригинальное зеркало в коробе из натурального дерева.</p>',
    specs: [['Размер','42х72 см'],['Материал','Дерево'],['Бренд','J-LINE']]
  },
  'mirror-aluminum-180': {
    id: 'mirror-aluminum-180', name: 'Зеркало J-LINE овальное в алюминиевой раме (серебро, 180 см)',
    model: '100108', price: 47136, category: 'mirrors', categoryName: 'Зеркала',
    availability: 'В наличии', images: ['img/mirrors.png'],
    description: '<p>Высокое настенное зеркало в современном минималистичном стиле.</p>',
    specs: [['Размер','33х180 см'],['Материал','Алюминий'],['Цвет','Серебристый']]
  },
  'mirror-custom': {
    id: 'mirror-custom', name: 'Зеркало «Мудрость» (лимитированная серия)',
    model: '100999', price: 228, category: 'mirrors', categoryName: 'Зеркала',
    availability: 'В наличии', images: ['img/mirror-custom.png'],
    description: '<p>Зеркало с уникальным отражением, подчеркивающим уверенность и мудрость своего владельца. Эффект живого присутствия и глубокий взгляд.</p>',
    specs: [['Стиль','Реализм'],['Особенность','Эффект присутствия'],['Рама','Бескаркасное']]
  },


  // --- VASES ---
  'planter-face-38': {
    id: 'planter-face-38', name: 'Кашпо J-LINE «Лицо» белое фарфоровое (высота 38 см)',
    model: '110101', price: 13056, category: 'vases', categoryName: 'Вазоны',
    availability: 'В наличии', images: ['img/vases.png'],
    description: '<p>Скульптурное кашпо в форме человеческого лица. Арт-объект для цветов.</p>',
    specs: [['Высота','38 см'],['Бренд','J-LINE'],['Материал','Керамика']]
  },
  'planter-concrete-25': {
    id: 'planter-concrete-25', name: 'Кашпо J-LINE бетонное белое (25 см)',
    model: '110102', price: 1392, category: 'vases', categoryName: 'Вазоны',
    availability: 'В наличии', images: ['img/vases.png'],
    description: '<p>Минималистичное бетонное кашпо для суккулентов или комнатных растений.</p>',
    specs: [['Материал','Бетон'],['Цвет','Белый'],['Размер','25 см']]
  },
  'planter-rattan-legs-59': {
    id: 'planter-rattan-legs-59', name: 'Кашпо напольное J-LINE из ротанга на ножках (59 см)',
    model: '110103', price: 9888, category: 'vases', categoryName: 'Вазоны',
    availability: 'В наличии', images: ['img/vases.png'],
    description: '<p>Высокое плетеное кашпо, которое добавит интерьеру легкости.</p>',
    specs: [['Высота','59 см'],['Материал','Ротанг'],['Бренд','J-LINE']]
  },
  'planter-cream-matte-50': {
    id: 'planter-cream-matte-50', name: 'Кашпо напольное Light&Living кремовое матовое (50 см)',
    model: '110104', price: 32652, category: 'vases', categoryName: 'Вазоны',
    availability: 'В наличии', images: ['img/vases.png'],
    description: '<p>Премиум-кашпо с гладким матовым финишем.</p>',
    specs: [['Бренд','Light&Living'],['Высота','50 см'],['Цвет','Кремовый']]
  },
  'planter-metal-vintage-set': {
    id: 'planter-metal-vintage-set', name: 'Кашпо уличные AMADEUS винтажные серые (набор 2 шт)',
    model: '110105', price: 33048, category: 'vases', categoryName: 'Вазоны',
    availability: 'В наличии', images: ['img/vases.png'],
    description: '<p>Металлические вазоны в стиле прованс для сада или балкона.</p>',
    specs: [['Бренд','AMADEUS'],['В наборе','2 шт'],['Материал','Металл']]
  },
  'planter-house-ceramic': {
    id: 'planter-house-ceramic', name: 'Кашпо J-LINE «Домик» белое керамическое (16х7х16 см)',
    model: '110106', price: 1032, category: 'vases', categoryName: 'Вазоны',
    availability: 'В наличии', images: ['img/vases.png'],
    description: '<p>Необычное кашпо в форме сказочного домика.</p>',
    specs: [['Размер','16х7х16 см'],['Материал','Керамика'],['Цвет','Белый']]
  },
  'artificial-feather-70': {
    id: 'artificial-feather-70', name: 'Искусственное перо J-LINE белое декоративное (70 см)',
    model: '110107', price: 648, category: 'vases', categoryName: 'Вазоны',
    availability: 'В наличии', images: ['img/vases.png'],
    description: '<p>Декор для напольных ваз в стиле бохо.</p>',
    specs: [['Высота','70 см'],['Материал','Текстиль'],['Цвет','Белый']]
  },
  'artificial-bamboo-88': {
    id: 'artificial-bamboo-88', name: 'Искусственная веточка бамбука J-LINE (88 см)',
    model: '110108', price: 936, category: 'vases', categoryName: 'Вазоны',
    availability: 'В наличии', images: ['img/vases.png'],
    description: '<p>Неувядающая зелень для вашего уютного уголка.</p>',
    specs: [['Высота','88 см'],['Материал','Полимер'],['Бренд','J-LINE']]
  },

  // --- DISHES (Tableware) ---
  'jar-christmas-bow': {
    id: 'jar-christmas-bow', name: 'Банка для хранения J-LINE Рождественская с бантиком (6х6 см)',
    model: '120101', price: 1224, category: 'dishes', categoryName: 'Посуда',
    availability: 'В наличии', images: ['img/dishes.png'],
    description: '<p>Маленькая новогодняя баночка для специй или мелочей.</p>',
    specs: [['Размер','6х6 см'],['Материал','Доломит'],['Бренд','J-LINE']]
  },
  'jar-glass-590': {
    id: 'jar-glass-590', name: 'Банка для хранения J-LINE стеклянная (объем 590 мл)',
    model: '120102', price: 1416, category: 'dishes', categoryName: 'Посуда',
    availability: 'В наличии', images: ['img/dishes.png'],
    description: '<p>Классическая стеклянная емкость с плотной крышкой.</p>',
    specs: [['Объем','590 мл'],['Материал','Стекло']]
  },
  'placemat-pink-38': {
    id: 'placemat-pink-38', name: 'Коврик для сервировки J-LINE розовый круглый (38 см)',
    model: '120103', price: 679, category: 'dishes', categoryName: 'Посуда',
    availability: 'В наличии', images: ['img/dishes.png'],
    description: '<p>Защитный коврик под тарелку, устойчивый к загрязнениям.</p>',
    specs: [['Диаметр','38 см'],['Цвет','Розовый']]
  },
  'jar-bamboo-1600': {
    id: 'jar-bamboo-1600', name: 'Банка квадратная J-LINE стеклянная с бамбуковой крышкой (1.6 л)',
    model: '120104', price: 1656, category: 'dishes', categoryName: 'Посуда',
    availability: 'В наличии', images: ['img/dishes.png'],
    description: '<p>Вместительная стильная банка для круп, пасты или печенья.</p>',
    specs: [['Объем','1600 мл'],['Крышка','Бамбук'],['Бренд','J-LINE']]
  },
  'cups-ski-resort-set': {
    id: 'cups-ski-resort-set', name: 'Чашки J-LINE «Лыжный курорт» (набор 2 шт)',
    model: '120105', price: 4104, category: 'dishes', categoryName: 'Посуда',
    availability: 'В наличии', images: ['img/dishes.png'],
    description: '<p>Уютные кружки с зимними принтами для горячего какао.</p>',
    specs: [['В наборе','2 шт'],['Тематика','Зима'],['Материал','Керамика']]
  },
  'espresso-cup-white': {
    id: 'espresso-cup-white', name: 'Чашка для эспрессо J-LINE белая (180 мл)',
    model: '120106', price: 912, category: 'dishes', categoryName: 'Посуда',
    availability: 'В наличии', images: ['img/dishes.png'],
    description: '<p>Минималистичная чашка для крепкого кофе.</p>',
    specs: [['Объем','180 мл'],['Бренд','J-LINE']]
  },
  'glass-set-transparent': {
    id: 'glass-set-transparent', name: 'Стаканы J-LINE прозрачные из стекла (комплект)',
    model: '120107', price: 7728, category: 'dishes', categoryName: 'Посуда',
    availability: 'В наличии', images: ['img/dishes.png'],
    description: '<p>Набор качественных стеклянных стаканов для напитков.</p>',
    specs: [['Материал','Выдувное стекло'],['Бренд','J-LINE']]
  },
  'decanter-glass-lid': {
    id: 'decanter-glass-lid', name: 'Графин J-LINE стеклянный прозрачный с крышкой',
    model: '120108', price: 6768, category: 'dishes', categoryName: 'Посуда',
    availability: 'В наличии', images: ['img/dishes.png'],
    description: '<p>Элегантный графин для воды, сока или вина.</p>',
    specs: [['Материал','Стекло'],['Высота','28 см']]
  },

  // --- DECOR ---
  'chess-amadeus-box': {
    id: 'chess-amadeus-box', name: 'Шахматы AMADEUS в деревянной шкатулке (Франция)',
    model: '130101', price: 8208, category: 'decor', categoryName: 'Декор',
    availability: 'В наличии', images: ['img/decor.png'],
    description: '<p>Классическая настольная игра в премиальном исполнении. Идеальный подарок.</p>',
    specs: [['Бренд','AMADEUS'],['Материал','Дерево'],['Стиль','Классика']]
  },
  'wall-decor-map-light': {
    id: 'wall-decor-map-light', name: 'Карта мира J-LINE с подсветкой портов (116х175 см)',
    model: '130102', price: 62616, category: 'decor', categoryName: 'Декор',
    availability: 'В наличии', images: ['img/decor.png'],
    description: '<p>Грандиозный настенный декор, который сделает ваш кабинет уникальным.</p>',
    specs: [['Размер','116х175 см'],['Тип','Настенный с LED'],['Бренд','J-LINE']]
  },
  'wall-decor-map-mirrored': {
    id: 'wall-decor-map-mirrored', name: 'Карта мира J-LINE с зеркальными элементами (81х145 см)',
    model: '130103', price: 47160, category: 'decor', categoryName: 'Декор',
    availability: 'В наличии', images: ['img/decor.png'],
    description: '<p>Панно в форме карты мира с зеркальным блеском.</p>',
    specs: [['Размер','81х145 см'],['Материал','Зеркало / Акрил']]
  },
  'art-rabbit-sports-set': {
    id: 'art-rabbit-sports-set', name: 'Картины J-LINE «Спортивные зайцы» (набор 4 шт)',
    model: '130104', price: 32040, category: 'decor', categoryName: 'Декор',
    availability: 'В наличии', images: ['img/decor.png'],
    description: '<p>Четыре забавных картины с зайцами, выполненными в динамике.</p>',
    specs: [['Количество','4 шт'],['Бренд','J-LINE'],['Рама','Дерево']]
  },
  'art-vases-pastel-set': {
    id: 'art-vases-pastel-set', name: 'Картины J-LINE «Вазы с сухоцветами» (набор 2 шт, 62х92 см)',
    model: '130105', price: 41088, category: 'decor', categoryName: 'Декор',
    availability: 'В наличии', images: ['img/decor.png'],
    description: '<p>Пастельные натюрморты в скандинавском стиле.</p>',
    specs: [['Размер','62х92 см'],['Количество','2 шт']]
  },
  'art-buddha-relief': {
    id: 'art-buddha-relief', name: 'Картина Будда J-LINE белая рельефная на холсте (120х90 см)',
    model: '130106', price: 47136, category: 'decor', categoryName: 'Декор',
    availability: 'В наличии', images: ['img/decor.png'],
    description: '<p>Массивный настенный холст с объемным изображением Будды.</p>',
    specs: [['Размер','120х90 см'],['Материал','Холст / Рельефная паста']]
  },
  'wreath-willow-40': {
    id: 'wreath-willow-40', name: 'Венок J-LINE из натуральной ивы ручной работы (40 см)',
    model: '130107', price: 2688, category: 'decor', categoryName: 'Декор',
    availability: 'В наличии', images: ['img/decor.png'],
    description: '<p>Основа для творческого декора или готовый элемент интерьера.</p>',
    specs: [['Диаметр','40 см'],['Материал','Ивовые прутья']]
  },
  'tic-tac-toe-amadeus': {
    id: 'tic-tac-toe-amadeus', name: 'Игра «Крестики-нолики» AMADEUS в деревянном боксе',
    model: '130108', price: 3912, category: 'decor', categoryName: 'Декор',
    availability: 'В наличии', images: ['img/decor.png'],
    description: '<p>Интеллектуальный интерьерный декор, в который можно играть.</p>',
    specs: [['Бренд','AMADEUS'],['Материал','Дерево / Латунь']]
  },

  // --- TEXTILE ---
  'plaid-beige-170': {
    id: 'plaid-beige-170', name: 'Плед J-LINE бежевый хлопковый (130х170 см)',
    model: '140101', price: 4704, category: 'textile', categoryName: 'Текстиль',
    availability: 'В наличии', images: ['img/textile.png'],
    description: '<p>Универсальный бежевый плед, который подойдет к любому интерьеру.</p>',
    specs: [['Размер','130х170 см'],['Материал','Хлопок'],['Бренд','J-LINE']]
  },
  'plaid-geo-terracotta': {
    id: 'plaid-geo-terracotta', name: 'Плед AMADEUS терракотово-серый с геометрией (130х170 см)',
    model: '140102', price: 6972, category: 'textile', categoryName: 'Текстиль',
    availability: 'В наличии', images: ['img/textile.png'],
    description: '<p>Стильный геометрический принт и тепло французского бренда.</p>',
    specs: [['Размер','130х170 см'],['Бренд','AMADEUS']]
  },
  'rabbit-fur-brown': {
    id: 'rabbit-fur-brown', name: 'Шкурка кролика J-LINE натуральная (темно-коричневая, 35х45 см)',
    model: '140103', price: 2376, category: 'textile', categoryName: 'Текстиль',
    availability: 'В наличии', images: ['img/textile.png'],
    description: '<p>Мягкий декоративный мех для уютного кресла или тумбы.</p>',
    specs: [['Размер','35х45 см'],['Тип','Натуральный мех']]
  },
  'rabbit-fur-grey': {
    id: 'rabbit-fur-grey', name: 'Шкурка кролика J-LINE натуральная (серая, 35х45 см)',
    model: '140104', price: 2376, category: 'textile', categoryName: 'Текстиль',
    availability: 'В наличии', images: ['img/textile.png'],
    description: '<p>Настоящая шкурка нежного серого цвета.</p>',
    specs: [['Размер','35х45 см'],['Материал','Мех кролика']]
  },
  'rabbit-fur-orange': {
    id: 'rabbit-fur-orange', name: 'Шкурка кролика J-LINE натуральная (оранжевая, 35х45 см)',
    model: '140105', price: 2376, category: 'textile', categoryName: 'Текстиль',
    availability: 'В наличии', images: ['img/textile.png'],
    description: '<p>Акцентная меховая шкурка в ярком оранжевом исполнении.</p>',
    specs: [['Размер','35х45 см'],['Цвет','Оранжевый']]
  },
  'cushion-plush-beige': {
    id: 'cushion-plush-beige', name: 'Подушка J-LINE плюшевая бежевая (45х45 см)',
    model: '140106', price: 3168, category: 'textile', categoryName: 'Текстиль',
    availability: 'В наличии', images: ['img/textile.png'],
    description: '<p>Невероятно мягкая подушка для сна или декора дивана.</p>',
    specs: [['Размер','45х45 см'],['Текстура','Плюш']]
  },
  'cushion-horse-brown': {
    id: 'cushion-horse-brown', name: 'Подушки декоративные J-LINE «Кони» коричневые (60х60 см)',
    model: '140107', price: 11496, category: 'textile', categoryName: 'Текстиль',
    availability: 'В наличии', images: ['img/textile.png'],
    description: '<p>Эффектные подушки большого размера с анималистичным принтом.</p>',
    specs: [['Размер','60х60 см'],['Бренд','J-LINE']]
  },

  // --- PHOTO FRAMES ---
  'frame-gold-relief-13': {
    id: 'frame-gold-relief-13', name: 'Фоторамка J-LINE металлическая золотая рельефная (13х18 см)',
    model: '160101', price: 2016, category: 'frames', categoryName: 'Фоторамки',
    availability: 'В наличии', images: ['img/gifts.png'],
    description: '<p>Богатая текстура золота для ваших любимых снимков.</p>',
    specs: [['Материал','Металл'],['Размер','13х18 см'],['Бренд','J-LINE']]
  },
  'frame-gold-stripes-13': {
    id: 'frame-gold-stripes-13', name: 'Фоторамка J-LINE золотая со полосками (13х18 см)',
    model: '160102', price: 1632, category: 'frames', categoryName: 'Фоторамки',
    availability: 'В наличии', images: ['img/gifts.png'],
    description: '<p>Минималистичная рамка с тонкими линиями.</p>',
    specs: [['Размер','13х18 см'],['Цвет','Золото']]
  },
  'frame-gold-large-20': {
    id: 'frame-gold-large-20', name: 'Фоторамка J-LINE металлическая золотая (20х25 см)',
    model: '160103', price: 3384, category: 'frames', categoryName: 'Фоторамки',
    availability: 'В наличии', images: ['img/gifts.png'],
    description: '<p>Крупноформатная рамка для важных моментов.</p>',
    specs: [['Размер','20х25 см'],['Материал','Латунь/Стекло']]
  },
  'frame-silver-mirror-10': {
    id: 'frame-silver-mirror-10', name: 'Фоторамка J-LINE зеркальная серебристая (10х15 см)',
    model: '160104', price: 2376, category: 'frames', categoryName: 'Фоторамки',
    availability: 'В наличии', images: ['img/gifts.png'],
    description: '<p>Зеркальная рамка в холодном серебре.</p>',
    specs: [['Размер','10х15 см'],['Материал','Стекло/Зеркало']]
  },
  'frame-gold-mirror-10': {
    id: 'frame-gold-mirror-10', name: 'Фоторамка J-LINE зеркальная золотая (10х15 см)',
    model: '160105', price: 2136, category: 'frames', categoryName: 'Фоторамки',
    availability: 'В наличии', images: ['img/gifts.png'],
    description: '<p>Теплое золото в зеркальном исполнении.</p>',
    specs: [['Размер','10х15 см'],['Бренд','J-LINE']]
  },
  'frame-black-metal-10': {
    id: 'frame-black-metal-10', name: 'Фоторамка J-LINE металлическая черная (10х15 см)',
    model: '160106', price: 1632, category: 'frames', categoryName: 'Фоторамки',
    availability: 'В наличии', images: ['img/gifts.png'],
    description: '<p>Стильная черная рамка для мужского кабинета или лофта.</p>',
    specs: [['Размер','10х15 см'],['Цвет','Черный']]
  },
  'frame-classic-gold-13': {
    id: 'frame-classic-gold-13', name: 'Фоторамка J-LINE классическая золотистая (13х18 см)',
    model: '160107', price: 2112, category: 'frames', categoryName: 'Фоторамки',
    availability: 'В наличии', images: ['img/gifts.png'],
    description: '<p>Традиционный дизайн, подходящий любому дому.</p>',
    specs: [['Размер','13х18 см'],['Бренд','J-LINE']]
  },

  // --- JEWELRY & STORAGE ---
  'storage-bamboo-lid': {
    id: 'storage-bamboo-lid', name: 'Емкость для хранения J-LINE с бамбуковой крышкой (1.6 л)',
    model: '170101', price: 1656, category: 'jewelry', categoryName: 'Украшения',
    availability: 'В наличии', images: ['img/jewelry.png'],
    description: '<p>Практичный органайзер для ванной или кухни.</p>',
    specs: [['Объем','1600 мл'],['Крышка','Бамбук']]
  },
  'storage-glass-1100': {
    id: 'storage-glass-1100', name: 'Емкость для хранения J-LINE стеклянная (1.1 л)',
    model: '170102', price: 1632, category: 'jewelry', categoryName: 'Украшения',
    availability: 'В наличии', images: ['img/jewelry.png'],
    description: '<p>Прозрачная банка для красоты и порядка.</p>',
    specs: [['Объем','1100 мл'],['Материал','Стекло']]
  },
  'oil-vinegar-bottle': {
    id: 'oil-vinegar-bottle', name: 'Бутылочка для масла и уксуса AMADEUS (Франция)',
    model: '170103', price: 1548, category: 'dishes', categoryName: 'Посуда',
    availability: 'В наличии', images: ['img/dishes.png'],
    description: '<p>Удобная бутылка для заправки блюд. Производство - Франция.</p>',
    specs: [['Бренд','AMADEUS'],['Объем','250 мл']]
  },
  'dish-gold-flower': {
    id: 'dish-gold-flower', name: 'Блюдо J-LINE фигурное металлическое золотое (13х13 см)',
    model: '170104', price: 1536, category: 'jewelry', categoryName: 'Украшения',
    availability: 'В наличии', images: ['img/jewelry.png'],
    description: '<p>Маленькое блюдце для самых дорогих украшений.</p>',
    specs: [['Размер','13х13 см'],['Материал','Металл']]
  },
  'dish-wood-leaf': {
    id: 'dish-wood-leaf', name: 'Блюдо J-LINE листок из натурального дерева (Бельгия)',
    model: '170105', price: 3480, category: 'decor', categoryName: 'Декор',
    availability: 'В наличии', images: ['img/decor.png'],
    description: '<p>Природная эстетика в хранении мелочей.</p>',
    specs: [['Материал','Дерево'],['Бренд','J-LINE']]
  },
  'jewelry-box-mirrored': {
    id: 'jewelry-box-mirrored', name: 'Шкатулка для украшений J-LINE зеркальная с золотистым краем',
    model: '170106', price: 5088, category: 'jewelry', categoryName: 'Украшения',
    availability: 'В наличии', images: ['img/jewelry.png'],
    description: '<p>Шкатулка, которая сама выглядит как драгоценность.</p>',
    specs: [['Тип','Шкатулка'],['Материал','Стекло / Металл']]
  },
  'watch-stand-velvet': {
    id: 'watch-stand-velvet', name: 'Подставка для часов J-LINE бархатная серая',
    model: '170107', price: 3024, category: 'jewelry', categoryName: 'Украшения',
    availability: 'В наличии', images: ['img/jewelry.png'],
    description: '<p>Мягкое хранение ваших аксессуаров.</p>',
    specs: [['Материал','Бархат'],['Цвет','Серый']]
  }
};

// --- LOGIC ---

function getRelated(product) {
  return Object.values(PRODUCTS_DB)
    .filter(p => p.id !== product.id && p.category === product.category)
    .slice(0, 6);
}

document.addEventListener('DOMContentLoaded', () => {
    // Shared navigation handling is in components.js
    
    const params = new URLSearchParams(location.search);
    const productId = params.get('id');
    if (!productId) return;

    const product = PRODUCTS_DB[productId];
    if (!product) {
        // Fallback or error
        return;
    }

    // Populate Page
    document.title = `${product.name} — HOME.RU`;
    
    // Breadcrumbs
    const bcCat = document.getElementById('bc-category');
    if (bcCat) {
        bcCat.textContent = product.categoryName;
        bcCat.href = `category.html?cat=${product.category}`;
    }
    const bcProd = document.getElementById('bc-product');
    if (bcProd) bcProd.textContent = product.name;

    // Gallery
    const mainImg = document.getElementById('main-product-img');
    if (mainImg) mainImg.src = product.images[0];

    const thumbs = document.getElementById('gallery-thumbs');
    if (thumbs && product.images) {
        thumbs.innerHTML = '';
        product.images.forEach((img, idx) => {
            const thumb = document.createElement('img');
            thumb.src = img;
            thumb.className = `thumb-img ${idx === 0 ? 'active' : ''}`;
            thumb.onclick = () => {
                mainImg.src = img;
                document.querySelectorAll('.thumb-img').forEach(t => t.classList.remove('active'));
                thumb.classList.add('active');
            };
            thumbs.appendChild(thumb);
        });
    }

    // Details
    const nameEl = document.getElementById('product-detail-name');
    if (nameEl) nameEl.textContent = product.name;
    
    const priceEl = document.getElementById('product-detail-price');
    if (priceEl) priceEl.textContent = `${product.price.toLocaleString('ru-RU')} ₽`;
    
    const modelEl = document.getElementById('product-model-num');
    if (modelEl) modelEl.textContent = product.model;
    
    const descEl = document.getElementById('product-description-text');
    if (descEl) descEl.innerHTML = product.description;

    const specsTable = document.getElementById('specs-table');
    if (specsTable && product.specs) {
        specsTable.innerHTML = '';
        product.specs.forEach(([label, val]) => {
            const tr = document.createElement('tr');
            tr.innerHTML = `<td>${label}</td><td>${val}</td>`;
            specsTable.appendChild(tr);
        });
    }

    // Related
    const relatedTrack = document.getElementById('related-track');
    if (relatedTrack) {
        const related = getRelated(product);
        relatedTrack.innerHTML = '';
        related.forEach(p => {
            const card = document.createElement('div');
            card.className = 'product-card';
            card.innerHTML = `
                <div class="product-img-wrap">
                    <a href="product.html?id=${p.id}"><img src="${p.images[0]}" alt="${p.name}"></a>
                </div>
                <div class="product-info">
                    <a href="product.html?id=${p.id}" class="product-name">${p.name}</a>
                    <div class="product-footer">
                        <span class="product-price">${p.price.toLocaleString('ru-RU')} ₽</span>
                        <button class="add-to-cart-btn" onclick="addToCartSilent('${p.id}')">В корзину</button>
                    </div>
                </div>
            `;
            relatedTrack.appendChild(card);
        });
    }
});

// Helper for quick add
window.addToCartSilent = (id) => {
    const product = PRODUCTS_DB[id];
    if (!product) return;
    let cart = JSON.parse(localStorage.getItem('cartItems') || '[]');
    const existing = cart.find(item => item.id === id);
    if (existing) {
        existing.qty += 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            img: product.images[0],
            qty: 1
        });
    }
    localStorage.setItem('cartItems', JSON.stringify(cart));
    updateCartBadges();
};

function updateCartBadges() {
    const cart = JSON.parse(localStorage.getItem('cartItems') || '[]');
    const count = cart.reduce((sum, item) => sum + item.qty, 0);
    document.querySelectorAll('.cart-badge').forEach(b => b.textContent = count);
}
