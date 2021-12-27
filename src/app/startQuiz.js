import { renderQuestion } from './renderQuestion';
import { finishQuiz } from './finishQuiz';
import { startTimer, stopTimer } from './timer';

export const startQuiz = async (questionList) => {
  const questionLength = questionList.length;
  let points = 0;

  const gameInner = document.getElementsByClassName('game__inner')[0];
  gameInner.innerHTML = "";
      
  const timer = startTimer(questionLength);

  for (let [id, question] of questionList.entries()) {
    const answer = await renderQuestion(id, question, questionLength);
    if (answer) points++;

    if (id === questionLength - 1) {
      stopTimer(timer);
      return finishQuiz(window.userName, points, 'music')
    }
  }

};
