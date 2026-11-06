/* Coco Beach — interacciones, idiomas y reservas por WhatsApp */
(() => {
  const WA = '50239995950';
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const root = document.documentElement;
  window.coco = window.coco || { p: 0 };

  /* ================= textos ES / EN ================= */
  const T = {
    es: {
      'nav.villa': 'La villa', 'nav.rooms': 'Habitaciones', 'nav.amenities': 'Amenidades', 'nav.gallery': 'Galería', 'nav.location': 'Ubicación', 'nav.book': 'Reservar',
      'hero.eyebrow': 'El Paredón · Pacífico de Guatemala',
      'hero.t1a': 'Donde el sol', 'hero.t1b': 'se esconde en el mar',
      'hero.l1': 'Una villa privada con piscina, palmeras y atardeceres que no se olvidan.',
      'hero.eyebrow2': 'Coco Beach Villa', 'hero.t2a': '6 habitaciones.', 'hero.t2b': 'Una piscina que brilla de noche.',
      'hero.l2': 'Cada habitación con baño privado. Sala de juegos, hamacas y terraza junto al agua.',
      'hero.eyebrow3': 'Reserva directo', 'hero.t3a': 'Una habitación', 'hero.t3b': 'o la villa entera.',
      'hero.scroll': 'Desliza',
      'cta.room': 'Reservar habitación', 'cta.villa': 'Reservar villa completa',
      'villa.kicker': 'La villa', 'villa.title': 'Arquitectura blanca, <em>alma de playa</em>.',
      'villa.p1': 'Coco Beach es una villa moderna de dos niveles rodeada de palmeras en El Paredón, el pueblo surfero más querido de Guatemala. Ventanales de piso a techo, una piscina con iluminación nocturna y espacios pensados para desconectarse.',
      'villa.p2': 'Ven en pareja y reserva una habitación, o trae a toda tu gente y quédate con la villa completa.',
      'villa.s1': 'habitaciones', 'villa.s2': 'baños privados', 'villa.s3': 'piscina iluminada', 'villa.s4': 'atardeceres', 'villa.badge': 'a pasos del Pacífico',
      'opt.kicker': 'Dos formas de quedarte', 'opt.title': 'Elige tu <em>estancia</em>',
      'opt.roomTag': 'Habitación privada', 'opt.roomTitle': 'Tu propio rincón en la villa',
      'opt.roomText': 'Reserva una de nuestras 6 habitaciones con baño privado y disfruta de la piscina, la sala de juegos y las áreas comunes.',
      'opt.villaTag': 'Villa completa', 'opt.villaTitle': 'Toda la villa, solo para tu grupo',
      'opt.villaText': 'Las 6 habitaciones, la piscina y la sala de juegos en exclusiva. Ideal para familias, amigos, retiros y celebraciones.',
      'rooms.kicker': 'Habitaciones', 'rooms.title': 'Descanso con <em>brisa de mar</em>',
      'rooms.sub': 'Todas con baño privado, acabados en mármol negro, espejos iluminados y amenidades de bienvenida.',
      'rooms.book': 'Reservar esta', 'rooms.photos': 'fotos',
      'room.1.name': 'Habitación 1', 'room.1.desc': 'Cama grande, ventanales hacia la piscina y un rincón de lectura. Baño privado con ducha de mármol.',
      'room.2.name': 'Habitación 2', 'room.2.desc': 'Luminosa y cálida, con cama grande y baño privado con lavamanos de vidrio sobre madera.',
      'room.3.name': 'Habitación 3', 'room.3.desc': 'Dos camas, perfecta para amigos o familia. Baño con doble lavamanos y ducha de mármol.',
      'room.4.name': 'Habitación 4', 'room.4.desc': 'Dos camas y mucha luz natural. Baño privado con doble lavamanos y espejo LED.',
      'room.5.name': 'Habitación 5', 'room.5.desc': 'Con balcón y vista directa a la piscina y las palmeras. Baño con espejo circular iluminado.',
      'chip.bigbed': 'Cama grande', 'chip.twobeds': '2 camas', 'chip.ac': 'A/C', 'chip.fan': 'Ventilador', 'chip.bath': 'Baño privado', 'chip.poolview': 'Vista a la piscina', 'chip.balcony': 'Balcón',
      'am.kicker': 'Amenidades', 'am.title': 'Todo para <em>no salir</em> de la villa',
      'am.pool': 'Piscina iluminada', 'am.poolT': 'Con mosaico, iluminación nocturna y hamacas bajo las palmeras.',
      'am.games': 'Sala de juegos', 'am.gamesT': 'Mesa de billar, TV y sala lounge con vista a la piscina.',
      'am.bar': 'Hamacas y sillas de playa', 'am.barT': 'Para descansar a la sombra de las palmeras o llevártelas a la arena.',
      'am.ac': 'Aire acondicionado', 'am.acT': 'Habitaciones con A/C y ventilador de techo para noches frescas.',
      'am.bath': 'Baños privados', 'am.bathT': 'Duchas de mármol, espejos LED y amenidades Coco Beach.',
      'am.sunset': 'Atardeceres', 'am.sunsetT': 'El sol cae directo sobre el Pacífico, a pasos de la villa.',
      'am.surf': 'Surf', 'am.surfT': 'El Paredón es la capital del surf en Guatemala, con olas todo el año.',
      'am.flex': 'Reserva flexible', 'am.flexT': 'Por habitación o villa completa. Te respondemos por WhatsApp.',
      'gal.kicker': 'Galería', 'gal.title': 'Mira cada <em>rincón</em>', 'gal.all': 'Todo', 'gal.ext': 'Exterior', 'gal.int': 'Interiores', 'gal.room': 'Habitaciones', 'gal.bath': 'Baños',
      'par.kicker': 'El Paredón, Escuintla', 'par.title': 'Arena volcánica, <em>olas</em> y el cielo en llamas.',
      'par.text': 'Un pueblo costero relajado en el Pacífico guatemalteco: surf por la mañana, hamaca por la tarde y el atardecer más lindo del país para cerrar el día.',
      'book.kicker': 'Reservas', 'book.title': 'Reserva en <em>2 minutos</em> por WhatsApp',
      'book.text': 'Elige tus fechas y te enviamos disponibilidad y tarifa directamente por WhatsApp. Sin comisiones, sin intermediarios.',
      'book.s1': 'Completa el formulario', 'book.s2': 'Se abre WhatsApp con tu mensaje listo', 'book.s3': 'Confirmamos tu reserva',
      'form.room': 'Habitación', 'form.villa': 'Villa completa', 'form.whichRoom': 'Habitación', 'form.anyRoom': 'Cualquiera disponible',
      'form.in': 'Llegada', 'form.out': 'Salida', 'form.adults': 'Adultos', 'form.kids': 'Niños', 'form.name': 'Tu nombre', 'form.namePh': 'Nombre y apellido',
      'form.msg': 'Comentarios (opcional)', 'form.msgPh': 'Celebración, hora de llegada, preguntas…', 'form.send': 'Enviar por WhatsApp',
      'form.fine': 'Te responderemos con disponibilidad y tarifa. Tu reserva se confirma por WhatsApp.',
      'form.night': 'noche', 'form.nights': 'noches',
      'err.dates': 'Elige tus fechas de llegada y salida.', 'err.order': 'La salida debe ser después de la llegada.', 'err.name': 'Escribe tu nombre.',
      'loc.kicker': 'Ubicación', 'loc.title': 'El Paredón, <em>Guatemala</em>',
      'loc.text': 'En la costa del Pacífico, departamento de Escuintla. Escríbenos y te enviamos la ubicación exacta y cómo llegar.', 'loc.open': 'Abrir en Google Maps',
      'foot.tag': 'Villa privada · El Paredón, Guatemala',
      'wa.hello': '¡Hola Coco Beach! 🌴 Me gustaría reservar:', 'wa.type': 'Tipo', 'wa.room': 'Habitación', 'wa.villa': 'Villa completa',
      'wa.which': 'Habitación preferida', 'wa.any': 'Cualquiera disponible', 'wa.in': 'Llegada', 'wa.out': 'Salida',
      'wa.guests': 'Huéspedes', 'wa.adults': 'adultos', 'wa.adult': 'adulto', 'wa.kids': 'niños', 'wa.kid': 'niño', 'wa.name': 'Nombre', 'wa.notes': 'Comentarios',
      'wa.ask': '¿Tienen disponibilidad? ¡Gracias!', 'wa.generic': '¡Hola Coco Beach! 🌴 Quisiera información para reservar.',
    },
    en: {
      'nav.villa': 'The villa', 'nav.rooms': 'Rooms', 'nav.amenities': 'Amenities', 'nav.gallery': 'Gallery', 'nav.location': 'Location', 'nav.book': 'Book',
      'hero.eyebrow': 'El Paredón · Guatemala’s Pacific coast',
      'hero.t1a': 'Where the sun', 'hero.t1b': 'melts into the sea',
      'hero.l1': 'A private villa with a pool, palm trees and sunsets you won’t forget.',
      'hero.eyebrow2': 'Coco Beach Villa', 'hero.t2a': '6 bedrooms.', 'hero.t2b': 'A pool that glows at night.',
      'hero.l2': 'Every room has its own bathroom. Game room, hammocks and a terrace by the water.',
      'hero.eyebrow3': 'Book direct', 'hero.t3a': 'One room', 'hero.t3b': 'or the whole villa.',
      'hero.scroll': 'Scroll',
      'cta.room': 'Book a room', 'cta.villa': 'Book the whole villa',
      'villa.kicker': 'The villa', 'villa.title': 'White architecture, <em>beach soul</em>.',
      'villa.p1': 'Coco Beach is a modern two-story villa surrounded by palm trees in El Paredón, Guatemala’s favorite surf town. Floor-to-ceiling windows, a pool lit up at night and spaces made for switching off.',
      'villa.p2': 'Come as a couple and book a room, or bring your whole crew and take the entire villa.',
      'villa.s1': 'bedrooms', 'villa.s2': 'private baths', 'villa.s3': 'lit pool', 'villa.s4': 'sunsets', 'villa.badge': 'steps from the Pacific',
      'opt.kicker': 'Two ways to stay', 'opt.title': 'Choose your <em>stay</em>',
      'opt.roomTag': 'Private room', 'opt.roomTitle': 'Your own corner of the villa',
      'opt.roomText': 'Book one of our 6 rooms with private bathroom and enjoy the pool, game room and shared spaces.',
      'opt.villaTag': 'Whole villa', 'opt.villaTitle': 'The entire villa, just for your group',
      'opt.villaText': 'All 6 rooms, the pool and the game room — exclusively yours. Perfect for families, friends, retreats and celebrations.',
      'rooms.kicker': 'Rooms', 'rooms.title': 'Rest with a <em>sea breeze</em>',
      'rooms.sub': 'All with private bathrooms, black marble finishes, backlit mirrors and welcome amenities.',
      'rooms.book': 'Book this room', 'rooms.photos': 'photos',
      'room.1.name': 'Room 1', 'room.1.desc': 'Large bed, windows facing the pool and a reading nook. Private bathroom with marble shower.',
      'room.2.name': 'Room 2', 'room.2.desc': 'Bright and warm, with a large bed and private bathroom with a glass vessel sink on wood.',
      'room.3.name': 'Room 3', 'room.3.desc': 'Two beds, perfect for friends or family. Bathroom with double sink and marble shower.',
      'room.4.name': 'Room 4', 'room.4.desc': 'Two beds and plenty of natural light. Private bathroom with double sink and LED mirror.',
      'room.5.name': 'Room 5', 'room.5.desc': 'With a balcony overlooking the pool and palm trees. Bathroom with a round backlit mirror.',
      'chip.bigbed': 'Large bed', 'chip.twobeds': '2 beds', 'chip.ac': 'A/C', 'chip.fan': 'Ceiling fan', 'chip.bath': 'Private bath', 'chip.poolview': 'Pool view', 'chip.balcony': 'Balcony',
      'am.kicker': 'Amenities', 'am.title': 'Everything so you <em>never leave</em>',
      'am.pool': 'Lit pool', 'am.poolT': 'Mosaic tiles, night lighting and hammocks under the palms.',
      'am.games': 'Game room', 'am.gamesT': 'Pool table, TV and a lounge overlooking the pool.',
      'am.bar': 'Hammocks & beach chairs', 'am.barT': 'Relax in the shade of the palms or take them down to the sand.',
      'am.ac': 'Air conditioning', 'am.acT': 'Rooms with A/C and ceiling fans for cool nights.',
      'am.bath': 'Private baths', 'am.bathT': 'Marble showers, LED mirrors and Coco Beach amenities.',
      'am.sunset': 'Sunsets', 'am.sunsetT': 'The sun drops straight into the Pacific, steps away.',
      'am.surf': 'Surf', 'am.surfT': 'El Paredón is Guatemala’s surf capital, with waves all year.',
      'am.flex': 'Flexible booking', 'am.flexT': 'Per room or the whole villa. We reply on WhatsApp.',
      'gal.kicker': 'Gallery', 'gal.title': 'See every <em>corner</em>', 'gal.all': 'All', 'gal.ext': 'Outdoors', 'gal.int': 'Interiors', 'gal.room': 'Rooms', 'gal.bath': 'Bathrooms',
      'par.kicker': 'El Paredón, Escuintla', 'par.title': 'Volcanic sand, <em>waves</em> and a sky on fire.',
      'par.text': 'A laid-back beach town on Guatemala’s Pacific coast: surf in the morning, hammock in the afternoon and the country’s best sunset to close the day.',
      'book.kicker': 'Bookings', 'book.title': 'Book in <em>2 minutes</em> on WhatsApp',
      'book.text': 'Pick your dates and we’ll send availability and rates straight to WhatsApp. No fees, no middlemen.',
      'book.s1': 'Fill out the form', 'book.s2': 'WhatsApp opens with your message ready', 'book.s3': 'We confirm your booking',
      'form.room': 'Room', 'form.villa': 'Whole villa', 'form.whichRoom': 'Room', 'form.anyRoom': 'Any available',
      'form.in': 'Check-in', 'form.out': 'Check-out', 'form.adults': 'Adults', 'form.kids': 'Children', 'form.name': 'Your name', 'form.namePh': 'Full name',
      'form.msg': 'Comments (optional)', 'form.msgPh': 'Celebration, arrival time, questions…', 'form.send': 'Send via WhatsApp',
      'form.fine': 'We’ll reply with availability and rates. Your booking is confirmed on WhatsApp.',
      'form.night': 'night', 'form.nights': 'nights',
      'err.dates': 'Choose your check-in and check-out dates.', 'err.order': 'Check-out must be after check-in.', 'err.name': 'Please enter your name.',
      'loc.kicker': 'Location', 'loc.title': 'El Paredón, <em>Guatemala</em>',
      'loc.text': 'On the Pacific coast, in the department of Escuintla. Message us and we’ll send the exact location and directions.', 'loc.open': 'Open in Google Maps',
      'foot.tag': 'Private villa · El Paredón, Guatemala',
      'wa.hello': 'Hi Coco Beach! 🌴 I’d like to book:', 'wa.type': 'Type', 'wa.room': 'Room', 'wa.villa': 'Whole villa',
      'wa.which': 'Preferred room', 'wa.any': 'Any available', 'wa.in': 'Check-in', 'wa.out': 'Check-out',
      'wa.guests': 'Guests', 'wa.adults': 'adults', 'wa.adult': 'adult', 'wa.kids': 'children', 'wa.kid': 'child', 'wa.name': 'Name', 'wa.notes': 'Comments',
      'wa.ask': 'Do you have availability? Thanks!', 'wa.generic': 'Hi Coco Beach! 🌴 I’d like info about booking.',
    },
  };
  let lang = 'es';
  try { lang = localStorage.getItem('coco-lang') || (navigator.language || 'es').slice(0, 2); } catch (e) {}
  if (!T[lang]) lang = 'es';
  const t = (k) => T[lang][k] ?? T.es[k] ?? k;

  function applyLang() {
    root.lang = lang;
    $$('[data-i18n]').forEach((el) => { el.textContent = t(el.dataset.i18n); });
    $$('[data-i18n-html]').forEach((el) => { el.innerHTML = t(el.dataset.i18nHtml); });
    $$('[data-i18n-ph]').forEach((el) => { el.placeholder = t(el.dataset.i18nPh); });
    $$('a[href^="https://wa.me/"]').forEach((a) => { if (!a.closest('form')) a.href = `https://wa.me/${WA}?text=${encodeURIComponent(t('wa.generic'))}`; });
    updateNights();
    window.dispatchEvent(new Event('coco:lang'));
  }
  $('#langBtn').addEventListener('click', () => {
    lang = lang === 'es' ? 'en' : 'es';
    try { localStorage.setItem('coco-lang', lang); } catch (e) {}
    applyLang();
  });

  /* ================= habitaciones ================= */
  const ROOMS = [
    { n: 1, cover: 4, imgs: [4, 2, 1, 7, 3, 6, 5], chips: ['bigbed', 'ac', 'fan', 'bath', 'poolview'] },
    { n: 2, cover: 3, imgs: [3, 2, 1, 4, 6, 5], chips: ['bigbed', 'ac', 'fan', 'bath'] },
    { n: 3, cover: 4, imgs: [4, 2, 1, 3], chips: ['twobeds', 'fan', 'bath'] },
    { n: 4, cover: 4, imgs: [4, 2, 1, 3], chips: ['twobeds', 'fan', 'bath'] },
    { n: 5, cover: 1, imgs: [1, 3, 2], chips: ['balcony', 'poolview', 'bath'] },
  ];
  const roomGrid = $('#roomGrid');
  roomGrid.innerHTML = ROOMS.map((r) => `
    <article class="room tilt reveal" data-room="${r.n}">
      <div class="car${r.flip ? ' flip' : ''}">
        <div class="car-track">${r.imgs.map((i, k) => `<img src="img/room${r.n}-${i}.webp" alt="" loading="lazy" data-k="${k}">`).join('')}</div>
        <span class="room-num">No. ${r.n}</span>
        <button class="car-btn car-prev" type="button" aria-label="‹">‹</button>
        <button class="car-btn car-next" type="button" aria-label="›">›</button>
        <div class="car-dots">${r.imgs.map((_, k) => `<i class="${k ? '' : 'on'}"></i>`).join('')}</div>
      </div>
      <div class="room-body">
        <h3 data-i18n="room.${r.n}.name"></h3>
        <p data-i18n="room.${r.n}.desc"></p>
        <div class="chips">${r.chips.map((c) => `<span data-i18n="chip.${c}"></span>`).join('')}</div>
        <a href="#book" class="btn btn-dark btn-sm" data-book="room" data-room="${r.n}" data-i18n="rooms.book"></a>
      </div>
    </article>`).join('');

  $$('.car').forEach((car) => {
    const track = $('.car-track', car), dots = $$('.car-dots i', car), n = dots.length;
    let i = 0, sx = null;
    const go = (k) => { i = (k + n) % n; track.style.transform = `translateX(${-i * 100}%)`; dots.forEach((d, j) => d.classList.toggle('on', j === i)); };
    $('.car-prev', car).addEventListener('click', () => go(i - 1));
    $('.car-next', car).addEventListener('click', () => go(i + 1));
    car.addEventListener('touchstart', (e) => { sx = e.touches[0].clientX; }, { passive: true });
    car.addEventListener('touchend', (e) => { if (sx == null) return; const d = e.changedTouches[0].clientX - sx; if (Math.abs(d) > 40) go(i + (d < 0 ? 1 : -1)); sx = null; });
    $$('img', car).forEach((img) => img.addEventListener('click', () => openLB($$('img', car).map((x) => x.src), +img.dataset.k)));
  });

  /* ================= galería ================= */
  const GAL = [
    ['ext-pool-day', 'ext'], ['com-living', 'int'], ['room1-4', 'room'], ['ext-pool-night', 'ext'], ['bath-2', 'bath'],
    ['com-games', 'int'], ['ext-palms', 'ext'], ['room2-3', 'room'], ['com-bar', 'int'], ['bath-4', 'bath'],
    ['ext-pool-night2', 'ext'], ['room3-4', 'room'], ['com-billiard', 'int'], ['ext-platter', 'ext'], ['room5-1', 'room'],
    ['bath-1', 'bath'], ['com-lounge', 'int'], ['ext-pool-day2', 'ext'], ['room1-1', 'room'], ['bath-5', 'bath'],
    ['com-hall', 'int'], ['room1-5', 'room'], ['bath-6', 'bath'], ['ext-sunset', 'ext'], ['room2-1', 'room'], ['bath-3', 'bath'],
  ];
  const mas = $('#masonry');
  let galFilter = 'all';
  function renderGal() {
    const items = GAL.filter(([, c]) => galFilter === 'all' || c === galFilter);
    mas.innerHTML = items.map(([f], k) => `<figure style="animation-delay:${Math.min(k, 12) * 40}ms"><img src="img/${f}.webp" alt="" loading="lazy" data-k="${k}"></figure>`).join('');
    const srcs = items.map(([f]) => `img/${f}.webp`);
    $$('img', mas).forEach((img) => img.addEventListener('click', () => openLB(srcs, +img.dataset.k)));
  }
  $$('#galFilters button').forEach((b) => b.addEventListener('click', () => {
    $$('#galFilters button').forEach((x) => x.classList.toggle('is-on', x === b));
    galFilter = b.dataset.f; renderGal();
  }));
  renderGal();

  /* ================= lightbox ================= */
  const lb = $('#lightbox'), lbImg = $('#lbImg'), lbCount = $('#lbCount');
  let lbList = [], lbI = 0;
  function showLB() { lbImg.src = lbList[lbI]; lbCount.textContent = `${lbI + 1} / ${lbList.length}`; }
  function openLB(list, k) { lbList = list; lbI = k; showLB(); lb.classList.add('open'); lb.setAttribute('aria-hidden', 'false'); }
  function closeLB() { lb.classList.remove('open'); lb.setAttribute('aria-hidden', 'true'); }
  const stepLB = (d) => { lbI = (lbI + d + lbList.length) % lbList.length; showLB(); };
  $('#lbClose').addEventListener('click', closeLB);
  $('#lbPrev').addEventListener('click', () => stepLB(-1));
  $('#lbNext').addEventListener('click', () => stepLB(1));
  lb.addEventListener('click', (e) => { if (e.target === lb) closeLB(); });
  addEventListener('keydown', (e) => {
    if (!lb.classList.contains('open')) return;
    if (e.key === 'Escape') closeLB(); if (e.key === 'ArrowLeft') stepLB(-1); if (e.key === 'ArrowRight') stepLB(1);
  });

  /* ================= nav ================= */
  const nav = $('#nav'), hero = $('#hero'), waFloat = $('#waFloat');
  $('#burger').addEventListener('click', () => nav.classList.toggle('open'));
  $$('#navLinks a').forEach((a) => a.addEventListener('click', () => nav.classList.remove('open')));

  /* ================= scroll: hero 3D, capítulos, parallax ================= */
  const chapters = $$('.chapter'), prog = $('#heroProgress'), hint = $('#scrollHint');
  const stack = $('#depthStack'), dsEls = stack ? $$('.ds', stack) : [];
  const parBg = $('.paredon-bg');
  let ticking = false;
  function onScroll() {
    ticking = false;
    const y = scrollY, vh = innerHeight;
    const total = hero.offsetHeight - vh;
    const p = Math.min(Math.max(y / total, 0), 1);
    window.coco.p = p;
    prog.style.width = (p * 100) + '%';
    const ch = p < .3 ? 0 : p < .66 ? 1 : 2;
    chapters.forEach((c, i) => c.classList.toggle('is-on', i === ch));
    hint.style.opacity = p > .05 ? 0 : '';
    nav.classList.toggle('solid', y > total + vh * .6);
    waFloat.classList.toggle('show', y > total * .9);
    if (stack) {
      const r = stack.getBoundingClientRect(), k = (r.top + r.height / 2 - vh / 2) / vh;
      dsEls.forEach((el, i) => { el.style.transform = `translate3d(0,${k * (i - 1) * 60}px,0)`; });
    }
    if (parBg) {
      const r = parBg.parentElement.getBoundingClientRect();
      if (r.bottom > 0 && r.top < vh) parBg.style.transform = `translate3d(0,${(r.top / vh) * -80}px,0) scale(1.05)`;
    }
  }
  addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });
  addEventListener('resize', onScroll);

  /* ================= portada cinematográfica: día → atardecer → noche ================= */
  const shots = $$('.shot').map((el) => ({ el, img: $('img', el), s: +el.dataset.start }));
  const gSun = $('#gradeSunset'), gFlare = $('#gradeFlare'), gNight = $('#gradeNight');
  const sm = (a, b, x) => { const k = Math.min(Math.max((x - a) / (b - a), 0), 1); return k * k * (3 - 2 * k); };
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  let hp = 0, heroOn = true;
  new IntersectionObserver(([e]) => { heroOn = e.isIntersecting; }).observe(hero);
  function cine(now) {
    requestAnimationFrame(cine);
    if (!heroOn) return;
    hp += (window.coco.p - hp) * (reduce ? 1 : .07);
    const t = now / 1000;
    shots.forEach((sh, i) => {
      const next = shots[i + 1] ? shots[i + 1].s : 1.2;
      if (i) sh.el.style.opacity = sm(sh.s - .1, sh.s + .06, hp);
      const local = Math.min(Math.max((hp - sh.s + .1) / (next - sh.s + .1), 0), 1);
      const drift = reduce ? 0 : Math.sin(t * .12 + i * 2) * .012;
      const sc = 1.16 - local * .1 + drift;
      const x = (i % 2 ? -1 : 1) * (local - .5) * 2.2, y = (local - .5) * -1.6;
      sh.img.style.transform = `translate3d(${x}%,${y}%,0) scale(${sc})`;
    });
    const sunset = sm(.12, .42, hp) * (1 - sm(.5, .68, hp));
    gSun.style.opacity = (sunset * .75).toFixed(3);
    gFlare.style.opacity = (sunset * .8).toFixed(3);
    gNight.style.opacity = (sm(.5, .66, hp) * .35 + sm(.8, 1, hp) * .2).toFixed(3);
  }
  requestAnimationFrame(cine);

  /* ================= reveal ================= */
  const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { const el = e.target; el.classList.add('in'); io.unobserve(el); if (el.classList.contains('tilt')) setTimeout(() => el.classList.add('tilt-ready'), 1150); } }), { threshold: .12, rootMargin: '0px 0px -40px 0px' });
  $$('.reveal').forEach((el) => io.observe(el));

  /* ================= tilt 3D en tarjetas ================= */
  if (matchMedia('(hover:hover) and (pointer:fine)').matches && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    $$('.tilt').forEach((el) => {
      el.addEventListener('pointermove', (e) => {
        const r = el.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
        el.style.transform = `perspective(1100px) rotateY(${x * 7}deg) rotateX(${-y * 7}deg) translateY(-4px)`;
      });
      el.addEventListener('pointerleave', () => { el.style.transform = ''; });
    });
  }

  /* ================= formulario de reserva ================= */
  const form = $('#bookForm'), fIn = $('#fIn'), fOut = $('#fOut'), fRoom = $('#fRoom'), roomField = $('#roomField'), nightsEl = $('#nights'), err = $('#formErr');
  const iso = (d) => new Date(d.getTime() - d.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
  const today = new Date(); fIn.min = iso(today);
  const typeVal = () => $('input[name=type]:checked').value;
  const syncType = () => roomField.classList.toggle('hide', typeVal() === 'villa');
  $$('input[name=type]').forEach((r) => r.addEventListener('change', syncType));

  function nightsCount() {
    if (!fIn.value || !fOut.value) return 0;
    return Math.round((new Date(fOut.value) - new Date(fIn.value)) / 864e5);
  }
  function updateNights() {
    const n = nightsCount();
    nightsEl.textContent = n > 0 ? `${n} ${n === 1 ? t('form.night') : t('form.nights')}` : '';
  }
  fIn.addEventListener('change', () => {
    if (fIn.value) {
      const next = new Date(fIn.value + 'T12:00'); next.setDate(next.getDate() + 1);
      fOut.min = iso(next);
      if (!fOut.value || fOut.value <= fIn.value) fOut.value = iso(next);
    }
    updateNights();
  });
  fOut.addEventListener('change', updateNights);

  $$('.stepper').forEach((s) => {
    const out = $('output', s), min = +s.dataset.min, max = +s.dataset.max;
    $$('button', s).forEach((b) => b.addEventListener('click', () => { out.value = Math.min(max, Math.max(min, +out.value + +b.dataset.d)); }));
  });

  // botones "Reservar ..." en todo el sitio preseleccionan el tipo
  document.addEventListener('click', (e) => {
    const a = e.target.closest('[data-book]');
    if (!a) return;
    $(a.dataset.book === 'villa' ? '#tVilla' : '#tRoom').checked = true;
    if (a.dataset.room) fRoom.value = a.dataset.room;
    syncType();
  });

  const fmt = (v) => new Date(v + 'T12:00').toLocaleDateString(lang === 'en' ? 'en-US' : 'es-GT', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    err.textContent = '';
    $$('.field', form).forEach((f) => f.classList.remove('err'));
    const name = $('#fName').value.trim();
    if (!fIn.value || !fOut.value) { err.textContent = t('err.dates'); (fIn.value ? fOut : fIn).parentElement.classList.add('err'); return; }
    if (nightsCount() < 1) { err.textContent = t('err.order'); fOut.parentElement.classList.add('err'); return; }
    if (!name) { err.textContent = t('err.name'); $('#fName').parentElement.classList.add('err'); $('#fName').focus(); return; }

    const ad = +$('#fAdults').value, kd = +$('#fKids').value, n = nightsCount(), villa = typeVal() === 'villa';
    let guests = `${ad} ${ad === 1 ? t('wa.adult') : t('wa.adults')}`;
    if (kd) guests += `, ${kd} ${kd === 1 ? t('wa.kid') : t('wa.kids')}`;
    const lines = [
      t('wa.hello'), '',
      `• ${t('wa.type')}: ${villa ? t('wa.villa') : t('wa.room')}`,
      !villa ? `• ${t('wa.which')}: ${fRoom.value === 'any' ? t('wa.any') : t('room.' + fRoom.value + '.name')}` : null,
      `• ${t('wa.in')}: ${fmt(fIn.value)}`,
      `• ${t('wa.out')}: ${fmt(fOut.value)} (${n} ${n === 1 ? t('form.night') : t('form.nights')})`,
      `• ${t('wa.guests')}: ${guests}`,
      `• ${t('wa.name')}: ${name}`,
      $('#fMsg').value.trim() ? `• ${t('wa.notes')}: ${$('#fMsg').value.trim()}` : null,
      '', t('wa.ask'),
    ].filter((l) => l !== null);
    window.open(`https://wa.me/${WA}?text=${encodeURIComponent(lines.join('\n'))}`, '_blank', 'noopener');
  });

  /* ================= loader ================= */
  const bar = $('#loaderBar');
  requestAnimationFrame(() => { bar.style.width = '60%'; });
  let done = false;
  const finish = () => { if (done) return; done = true; bar.style.width = '100%'; setTimeout(() => $('#loader').classList.add('done'), 350); };
  const firstImg = $('.shot img');
  if (firstImg.complete) setTimeout(finish, 400); else firstImg.addEventListener('load', () => setTimeout(finish, 300));
  setTimeout(finish, 3500);
  addEventListener('load', () => setTimeout(finish, 2500));

  $('#year').textContent = new Date().getFullYear();
  applyLang();
  onScroll();
})();
