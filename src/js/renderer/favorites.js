import { getFavorites } from '../storage/favorites.js';
import { renderExercise } from './exercise.js';

const favorites = getFavorites();
debugger;
console.log(favorites);
if(favorites.length !== 0)  {
  renderExercise({
    results: JSON.parse(favorites)
  });
}


