import { renderQuestion } from './renderQuestion';

export const startQuiz = async (questionLists) => {
  let points = 0;
  const questionLength = questionLists.length;

  questionLists.forEach(async (question, id) => {
    const answer = await renderQuestion(question, id, questionLength);
    if (answer) points++;
  });
  // renderQuestion(questionLists[0], 0, 10);

  // wyrenderowanie finishQuiz

  // startTimer(questionsAmount);
};
