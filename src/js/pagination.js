import {strategy} from './strategy.js';

export function init() {
  const paginationButtons = document.querySelectorAll('#pagination button');

  console.log(paginationButtons);
  paginationButtons.forEach(button => {
    button.addEventListener('click', (event) => {
      let filter = event.target.getAttribute('data-filter');
      console.log(filter);
      const page = parseInt(event.target.textContent);
      console.log(page);
      strategy[filter.toLowerCase()].execute(page);
      });
  });
}