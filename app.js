/* Данные и рендер сайта. Без зависимостей. */
const PHONE = "+7 984 157-92-20";
const WA = "79841579220";

const MODELS = [
  {
    id: "hhx1200", name: "HHX1200", type: "loader",
    cls: "Мини-погрузчик", tag: "Мини-погрузчик · бензин · 4×4",
    sub: "Shandong ZL928 · 2026 год · новый · бензин EURO-5",
    price: 390000,
    short: [["Масса", "850 кг"], ["Грузоподъёмность", "320 кг"], ["Мощность", "23 л.с."], ["Ковш", "0,13 м³"]],
    specs: {
      "Мощность": "23 л.с. · 17 кВт",
      "Масса": "850 кг",
      "Грузоподъёмность": "320 кг · макс. 400",
      "Ковш": "0,13 м³",
      "Высота подъёма": "2 586 мм",
      "Привод": "4×4 · колёса / гусеницы"
    },
    desc: "Погрузка, планировка, уборка территории. Самая лёгкая машина линейки — для объектов с ограниченным доступом.",
    imgs: ["img/hhx1200-3.jpg", "img/hhx1200-4.jpg", "img/hhx1200-1.jpg", "img/hhx1200-2.jpg", "img/hhx1200-5.jpg"],
    row: ["Мини-погрузчик", "850 кг", "23 л.с. · бензин", "320 кг", "0,13 м³"]
  },
  {
    id: "380", name: "380", type: "loader",
    cls: "Мини-погрузчик", tag: "Мини-погрузчик · бортповорот",
    sub: "380 Skid Steer · новый · бензин EURO-5 · гусеницы или колёса",
    price: 300000,
    short: [["Масса", "700 кг"], ["Грузоподъёмность", "200 кг"], ["Мощность", "23 л.с."], ["Ковш", "0,15 м³"]],
    specs: {
      "Мощность": "23 л.с. · 16,8 кВт",
      "Масса": "700 кг",
      "Грузоподъёмность": "200 кг · макс. 375",
      "Ковш": "0,15 м³",
      "Высота выгрузки": "1 880 мм",
      "Ход": "гусеницы / колёса"
    },
    desc: "Самая доступная машина линейки. Бортовой поворот — разворот на месте в тесном дворе и на складе.",
    imgs: ["img/380-1.jpg", "img/380-2.jpg", "img/380-3.jpg", "img/380-4.jpg", "img/380-5.jpg", "img/380-6.jpg"],
    row: ["Мини-погрузчик", "700 кг", "23 л.с. · бензин", "200 кг", "0,15 м³"]
  },
  {
    id: "s70", name: "S70", type: "loader",
    cls: "Мини-погрузчик", tag: "Мини-погрузчик · дизель · 4×4",
    sub: "S70 Skid Steer · 25 л.с. дизель · EURO V / EPA · колёса / гусеницы",
    price: 590000,
    short: [["Масса", "1 200 кг"], ["Грузоподъёмность", "390 кг"], ["Мощность", "25 л.с."], ["Ковш", "0,22 м³"]],
    specs: {
      "Мощность": "25 л.с. · дизель",
      "Масса": "1 200 кг",
      "Грузоподъёмность": "390 кг · макс. 490",
      "Ковш": "0,22 м³ · 1 000 мм",
      "Высота подъёма": "2 900 мм",
      "Ход": "колёса / гусеницы"
    },
    desc: "Самый сильный мини-погрузчик линейки: дизель, ковш 0,22 м³, подъём до 2,9 м. Для стройки и склада.",
    imgs: ["img/s70-1.jpg", "img/s70-2.jpg", "img/s70-3.jpg", "img/s70-4.jpg", "img/s70-5.jpg", "img/s70-6.jpg"],
    row: ["Мини-погрузчик", "1 200 кг", "25 л.с. · дизель", "390 кг", "0,22 м³"]
  },
  {
    id: "zl932", name: "ZL932", type: "loader",
    cls: "Фронтальный погрузчик", tag: "Фронтальный погрузчик · дизель · 4×4",
    sub: "дизель 490Q 2,2 л · автомат · закрытая кабина · ковш 0,8 м³",
    price: 620000,
    short: [["Масса", "2 500 кг"], ["Грузоподъёмность", "1 500 кг"], ["Мощность", "58 л.с."], ["Ковш", "0,8 м³"]],
    specs: {
      "Масса": "2 500 кг",
      "Мощность": "58 л.с. · дизель 2,2 л",
      "Грузоподъёмность": "1 500 кг",
      "Ковш": "0,8 м³",
      "Высота подъёма": "4 000 мм",
      "Высота выгрузки": "3 200 мм",
      "Кабина": "закрытая · джойстик"
    },
    desc: "Сыпучие грузы, щебень, песок, погрузка в самосвал. Закрытая кабина и автомат — работа круглый год.",
    imgs: ["img/zl932-1.jpg", "img/zl932-2.jpg", "img/zl932-3.jpg", "img/zl932-4.jpg", "img/zl932-5.jpg", "img/zl932-6.jpg"],
    row: ["Фронтальный", "2 500 кг", "58 л.с. · дизель", "1 500 кг", "0,8 м³"]
  },
  {
    id: "907", name: "907", type: "loader",
    cls: "Фронтальный погрузчик", tag: "Фронтальный погрузчик · дизель · 4×4",
    sub: "компактный · дизель 32 л.с. · 600 кг · гидравлический руль",
    price: 280000,
    short: [["Масса", "800 кг"], ["Грузоподъёмность", "600 кг"], ["Мощность", "32 л.с."], ["Высота подъёма", "2 800 мм"]],
    specs: {
      "Мощность": "32 л.с. · дизель",
      "Масса": "800 кг",
      "Грузоподъёмность": "600 кг",
      "Привод": "полный 4×4",
      "Высота подъёма": "2 800 мм",
      "КПП": "3 вперёд / 1 назад"
    },
    desc: "Компактный фронтальный погрузчик для двора, фермы и склада. Полный привод и гидравлический руль.",
    imgs: ["img/907-1.jpg", "img/907-2.jpg", "img/907-3.jpg", "img/907-4.jpg", "img/907-5.jpg"],
    row: ["Фронтальный", "800 кг", "32 л.с. · дизель", "600 кг", "стандарт"]
  },
  {
    id: "bizon12", name: "12", type: "excavator",
    cls: "Мини-экскаватор", tag: "Мини-экскаватор · дизель · гусеничный",
    sub: "дизель Kechai 192F · ковш 400 мм · джойстиковое управление",
    price: 280000,
    short: [["Масса", "750 кг"], ["Глубина копания", "1 700 мм"], ["Мощность", "12 л.с."], ["Ковш", "400 мм"]],
    specs: {
      "Мощность": "12 л.с. · дизель",
      "Масса": "750 кг",
      "Глубина копания": "1 700 мм",
      "Радиус копания": "3 000 мм",
      "Ковш": "0,025 м³ · 400 мм",
      "Управление": "джойстик · 18 МПа"
    },
    desc: "Траншеи, коммуникации, благоустройство. Проходит в калитку и работает в стеснённых условиях.",
    imgs: ["img/bizon12-1.jpg", "img/bizon12-2.jpg", "img/bizon12-3.jpg", "img/bizon12-4.jpg", "img/bizon12-5.jpg"],
    row: ["Мини-экскаватор", "750 кг", "12 л.с. · дизель", "копание 1 700 мм", "0,025 м³"]
  },
  {
    id: "bizon18", name: "18", type: "excavator",
    cls: "Мини-экскаватор", tag: "Мини-экскаватор · дизель · гусеничный",
    sub: "3-цилиндровый дизель Laidong · 1 200 кг · ковш 400 мм",
    price: 470000,
    short: [["Масса", "1 200 кг"], ["Глубина копания", "2 200 мм"], ["Мощность", "28 л.с."], ["Ковш", "400 мм"]],
    specs: {
      "Мощность": "28 л.с. · 20 кВт",
      "Масса": "1 200 кг",
      "Глубина копания": "2 200 мм",
      "Радиус копания": "3 300 мм",
      "Ковш": "0,035 м³ · 400 мм",
      "Управление": "джойстик · пилотное"
    },
    desc: "Производительность машины классом тяжелее при компактных габаритах: траншеи, демонтаж, благоустройство.",
    imgs: ["img/bizon18-1.jpg", "img/bizon18-2.jpg", "img/bizon18-3.jpg", "img/bizon18-4.jpg", "img/bizon18-5.jpg"],
    row: ["Мини-экскаватор", "1 200 кг", "28 л.с. · дизель", "копание 2 200 мм", "0,035 м³"]
  }
];

