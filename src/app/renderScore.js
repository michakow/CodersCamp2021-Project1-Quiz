export const renderScore = () => {
  const finishScore = document.querySelector('.finish__score-group'),
    rightAnswers = JSON.parse(localStorage.getItem('answers')),
    questionsAmount = sessionStorage.getItem('questions-amount');
  console.log(rightAnswers);
  return (finishScore.innerHTML = `
          <h3>Your Score:</h3>
          <span class="finish__score">${rightAnswers.answerCounter}/${questionsAmount}</span>
        `);
};
