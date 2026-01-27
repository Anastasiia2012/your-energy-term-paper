const API_URL = 'https://your-energy.b.goit.study/api/filters?filter=Muscles'

import {fetchData } from './fetchApi.js';
import {renderMuscles } from './renderer/muscles.js';

export default class Muscles {
  constructor(filter) {
    this.api = 'https://your-energy.b.goit.study/api/filters?filter=' + filter
  }

  execute(page = 1) {
    fetchData(this.api, page)
      .then((muscles) => renderMuscles(muscles))
      .catch((error) => console.log(error));
  }
}
