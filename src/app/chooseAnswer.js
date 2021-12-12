import { renderQuestion } from './startQuiz.js';

export default chooseAnswer = () => {
  const questions = document.querySelector('.questions__inner');
  let questionId = 0;

  const nextQuestion = () => {
    questionId++;

    if (questionId < sessionStorage.getItem('questions-amount')) {
      setTimeout(() => {
        renderQuestion(questionId);
      }, 1000);
    } else {
      setTimeout(() => {
        questions.style.display = 'none';
      }, 1000);
    }
  };

  const checkAnswer = (answer) => {
    return answer === sessionStorage.getItem('correctAnswer');
  };

  const showCorrectAnswer = (text) => {
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
    let answerCounter = 0;

    if (target.classList.contains('questions__answer')) {
      if (checkAnswer(target.textContent)) {
        console.log('correct');
        target.classList.add('questions__answer--correct');

        answerCounter++;
        nextQuestion();
      } else {
        console.log('incorrect');
        target.classList.add('questions__answer--wrong');

        showCorrectAnswer();
        nextQuestion();
      }
    }
  });
};

chooseAnswer();
