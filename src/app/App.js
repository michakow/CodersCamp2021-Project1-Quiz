import { getQuestions } from './getData.js';
import { chooseCategory } from './chooseCategory.js';
import { startQuiz } from './startQuiz.js';

export const startApp = async () => {
  const startButton = document.getElementsByClassName(
    'game__button--start-quiz',
  )[0];
  let userName = '';

  // TODO add chooseCategory function here
  const categoryId = chooseCategory();
  questionList = await getQuestions(categoryId);

  startButton.addEventListener(
    'click',
    () => {
      //TODO validate username
      userName = document.querySelector('.game__user--name').value;
      startQuiz(questionList);
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
