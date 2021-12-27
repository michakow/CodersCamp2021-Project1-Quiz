import { startApp } from './app.js';
import { getCategories } from './getData.js';
import { renderCategories } from './renderCategories.js';

window.onload = async () => {
  startApp();

  // Here goes logic:
  const categories = sessionStorage.getItem('categories')
    ? JSON.parse(sessionStorage.getItem('categories'))
    : await getCategories();
  console.log(categories);

  renderCategories(categories, '.category__list');
};
