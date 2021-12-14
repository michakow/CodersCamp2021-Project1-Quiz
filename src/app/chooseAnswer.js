import { renderQuestion } from './startQuiz.js';
import { renderScore } from './renderScore';
import { saveAnswersToLocalStorage } from './saveAnswersToLocalStorage';
import { decodeHtmlCharCodes } from './tools.js';

export default chooseAnswer = () => {
  const questions = document.querySelector('.questions__inner');
  let questionId = 0,
    answerCounter = 0;

  const nextQuestion = () => {
    questionId++;

    if (questionId < sessionStorage.getItem('questions-amount')) {
      setTimeout(() => {
        renderQuestion(questionId);
      }, 1000);
    } else {
      setTimeout(() => {
        questions.style.display = 'none';
        renderScore();
      }, 1000);
    }
  };

  const checkAnswer = (answer) =>
    answer === decodeHtmlCharCodes(sessionStorage.getItem('correctAnswer'));

  const showCorrectAnswer = () => {
    const answerButtons = document.querySelectorAll('.questions__answer');
    const correctAnswer = sessionStorage.getItem('correctAnswer');

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

      saveAnswersToLocalStorage(answerCounter);
    }
  });
};
