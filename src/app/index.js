import { startQuiz } from './App.js';
import { getCategories } from './getData.js';

window.onload = () => {
  startQuiz();

  // Here goes logic:
  const categories = sessionStorage.getItem('categories')
    ? JSON.parse(sessionStorage.getItem('categories'))
    : getCategories();
  console.log(categories);
};
