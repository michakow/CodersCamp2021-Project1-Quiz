import { startApp } from './app.js';
import { getCategories } from './getData.js';

window.onload = () => {
  startApp();

  // Here goes logic:
  const categories = sessionStorage.getItem('categories')
    ? JSON.parse(sessionStorage.getItem('categories'))
    : getCategories();
  console.log(categories);
};
