

import './css/styles.css';

async function loadLessons() {
  const loads = document.querySelectorAll('load');

  for (const el of loads) {
    const src = el.getAttribute('src');
    const res = await fetch(src);
    const html = await res.text();

    el.outerHTML = html;
  }

  // ⬇️ тут JS запускається ПІСЛЯ того, як HTML уже в DOM
  await import('./js/lesson-1.js');
  await import('./js/lesson-2.js');
}

loadLessons();
