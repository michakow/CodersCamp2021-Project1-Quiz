import { renderCategories } from './renderCategories.js';
import logo from '/src/images/quizownia-logo.png';

export const homepage = (categories) => {
  const div = document.querySelector('#app');
  div.innerHTML = `
    <header>
      <nav class="navigation">
        <a href="/" class="navigation__logo">
          <img
            src=${logo}
            alt="logo"
            class="navigation__img"
          />
        </a>
        <div class="navigation__menu">
          <svg
            class="navigation__burger"
            viewBox="0 0 100 80"
            width="40"
            height="40"
          >
            <rect width="100" height="20" fill="#4d70ff"></rect>
            <rect y="30" width="100" height="20" fill="#4d70ff"></rect>
            <rect y="60" width="100" height="20" fill="#4d70ff"></rect>
          </svg>
          <div class="navigation__dropdown">
            <p class="navigation__title">Actual difficulty level: <span id="level" class="navigation__level-name">${window.questionsLevel || 'Easy'}</span></p>
            <ul class="navigation__level-list">
              <li class="navigation__list-item" data-level="easy">Easy</li>
              <li class="navigation__list-item" data-level="medium">Medium</li>
              <li class="navigation__list-item" data-level="hard">Hard</li>
            </ul>
          </div>
        </div>
      </nav>
    </header>

    <section class="category">
      <div class="container category__container">
        <div class="category__list">
        </div>
      </div>
    </section>
  `;

  const menuButton = document.querySelector('.navigation__burger');
  const dropdown = document.querySelector('.navigation__dropdown');
  menuButton.addEventListener('click', () => {
    dropdown.classList.toggle("active");
  });

  document.querySelectorAll('.navigation__list-item').forEach(item => {
    item.addEventListener('click', () => {
      window.questionsLevel = item.dataset.level;
      document.querySelector('#level').textContent = window.questionsLevel;
      dropdown.classList.remove("active");
    });
  });

  renderCategories(categories, '.category__list');
};
