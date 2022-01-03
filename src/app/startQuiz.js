import { renderQuestion } from './renderQuestion';
import { finishQuiz } from './finishQuiz';
import { startTimer, stopTimer } from './timer';

export const startQuiz = async (questionList, categoryName) => {
  const section = document.querySelector('section');
  section.className = 'questions';
  section.innerHTML = `
    <div class="container">
      <div class="questions__timer"></div>
      <div class="questions__inner"></div>
    </div>
  `;

  const questionLength = questionList.length;
  window.points = 0;

  const timer = startTimer(window.userName, categoryName);

  for (let [id, question] of questionList.entries()) {
    const answer = await renderQuestion(id, question, questionLength);
    if (answer) window.points++;

    if (id === questionLength - 1) {
      stopTimer(timer);
      return finishQuiz(window.userName, window.points, categoryName, questionLength);
    }
  }
};
