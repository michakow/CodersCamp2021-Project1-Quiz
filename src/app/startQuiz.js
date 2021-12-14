import { getQuestions } from './getData.js';
import { startTimer } from './timer.js';
import { saveDataToSessionStorage } from './tools.js';
import chooseAnswer from './chooseAnswer.js';

const onClick = async () => {
  const userName = document.querySelector('.game__user--name').value;

  await getQuestions(12);
  renderQuestion(0);

  startTimer();
  saveDataToSessionStorage('userName', userName);
};

export const addStartClickHandler = () => {
  const startButton = document.getElementsByClassName(
    'game__button--start-quiz',
  )[0];

  sessionStorage.clear();
  startButton.addEventListener('click', onClick, false);
};

export const renderQuestion = (questionId) => {
  const questions = JSON.parse(sessionStorage.getItem('questions'));

  setQuestionData(questionId, questions);
  saveDataToSessionStorage('questions-amount', questions.length);
};

export const setQuestionData = (id, questions) => {
  const currentQuestion = questions[id];
  const questionsInner = document.getElementsByClassName('questions__inner')[0];
  let questionNumber = id + 1; //count question number from 1

  const answers = [
    ...currentQuestion.incorrect_answers,
    currentQuestion.correct_answer,
  ];

  questionsInner.innerHTML = `
    <h3 class="questions__question">
    ${questionNumber}/${questions.length}. ${currentQuestion.question}</h3>
    ${answers
      .map((answer) => {
        return `<button class="button questions__answer">${answer}</button>`;
      })
      .join('')}
    `;

  saveDataToSessionStorage('correctAnswer', currentQuestion.correct_answer);
  saveDataToSessionStorage('questionCategory', currentQuestion.category);
};

chooseAnswer();
