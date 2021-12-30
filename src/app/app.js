import { getQuestions, getQuestionTotalCount } from './getData.js';
import { homepage } from './homepage.js';
import { showLeaderboard } from './leaderboard.js';
// import { chooseCategory } from './chooseCategory.js';
import { startQuiz } from './startQuiz.js';
import {validateUserName} from './tools.js';

window.userName = '';

export const startApp = async (id, name) => {
  const categoryID = id;
  const categoryName = name;

  const questionCount = await getQuestionTotalCount(categoryID);

  const div = document.querySelector('#app');
  div.innerHTML = `
    <section class="game">
      <div class="container game__inner">
        <input class="game__user--name" placeholder="Enter your name..." />

        <button class="button game__button--start-quiz">Start Quiz</button>
        <button class="button game__button--scores">Scores</button>
        <p class="game__questions-quantity">
          Total questions for ${categoryName}: ${questionCount.total_question_count}
        </p>
        <button class="button game__button--back">Back to categories</button>
      </div>
    </section>
  `;

  const startButton = document.getElementsByClassName(
    'game__button--start-quiz',
  )[0];

  // TODO add chooseCategory function here
  // const categoryId = chooseCategory();
  // until chooseCategory is finished use id
  console.log(id);
  const questionList = await getQuestions(categoryID);
  let errorText;

  startButton.addEventListener(
    'click',
    () => {
      //TODO validate username
      const userInput = document.querySelector('.game__user--name');
      window.userName = userInput.value;
      const isValidUser = validateUserName(window.userName);
      if(isValidUser) {
         startQuiz(questionList, categoryName);
      }
      else {
        if (errorText) {
          return;
        }
        errorText = document.createElement('div');
        errorText.classList.add('game__error');
        errorText.appendChild(document.createTextNode('User Name should consist of min 3 LETTERS, and letters only.'));
        userInput.parentNode.insertBefore(errorText, userInput.nextSibling);
      }
    },
    false,
  );

  const scoreButton = document.querySelector('.game__button--scores');
  scoreButton.addEventListener('click', () => {
    showLeaderboard(categoryName);
  });

  const backButton = document.querySelector('.game__button--back');
  backButton.addEventListener('click', () => {
    homepage(JSON.parse(sessionStorage.getItem('categories')));
  });
};