const ATTACH = [
  ["Отвал бульдозерный", "700 мм · поворот 32°"],
  ["Ковш стандартный", "0,16–0,20 м³ · 1 150 мм"],
  ["Вилы поддонные", "200 кг · вилы 910 мм"],
  ["Гидромолот", "80–100 Дж · 130 кг"],
  ["Ямобур", "Ø 150–200 мм · 370 Н·м"],
  ["Траншеекопатель", "120 × 800 мм · 178 кг"],
  ["Щётка снегоуборочная", "1 300 мм · Ø 500 мм"],
  ["Снегоотбрасыватель", "1 075 мм · 148,5 кг"],
  ["Косилка", "1 360 мм · 3 ножа"]
];

const FAQ = [
  ["Подберёте машину под задачу?", "Да. Опишите объём работ и условия — предложим 1–2 модели и комплект навесного, посчитаем под ключ до Уссурийска."],
  ["Почему цены ниже рынка?", "Прямой импорт с завода, без посредников и дилерских наценок. Цена уже включает доставку до Уссурийска."],
  ["Как быстро привезёте?", "Со склада в Уссурийске — от 1 дня. Под заказ с завода — 3–5 недель, срок фиксируем в договоре."],
  ["Есть гарантия и запчасти?", "Гарантия 1 год, запчасти и расходники на складе в Уссурийске, поставка запчастей бесплатная."],
  ["Можно купить навесное отдельно?", "Да, навесное и техника — от одной единицы. Для парка техники и дилеров действуют специальные условия."]
];

