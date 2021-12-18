import { decodeHtmlCharCodes } from './tools.js';

export const renderQuestion = (question, questionId, questionLength) => {
  const questionsInner = document.getElementsByClassName('questions__inner')[0];

  const answers = [...question.incorrect_answers, question.correct_answer];

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
    ${questionId + 1}/${questionLength}. ${question.question}</h3>
    ${newAnswers
      .map((answer) => {
        return `<button class="button questions__answer">${answer}</button>`;
      })
      .join('')}
    `;

  const answerButtons = document.querySelectorAll('.questions__answer');
  console.log(answerButtons);

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

  const handleUserAnswer = (event) => {
    const { target } = event;
    console.log(target);

    if (checkAnswer(target.textContent)) {
      target.classList.add('questions__answer--correct');

      console.log('correct answer');
    } else {
      target.classList.add('questions__answer--wrong');

      //todo showCorrectAnswer;
      console.log('incorrect answer');
    }

    removeListeners();
    showCorrectAnswer();

    // setTimeout(() => {
    //   nextQuestion();
    // }, 1000);
  };

  answerButtons.forEach((button) => {
    console.log(button);
    button.addEventListener('click', handleUserAnswer);
  });

  const removeListeners = () => {
    answerButtons.forEach((button) => {
      button.removeEventListener('click', handleUserAnswer);
    });
  };
};
