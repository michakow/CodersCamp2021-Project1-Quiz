import { homepage } from "./homepage";
import { showLeaderboard } from "./leaderboard";

export const finishQuiz = (player, score = 0, category, questionsLength) => {
  const playerName = player;
  const playerScore = score;
  const categoryName = category;

  //CreateElements - clear section and build new view
  const div = document.querySelector('#app');
  div.innerHTML = `<section></section>`;

  const section = document.querySelector('section');
  section.innerHTML = '';
  section.className = 'finish';

  const finishContainer = document.createElement('div');
  finishContainer.className = 'container';

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
  scoreSpan.appendChild(document.createTextNode(`${playerScore}/${questionsLength}`));

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

  section.appendChild(finishContainer);

  //EventListeners - buttons action
  categoriesButton.addEventListener('click', () => {
    homepage(JSON.parse(sessionStorage.getItem('categories')));
  });

  scoreboardButton.addEventListener('click', () => {
    showLeaderboard(categoryName, questionsLength);
  });

  //LocalStorage - save player score
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
