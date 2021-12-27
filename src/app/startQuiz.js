import { renderQuestion } from './renderQuestion';
import { startTimer, stopTimer } from './timer';

export const startQuiz = async (questionList) => {
  const questionLength = questionList.length;
  let points = 0;

  const timer = startTimer(questionLength);

  for (let [id, question] of questionList.entries()) {
    const answer = await renderQuestion(id, question, questionLength);
    if (answer) points++;

    if (id === questionLength - 1) {
      stopTimer(timer);
    }
  }

  //TODO render finishQuiz()
};
