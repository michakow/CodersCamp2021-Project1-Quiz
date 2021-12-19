import { renderQuestion } from './renderQuestion';


export const startQuiz = async (questionList) => {
  window.points = 0;
  const questionLength = questionList.length;

  const gameInner = document.getElementsByClassName('game__inner')[0];
  gameInner.innerHTML = "";
  //TODO startTimer();
  for (let [id, question] of questionList.entries()) {
    console.log({id, question, questionList})
    const answer = await renderQuestion(id, question, questionLength);
    if (answer) window.points++;
  
  }

};
