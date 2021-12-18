import { renderQuestion } from './renderQuestion';

export const startQuiz = async (questionList) => {
  let points = 0;
  const questionLength = questionList.length;

  //TODO startTimer();
  for (let [id, question] of questionList.entries()) {
    const answer = await renderQuestion(id, question, questionLength);
    if (answer) points++;
  }

  //TODO render finishQuiz()
};
