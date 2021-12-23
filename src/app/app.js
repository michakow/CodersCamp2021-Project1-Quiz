import { getQuestions } from './getData.js';
import { chooseCategory } from './chooseCategory.js';
import { startQuiz } from './startQuiz.js';
import {validateUserName} from './tools.js';

window.userName = '';

export const startApp = async () => {
  const startButton = document.getElementsByClassName(
    'game__button--start-quiz',
  )[0];

  // TODO add chooseCategory function here
  const categoryId = chooseCategory();
  const questionList = await getQuestions(categoryId);

  startButton.addEventListener(
    'click',
    () => {
      //TODO validate username
      window.userName = document.querySelector('.game__user--name').value;
      const isValidUser = validateUserName(window.userName)
      
      if(isValidUser) {
         startQuiz(questionList);
      }
      else {
        console.log('niepoprawny user')
      }
    },
    false,
  );
};

//example leaderboard
// localStorage.setItem(
//   'leaderboard',
//   JSON.stringify([
//     {
//       categoryName: 'mythology',
//       players: [
//         {
//           name: 'waldek',
//           score: 5,
//         },
//         {
//           name: 'kazik',
//           score: 3,
//         },
//       ],
//     },
//     {
//       categoryName: 'music',
//       players: [
//         {
//           name: 'przemek',
//           score: 9,
//         },
//       ],
//     },
//   ]),
// );
// showLeaderboard('mythology');

// finishQuiz('darek', 6, 'music');
