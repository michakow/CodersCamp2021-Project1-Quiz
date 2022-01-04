import { getCategories } from './getData.js';
import { homepage } from './homepage.js';
import { loader } from './loader.js';

window.onload = async () => {
  loader();

  const categories = sessionStorage.getItem('categories')
    ? JSON.parse(sessionStorage.getItem('categories'))
    : await getCategories();

  homepage(categories);
};
