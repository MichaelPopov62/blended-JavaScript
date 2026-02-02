

import './css/styles.css';

const container = document.getElementById('lesson-container');

async function loadLesson(n) {
  // 1. завантажуємо HTML уроку
  const html = await fetch(`partials/lesson-${n}.html`).then(r => r.text());

  // 2. замінюємо контент
  container.innerHTML = html;

  // 3. підключаємо JS логіку уроку
  await import(`./js/lesson-${n}.js`);
}

// кліки по списку
document.getElementById('lesson-list').addEventListener('click', e => {
  const item = e.target.closest('[data-lesson]');
  if (!item) return;

  loadLesson(item.dataset.lesson);
});

// стартовий урок
loadLesson(1);
