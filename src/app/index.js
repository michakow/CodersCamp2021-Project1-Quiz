import { getCategories, getQuiz } from './getData.js';
// Here goes logic:
console.log('Hello world');

const quiz = getQuiz(12);
quiz.then((value) => console.log(value));

const categories = sessionStorage.getItem('categories') ? JSON.parse(sessionStorage.getItem('categories')) : getCategories();
console.log(categories);
