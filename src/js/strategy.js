import Muscles from './muscles.js';
import Equipment from './equipment.js';
import Exercises from './exercises.js';

export const strategy = {
  muscles: new Muscles('Muscles'),
  exercises: new Exercises(),
 // equipment: new Equipment(),
  equipment: new Muscles('Equipment'),
  body_parts: new Muscles('Body parts')
};