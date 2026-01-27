const API_URL = 'https://your-energy.b.goit.study/api/filters?filter=Equipment'

import {fetchData } from './fetchApi.js';
import {renderEquipment} from './renderer/equipment.js';

export default class Equipment {
  constructor(params = []) {}

  execute(page = 1) {
    fetchData(API_URL, page)
      .then((equipment) => renderEquipment(equipment))
      .catch((error) => console.log(error));
  }
}