const money = n => n.toLocaleString("ru-RU") + " ₽";
const waLink = text => `https://wa.me/${WA}?text=${encodeURIComponent(text)}`;

/* ---------- карточки ---------- */
const cardsEl = document.getElementById("cards");
cardsEl.innerHTML = MODELS.map(m => `
  <article class="card" data-type="${m.type}">
    <div class="card__img">
      <img src="${m.imgs[0]}" alt="${m.cls} ${m.name}" loading="lazy">
      <span class="card__tag">${m.cls}</span>
    </div>
    <div class="card__body">
      <div class="card__top"><h3>${m.name}</h3></div>
      <div class="card__sub">${m.sub}</div>
      <div class="card__price"><b>${money(m.price)}</b><span>ПОД КЛЮЧ</span></div>
      <ul class="card__specs">
        ${m.short.map(([k, v]) => `<li>${k}<b>${v}</b></li>`).join("")}
      </ul>
      <div class="card__btn">
        <button class="btn btn--primary" data-open="${m.id}">Подробнее</button>
        <a class="btn btn--ghost" href="${waLink(`Здравствуйте! Интересует ${m.cls} ${m.name} — ${money(m.price)}. Расскажите подробнее.`)}" target="_blank" rel="noopener">Запрос</a>
      </div>
    </div>
  </article>`).join("");

/* ---------- фильтр ---------- */
document.getElementById("filter").addEventListener("click", e => {
  const b = e.target.closest("button");
  if (!b) return;
  document.querySelectorAll("#filter button").forEach(x => x.classList.toggle("is-active", x === b));
  const f = b.dataset.f;
  document.querySelectorAll(".card").forEach(c => {
    c.style.display = f === "all" || c.dataset.type === f ? "" : "none";
  });
});

/* ---------- таблица ---------- */
document.getElementById("cmp").innerHTML = `
  <thead><tr><th>Модель</th><th>Класс</th><th>Масса</th><th>Мощность</th><th>Грузоподъёмность / копание</th><th>Ковш</th><th>Цена</th></tr></thead>
  <tbody>${MODELS.map(m => `
    <tr>
      <td>${m.name}</td>
      <td class="cls">${m.row[0]}</td>
      <td>${m.row[1]}</td>
      <td>${m.row[2]}</td>
      <td>${m.row[3]}</td>
      <td>${m.row[4]}</td>
      <td>${money(m.price)}</td>
    </tr>`).join("")}
  </tbody>`;

/* ---------- навесное ---------- */
document.getElementById("attach-grid").innerHTML = ATTACH.map(([n, s]) => `
  <article class="att"><h4>${n}</h4><p>${s}</p><span>Цена по запросу</span></article>`).join("");

/* ---------- faq ---------- */
document.getElementById("faq-list").innerHTML = FAQ.map(([q, a]) => `
  <details><summary>${q}</summary><p>${a}</p></details>`).join("");

