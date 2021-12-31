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
          <ul class="navigation__list">
            <li class="navigation__item">
              <a href="#" class="navigation__link far fa-clock"></a>
            </li>
            <li class="navigation__item">
              <a href="#" class="navigation__link fas fa-user-friends"></a>
            </li>
            <li class="navigation__item">
              <a href="#" class="navigation__link fas fa-cog"></a>
            </li>
          </ul>
        </div>
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
      </nav>
    </header>

    <section class="category">
      <div class="container category__container">
        <div class="category__list">
        </div>
      </div>
    </section>
  `;

  renderCategories(categories, '.category__list');
};
