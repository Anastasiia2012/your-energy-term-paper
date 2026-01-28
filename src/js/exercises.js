const API_URL = 'https://your-energy.b.goit.study/api/exercises';

import {fetchData } from './fetchApi.js';
import {renderExercise } from './renderer/exercise.js';

export default class Exercises {
  constructor(params = []) {}

  execute(filter = '') {
    fetchData(filter ? API_URL : API_URL + filter, null, false)
      .then((exercises) => renderExercise(exercises))
      .catch((error) => console.log(error));
  }
}