/* ---------- select в форме ---------- */
document.getElementById("form-model").insertAdjacentHTML("beforeend",
  MODELS.map(m => `<option value="${m.name}">${m.name} — ${m.cls}</option>`).join(""));

/* ---------- модалка ---------- */
const modal = document.getElementById("modal");
const modalBody = document.getElementById("modal-body");
let lastFocus = null;

function openModel(id) {
  const m = MODELS.find(x => x.id === id);
  if (!m) return;
  lastFocus = document.activeElement;
  modalBody.innerHTML = `
    <div class="m-grid">
      <div class="m-gal">
        <div class="m-gal__main"><img id="m-main" src="${m.imgs[0]}" alt="${m.cls} ${m.name}"></div>
        <div class="m-thumbs">
          ${m.imgs.map((s, i) => `<img src="${s}" data-src="${s}" class="${i === 0 ? "is-active" : ""}" alt="">`).join("")}
        </div>
      </div>
      <div class="m-info">
        <span class="card__tag">${m.tag}</span>
        <h3>${m.name}</h3>
        <div class="card__sub">${m.sub}</div>
        <div class="m-price">${money(m.price)}<small>ПОД КЛЮЧ ДО УССУРИЙСКА</small></div>
        <p class="m-desc">${m.desc}</p>
        <dl class="m-specs">
          ${Object.entries(m.specs).map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`).join("")}
        </dl>
        <div class="m-btns">
          <a class="btn btn--wa" href="${waLink(`Здравствуйте! Интересует ${m.cls} ${m.name} — ${money(m.price)}. Пришлите подробности и условия.`)}" target="_blank" rel="noopener">Запросить в WhatsApp</a>
          <a class="btn btn--tg" href="https://t.me/+79841579220" target="_blank" rel="noopener">Telegram</a>
          <a class="btn btn--max" href="https://max.ru/u/f9LHodD0cOKyXiundPWgkjgE7OD3C8a8BjaXvgNV9zVBAqx8MDlEKkrBc9o" target="_blank" rel="noopener">MAX</a>
        </div>
      </div>
    </div>`;
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  modalBody.querySelector(".m-thumbs").addEventListener("click", e => {
    const t = e.target.closest("img");
    if (!t) return;
    modalBody.querySelector("#m-main").src = t.dataset.src;
    modalBody.querySelectorAll(".m-thumbs img").forEach(i => i.classList.toggle("is-active", i === t));
  });
  document.getElementById("modal-x").focus();
}

function closeModal() {
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  if (lastFocus) lastFocus.focus();
}

document.addEventListener("click", e => {
  const b = e.target.closest("[data-open]");
  if (b) openModel(b.dataset.open);
});
document.getElementById("modal-x").addEventListener("click", closeModal);
modal.addEventListener("click", e => { if (e.target === modal) closeModal(); });
document.addEventListener("keydown", e => {
  if (e.key === "Escape" && modal.classList.contains("is-open")) closeModal();
});

/* ---------- меню ---------- */
const nav = document.getElementById("nav");
document.getElementById("burger").addEventListener("click", () => nav.classList.toggle("is-open"));
nav.addEventListener("click", e => { if (e.target.tagName === "A") nav.classList.remove("is-open"); });

/* ---------- копирование ---------- */
const toast = document.createElement("div");
toast.className = "toast";
document.body.appendChild(toast);
function say(t) {
  toast.textContent = t;
  toast.classList.add("is-on");
  clearTimeout(say._t);
  say._t = setTimeout(() => toast.classList.remove("is-on"), 2200);
}
document.getElementById("copy").addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(PHONE);
    say("Номер скопирован: " + PHONE);
  } catch {
    say(PHONE);
  }
});

/* ---------- форма ---------- */
document.getElementById("form").addEventListener("submit", e => {
  e.preventDefault();
  const f = e.target;
  const name = f.name.value.trim();
  const phone = f.phone.value.trim();
  let ok = true;
  [f.name, f.phone].forEach(i => {
    const bad = !i.value.trim();
    i.classList.toggle("err", bad);
    if (bad) ok = false;
  });
  if (!ok) { say("Заполните имя и телефон"); return; }
  const model = f.model.value;
  const task = f.task.value.trim();
  const text = `Заявка с сайта\nИмя: ${name}\nТелефон: ${phone}\nМодель: ${model || "подберите сами"}\nЗадача: ${task || "—"}`;
  window.open(waLink(text), "_blank");
  say("Открываем WhatsApp…");
});
