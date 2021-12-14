import { renderScore } from './renderScore';

export const startTimer = () => {
  const timer = document.querySelector('.questions__timer');
  const questions = document.querySelector('.questions__inner');

  timer.textContent = '';
  const totalTime = 60;
  let timeleft = totalTime;
  if (timeleft > 0) {
    timer.textContent = `Time left: 1m 00s`;
    const interval = setInterval(() => {
      timeleft--;
      let minutes = Math.floor(timeleft / 60);
      let seconds = Math.floor(timeleft % 60);
      let questionId = sessionStorage.getItem('questionId');

      timer.textContent = `Time left: ${minutes}m ${seconds}s`;

      if (timeleft < 0) {
        clearInterval(interval);
        timer.textContent = `Time left: 0m 0s`;

        timer.style.display = 'none';
        questions.style.display = 'none';
        renderScore();
      } else if (questionId === sessionStorage.getItem('questions-amount')) {
        clearInterval(interval);
        timer.style.display = 'none';
      }
    }, 1000);
  }
};
