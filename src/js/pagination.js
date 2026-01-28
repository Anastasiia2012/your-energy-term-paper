import {strategy} from './strategy.js';

export function init() {
  const paginationButtons = document.querySelectorAll('#pagination button');

  paginationButtons.forEach(button => {
    button.addEventListener('click', (event) => {
      let filter = event.target.getAttribute('data-filter');
      const page = parseInt(event.target.textContent);
      strategy[filter.toLowerCase()].execute(page);
      });
  });
}