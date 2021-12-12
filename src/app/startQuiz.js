import { getQuestions } from './getData.js';
import chooseAnswer from './chooseAnswer.js';

let correctAnswer = '';

const onClick = async () => {
  await getQuestions(12);
  //   setQuestionData(0);
  renderQuestion(0);
};

export const addStartClickHandler = () => {
  const startButton = document.getElementsByClassName(
    'game__button--start-quiz',
  )[0];
  startButton.addEventListener('click', onClick, false);
};

export const renderQuestion = (questionId) => {
  const questions = JSON.parse(sessionStorage.getItem('questions'));
  setQuestionData(questionId, questions);
  console.log(questions);
  sessionStorage.setItem('questions-amount', questions.length);
};

export const setQuestionData = (id, questions) => {
  const currentQuestion = questions[id];
  const questionsInner = document.getElementsByClassName('questions__inner')[0];
  const answers = [
    ...currentQuestion.incorrect_answers,
    currentQuestion.correct_answer,
  ];

  let number = id + 1;

  questionsInner.innerHTML =
    '<h3 class="questions__question">' +
    number +
    '. ' +
    currentQuestion.question +
    '</h3>' +
    answers
      .map((answer) => {
        return `<button class="button questions__answer">${answer}</button>`;
      })
      .join('');

  correctAnswer = currentQuestion.correct_answer;
  sessionStorage.setItem('correctAnswer', correctAnswer);
};
