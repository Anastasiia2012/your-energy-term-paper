import { getFavorites } from './js/storage/favorites.js';
import { renderExercise } from './js/renderer/exercise.js';

const favorites = getFavorites();

if (favorites.length !== 0) {
  renderExercise({
    results: favorites
  });
}




