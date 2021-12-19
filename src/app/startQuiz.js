import { renderQuestion } from './renderQuestion';
import { finishQuiz } from './finishQuiz';


export const startQuiz = async (questionList) => {
  const questionLength = questionList.length;
  let points = 0;

  const gameInner = document.getElementsByClassName('game__inner')[0];
  gameInner.innerHTML = "";
  //TODO startTimer();
  for (let [id, question] of questionList.entries()) {
    const answer = await renderQuestion(id, question, questionLength);
    if (answer) points++;
  
    if (id === questionLength - 1) {
      return finishQuiz(window.userName, points, 'music')
    }
  }

};
