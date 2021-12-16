export const saveAnswersToLocalStorage = (answerCounter) => {
  return localStorage.setItem(
    'answers',
    JSON.stringify({
      answerCounter,
      playerName: sessionStorage.getItem('userName'),
    }),
  );
};
