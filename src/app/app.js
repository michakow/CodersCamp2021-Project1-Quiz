import { getQuestions, getQuestionTotalCount, getToken } from './getData.js';
import { homepage } from './homepage.js';
import { showLeaderboard } from './leaderboard.js';
import { startQuiz } from './startQuiz.js';
import { validateUserName } from './tools.js';
import { loader } from './loader.js';

window.userName = '';

export const startApp = async (id, name) => {
  const categoryID = id;
  const categoryName = name;
  const token = sessionStorage.getItem('token') 
  ? JSON.parse(sessionStorage.getItem('token')) 
  : await getToken();

  loader();
  const questionCount = await getQuestionTotalCount(categoryID);

  let questionCountForLevel;
  switch (window.questionsLevel) {
    case 'hard':
      questionCountForLevel = questionCount.total_hard_question_count;
      break;
    case 'medium':
      questionCountForLevel = questionCount.total_medium_question_count;
      break;
    default:
      questionCountForLevel = questionCount.total_easy_question_count;
  }

  const div = document.querySelector('#app');
  div.innerHTML = `
    <section class="game">
      <div class="container game__inner">
        <div class="game__header">
        <input class="game__user--name" placeholder="Enter your name..." />
        <button class="button game__button--start-quiz">Start Quiz</button>
        <button class="button game__button--scores">Scores</button>
        <p class="game__questions-quantity">
          <span class="game__category-name">${categoryName}</span>
          <span class="game__total-questions">Total questions: ${
            questionCount.total_question_count
          }</span>
          <span class="game__total-questions-for-level">Questions for ${
            window.questionsLevel || 'easy'
          } level: ${questionCountForLevel}</span>
        </p>
        </div>
        <button class="button game__button--back">Back to categories</button>
      </div>
    </section>
  `;

  const startButton = document.getElementsByClassName(
    'game__button--start-quiz',
  )[0];

  const questionList = await getQuestions(categoryID, token, questionCountForLevel);
  let errorText;

  startButton.addEventListener(
    'click',
    () => {
      const userInput = document.querySelector('.game__user--name');
      window.userName = userInput.value;
      const isValidUser = validateUserName(window.userName);
      if (isValidUser) {
        startQuiz(questionList, categoryName);
      } else {
        if (errorText) {
          return;
        }
        errorText = document.createElement('div');
        errorText.classList.add('game__error');
        errorText.appendChild(
          document.createTextNode(
            'User Name should consist of min 3 LETTERS, and letters only.',
          ),
        );
        userInput.parentNode.insertBefore(errorText, userInput.nextSibling);
      }
    },
    false,
  );

  const scoreButton = document.querySelector('.game__button--scores');
  scoreButton.addEventListener('click', () => {
    showLeaderboard(categoryName, questionList.length);
  });

  const backButton = document.querySelector('.game__button--back');
  backButton.addEventListener('click', () => {
    homepage(JSON.parse(sessionStorage.getItem('categories')));
  });
};
