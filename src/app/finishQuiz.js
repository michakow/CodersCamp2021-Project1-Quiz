export const finishQuiz = (player, score = 0, category) => {
  const playerName = player;
  const playerScore = score;
  const categoryName = category;

  //CreateElements
  const finishContainer = document.querySelector('.finish').children[0];

  const finishHeading = document.createElement('div');
  finishHeading.className = 'finish__result';

  const firstParagraph = document.createElement('p');
  firstParagraph.appendChild(document.createTextNode(`It's over!`));
  const secondParagraph = document.createElement('p');
  secondParagraph.appendChild(document.createTextNode('Thanks for game :)'));

  finishHeading.appendChild(firstParagraph);
  finishHeading.appendChild(secondParagraph);

  const scoreResult = document.createElement('div');
  scoreResult.className = 'finish__score-group';

  const scoreHeading = document.createElement('h3');
  scoreHeading.appendChild(document.createTextNode('your score'));
  const scoreSpan = document.createElement('span');
  scoreSpan.className = 'finish__score';
  scoreSpan.appendChild(document.createTextNode(`${playerScore}/10`));

  scoreResult.appendChild(scoreHeading);
  scoreResult.appendChild(scoreSpan);

  const buttonsDiv = document.createElement('div');
  buttonsDiv.className = 'finish__buttons';

  const categoriesButton = document.createElement('button');
  categoriesButton.className = 'button finish__button--back';
  categoriesButton.appendChild(document.createTextNode('Back to categories'));
  const scoreboardButton = document.createElement('button');
  scoreboardButton.className = 'button finish__button--scoreboard';
  scoreboardButton.appendChild(document.createTextNode('Scoreboard'));

  buttonsDiv.appendChild(categoriesButton);
  buttonsDiv.appendChild(scoreboardButton);

  finishContainer.appendChild(finishHeading);
  finishContainer.appendChild(scoreResult);
  finishContainer.appendChild(buttonsDiv);

  //EventListeners
  categoriesButton.addEventListener('click', () => {
    console.log('klik w kategorie');
    //showCategories(); not implemented
  });

  scoreboardButton.addEventListener('click', () => {
    console.log('klik w scoreboard');
    //showLeaderboard(category); not implemented
  });

  //LocalStorage
  const leaderboard = JSON.parse(localStorage.getItem('leaderboard')) || [];
  if (
    leaderboard.length &&
    leaderboard.find((element) => element.categoryName === categoryName)
  ) {
    leaderboard
      .find((element) => element.categoryName === categoryName)
      .players.push({
        name: playerName,
        score: playerScore,
      });
  } else {
    leaderboard.push({
      categoryName,
      players: [
        {
          name: playerName,
          score: playerScore,
        },
      ],
    });
  }

  localStorage.setItem('leaderboard', JSON.stringify(leaderboard));
};
