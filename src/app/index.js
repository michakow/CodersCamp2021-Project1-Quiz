import { getCategories } from './getData.js';
import { showLeaderboard } from './leaderboard.js';
import { addStartClickHandler } from './startQuiz.js';
// Here goes logic:
const categories = sessionStorage.getItem('categories')
  ? JSON.parse(sessionStorage.getItem('categories'))
  : getCategories();
console.log(categories);

addStartClickHandler();

//example leaderboard
localStorage.setItem(
  'leaderboard',
  JSON.stringify([
    {
      categoryName: 'mythology',
      players: [
        {
          name: 'waldek',
          score: 5,
        },
        {
          name: 'kazik',
          score: 3,
        },
      ],
    },
    {
      categoryName: 'music',
      players: [
        {
          name: 'przemek',
          score: 9,
        },
      ],
    },
  ]),
);
showLeaderboard('mythology');

// finishQuiz('darek', 6, 'music');
