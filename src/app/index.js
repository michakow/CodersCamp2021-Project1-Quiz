import { getCategories, getQuestions } from './getData.js';
import { addStartClickHandler } from './startQuiz.js';

// Here goes logic:
const categories = sessionStorage.getItem('categories')
  ? JSON.parse(sessionStorage.getItem('categories'))
  : getCategories();
console.log(categories);

addStartClickHandler();
