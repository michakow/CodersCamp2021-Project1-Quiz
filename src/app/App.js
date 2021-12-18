import { showLeaderboard } from './leaderboard.js';
import { getQuestions } from './getData.js';
import { decodeHtmlCharCodes } from './tools.js';
import { finishQuiz } from './finishQuiz.js';
import { startTimer } from './timer.js';
import { chooseCategory } from './chooseCategory.js';
import { startQuiz } from './startQuiz.js';

const questions = document.querySelector('.questions__inner');
const questionsList = [];
// JSON.parse(sessionStorage.getItem('questions'));

let questionId = 0,
  answerCounter = 0,
  questionsAmount = 0,
  correctAnswer = '';

// const setQuestionData = () => {
//   const currentQuestion = questions[id];

//   // let questionNumber = id + 1; //count question number from 1

//   return currentQuestion.correct_answer;
// };

export const startApp = async () => {
  const startButton = document.getElementsByClassName(
    'game__button--start-quiz',
  )[0];
  let userName = '';

  // wybranie kategorii
  const categoryId = chooseCategory();
  questionLists = await getQuestions(categoryId);
  console.log(questionLists);

  startButton.addEventListener(
    'click',
    () => {
      //todo validate username
      userName = document.querySelector('.game__user--name').value;
      startQuiz(questionLists);
    },
    false,
  );
};

const nextQuestion = () => {
  questionId++;
  sessionStorage.setItem('questionId', questionId);

  if (questionId < questionsAmount) {
    setTimeout(() => {
      renderQuestion(questionId);
    }, 1000);
  } else {
    setTimeout(() => {
      questions.style.display = 'none';
      finishQuiz();
    }, 1000);
  }
};

// renderCategories(); render main page - navigation and categories
// startQuiz();
// finishQuiz();
// showLeaderboard();

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
