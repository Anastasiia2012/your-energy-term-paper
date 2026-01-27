
import { fetchData } from "./fetchApi.js";
import { renderExercise } from "./renderer/exercise.js";

const API_URL = "https://your-energy.b.goit.study/api/exercises?keyword=";

export function search(keyword) {
  fetchData(API_URL + keyword)
    .then((data) => renderExercise(data))
    .catch((error) => console.log(error));
}
