import { getCategories } from './getData.js';
import { homepage } from './homepage.js';

window.onload = async () => {
  // Here goes logic:
  const categories = sessionStorage.getItem('categories')
    ? JSON.parse(sessionStorage.getItem('categories'))
    : await getCategories();
  console.log(categories);

  homepage(categories);
};
