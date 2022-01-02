import { homepage } from './homepage';

export const showLeaderboard = (category) => {
  const leaderboard = !localStorage.getItem('leaderboard') === true ? false 
  : JSON.parse(localStorage.getItem('leaderboard')).find(element => element.categoryName === category) || false;
  
  //CreateElements - clear section and build new view
  const section = document.querySelector('section');
  section.innerHTML = '';
  section.className = 'score-dashboard';

  const container = document.createElement('div');
  container.className = 'container score-dashboard__container';

  const scoreDashboard = document.createElement('div');
  scoreDashboard.className = 'score-dashboard__group';

  const scoreDashboardTitle = document.createElement('h3');
  scoreDashboardTitle.className = 'score-dashboard__title';
  const categoryNameFormatted = leaderboard.categoryName
    ? leaderboard.categoryName[0].toUpperCase() +
      leaderboard.categoryName.slice(1)
    : category[0].toUpperCase() + category.slice(1);
  scoreDashboardTitle.appendChild(
    document.createTextNode(`Score dashboard for ${categoryNameFormatted}`),
  );

  const scoreDashboardScoreList = document.createElement('ul');
  scoreDashboardScoreList.className = 'score-dashboard__player-score-list';

  scoreDashboardScoreList.innerHTML = leaderboard.players
    ? leaderboard.players
        .map(
          (player) =>
            `<li class="score-dashboard__player-score">
      <span class="score-dashboard__game-title">${player.name}</span>
      <span class="score-dashboard__game-title">${player.score}/10</span>
    </li>`,
        )
        .join('')
    : '<p>Leaderboard for this category is empty</p>';

  const categoriesButton = document.createElement('button');
  categoriesButton.className = 'button finish__button--back';
  categoriesButton.appendChild(document.createTextNode('Back to categories'));

  scoreDashboard.appendChild(scoreDashboardTitle);
  scoreDashboard.appendChild(scoreDashboardScoreList);
  scoreDashboard.appendChild(categoriesButton);

  container.appendChild(scoreDashboard);

  section.appendChild(container);

  //EventListener - button action
  categoriesButton.addEventListener('click', () => {
    homepage(JSON.parse(sessionStorage.getItem('categories')));
  });
};
