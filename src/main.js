

import {strategy} from './js/strategy.js';
import {search} from './js/search.js';


const filterButtons = document.querySelectorAll('#filters-strategy button');
const searchInput = document.querySelector('#search');

searchInput.addEventListener('input', (event) => search(event.target.value));
filterButtons.forEach(button => {
  button.addEventListener('click', (event) => {
    let filter = event.target.getAttribute('data-filter');
    strategy[filter.toLowerCase()].execute();
  });
});

strategy['muscles'].execute();


