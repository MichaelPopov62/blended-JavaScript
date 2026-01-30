import'./js/lesson-1.js';
import './css/styles.css';


// Підтягуємо усі load-елементи
document.querySelectorAll('load').forEach(async (el) => {
  // Використовуємо відносний шлях, щоб працювало на GitHub Pages
  const src = el.getAttribute('src');
  if (!src) return;

  try {
    // Підтягуємо HTML відносно місця виклику
    const res = await fetch(`./${src}`);
    if (!res.ok) throw new Error(`Не вдалося завантажити ${src}`);
    const html = await res.text();
    el.outerHTML = html; // замінюємо <load> на контент
  } catch (err) {
    console.error(err);
    el.outerHTML = `<p>Помилка завантаження ${src}</p>`;
  }
});
