import { renderQuestion } from './renderQuestion';
import { finishQuiz } from './finishQuiz';


export const startQuiz = async (questionList) => {
  let points = 0;
  const questionLength = questionList.length;

  const gameInner = document.getElementsByClassName('game__inner')[0];
  gameInner.innerHTML = "";
  //TODO startTimer();
  for (let [id, question] of questionList.entries()) {
    const answer = await renderQuestion(id, question, questionLength);
    if (answer) window.points++;
  
    if (id === questionLength - 1) {
      console.log('test')
      return finishQuiz(window.userName, points, 'music')
    }
  }

};
