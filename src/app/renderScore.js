export const renderScore = () => {
  const finishScore = document.querySelector('.finish__score-group'),
    rightAnswers = JSON.parse(localStorage.getItem('answers')) ?? 0,
    questionsAmount = sessionStorage.getItem('questions-amount');

  return (finishScore.innerHTML = `
          <h3>Your Score:</h3>
          <span class="finish__score">${
            rightAnswers.answerCounter
              ? rightAnswers.answerCounter
              : rightAnswers
          }/${questionsAmount}</span>
        `);
};
