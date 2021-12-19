import { decodeHtmlCharCodes, shuffle } from './tools.js';
import { finishQuiz } from './finishQuiz';

export const renderQuestion = (questionId, question, questionLength) => {
  const questionsInner = document.getElementsByClassName('questions__inner')[0];

  const answers = [...question.incorrect_answers, question.correct_answer];
  const shuffledAnswers = shuffle(answers);
  
  questionsInner.innerHTML = `
    <h3 class="questions__question">
    ${questionId + 1}/${questionLength}. ${question.question}</h3>
    ${shuffledAnswers
      .map((answer) => {
        return `<button class="button questions__answer">${answer}</button>`;
      })
      .join('')}
    `;

  const answerButtons = document.querySelectorAll('.questions__answer');

  const checkAnswer = (answer) =>
    answer === decodeHtmlCharCodes(question.correct_answer);

  const showCorrectAnswer = () => {
    const answerButtons = document.querySelectorAll('.questions__answer');

    answerButtons.forEach((button) => {
      if (button.textContent === question.correct_answer) {
        button.classList.add('questions__answer--correct');
      }
    });
  };

  return new Promise((answer) => {
    const handleUserAnswer = (event) => {
      const { target } = event;

      if (checkAnswer(target.textContent)) {
        target.classList.add('questions__answer--correct');

        setTimeout(() => {
          answer(true);
        }, 1000);
        console.log('correct answer');
      } else {
        target.classList.add('questions__answer--wrong');

        showCorrectAnswer();
        console.log('incorrect answer');
        setTimeout(() => {
          answer(false);
        }, 1000);
      }

      if (questionId === questionLength - 1) {
      setTimeout(() => {
          return finishQuiz(window.userName, window.points, 'music')
      }, 2000)
    }

     

      removeListeners();
    };

    answerButtons.forEach((button) => {
      button.addEventListener('click', handleUserAnswer);
    });

    const removeListeners = () => {
      answerButtons.forEach((button) => {
        button.removeEventListener('click', handleUserAnswer);
      });
    };
  });
};
