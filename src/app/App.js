import { showLeaderboard } from './leaderboard.js';
import { getQuestions } from './getData.js';
import { decodeHtmlCharCodes } from './tools.js';
import { finishQuiz } from './finishQuiz.js';
import { startTimer } from './timer.js';

const questions = document.querySelector('.questions__inner');
const questionsList = JSON.parse(sessionStorage.getItem('questions'));

let questionId = 0,
  answerCounter = 0,
  questionsAmount = 0,
  correctAnswer = '';

const renderQuestion = (questionId) => {
  correctAnswer = setQuestionData(questionId, questionsList);
  questionsAmount = questionsList.length;
};

const setQuestionData = (id, questions) => {
  const currentQuestion = questions[id];
  const questionsInner = document.getElementsByClassName('questions__inner')[0];
  let questionNumber = id + 1; //count question number from 1

  const answers = [
    ...currentQuestion.incorrect_answers,
    currentQuestion.correct_answer,
  ];

  const shuffle = ([...arr]) => {
    let m = arr.length;
    while (m) {
      const i = Math.floor(Math.random() * m--);
      [arr[m], arr[i]] = [arr[i], arr[m]];
    }
    return arr;
  };

  const newAnswers = shuffle(answers);

  questionsInner.innerHTML = `
    <h3 class="questions__question">
    ${questionNumber}/${questions.length}. ${currentQuestion.question}</h3>
    ${newAnswers
      .map((answer) => {
        return `<button class="button questions__answer">${answer}</button>`;
      })
      .join('')}
    `;

  return currentQuestion.correct_answer;
};

const onClick = async () => {
  const userName = document.querySelector('.game__user--name').value;

  await getQuestions(12);
  renderQuestion(0);

  startTimer(questionsAmount);
};

export const startQuiz = () => {
  const startButton = document.getElementsByClassName(
    'game__button--start-quiz',
  )[0];

  sessionStorage.clear();
  startButton.addEventListener('click', onClick, false);
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

const checkAnswer = (answer) => answer === decodeHtmlCharCodes(correctAnswer);

const showCorrectAnswer = () => {
  const answerButtons = document.querySelectorAll('.questions__answer');

  answerButtons.forEach((button) => {
    if (button.textContent === correctAnswer) {
      button.classList.add('questions__answer--correct');
    }
  });
};

questions.addEventListener('click', (event) => {
  const { target } = event;

  if (target.classList.contains('questions__answer')) {
    if (checkAnswer(target.textContent)) {
      target.classList.add('questions__answer--correct');

      ++answerCounter;
      nextQuestion();
    } else {
      target.classList.add('questions__answer--wrong');

      showCorrectAnswer();
      nextQuestion();
    }

    //save to local storage answers
  }
});

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
