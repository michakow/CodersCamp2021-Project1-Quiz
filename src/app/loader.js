export const loader = () => {
  const parent = document.querySelector('#app');
  const loader = `<div class="lds-dual-ring"></div>`;

  parent.innerHTML = loader;
};
