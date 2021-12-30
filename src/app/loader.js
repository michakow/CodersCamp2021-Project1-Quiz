export const loader = () => {
  const div = document.querySelector('#app');
  const loader = document.createElement('div');
  loader.className = 'lds-dual-ring';

  div.append(loader);
};
