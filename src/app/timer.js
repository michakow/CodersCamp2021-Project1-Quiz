import { finishQuiz } from './finishQuiz.js';

export const startTimer = (userName, categoryName, questionLength) => {
  const timer = document.querySelector('.questions__timer');
  const questions = document.querySelector('.questions');

  timer.textContent = '';
  const totalTime = 60;
  let timeleft = totalTime;
  if (timeleft > 0) {
    timer.textContent = `Time left: 1m 00s`;
    const interval = setInterval(() => {
      timeleft--;
      let minutes = Math.floor(timeleft / 60);
      let seconds = Math.floor(timeleft % 60);

      timer.textContent = `Time left: ${minutes}m ${seconds}s`;

      if (timeleft < 0) {
        clearInterval(interval);
        timer.textContent = `Time left: 0m 0s`;

        timer.style.display = 'none';
        questions.remove();
        finishQuiz(userName, window.points, categoryName, questionLength);
      }
    }, 1000);
    return interval;
  }
};

export const stopTimer = (timer) => {
  const questions = document.querySelector('.questions');
  const timerElem = document.querySelector('.questions__timer');
  timerElem.style.display = 'none';
  questions.remove();
  clearInterval(timer);
};
