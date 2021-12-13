export const showLeaderboard = (category) => {
  const leaderboard = JSON.parse(localStorage.getItem('leaderboard')).find(element => element.categoryName === category) || false;
  
  const scoreDashboard = document.querySelector('.score-dashboard__group');

  const scoreDashboardTitle = document.createElement('h3');
  scoreDashboardTitle.className = 'score-dashboard__title';
  const categoryNameFormatted = leaderboard.categoryName 
    ? leaderboard.categoryName[0].toUpperCase() + leaderboard.categoryName.slice(1)
    : category[0].toUpperCase() + category.slice(1);
  scoreDashboardTitle.appendChild(document.createTextNode(`Score dashboard for ${categoryNameFormatted}`));

  const scoreDashboardScoreList = document.createElement('ul');
  scoreDashboardScoreList.className = 'score-dashboard__player-score-list';

  scoreDashboardScoreList.innerHTML = leaderboard.players ? leaderboard.players.map(player => 
    `<li class="score-dashboard__player-score">
      <span class="score-dashboard__game-title">${player.name}</span>
      <span class="score-dashboard__game-title">${player.score}/10</span>
    </li>`
  ).join('') : '<p>Leaderboard for this category is empty</p>';

  scoreDashboard.appendChild(scoreDashboardTitle);
  scoreDashboard.appendChild(scoreDashboardScoreList);
};