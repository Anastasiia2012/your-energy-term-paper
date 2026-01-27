import {renderPagination} from '../renderer/pagination.js';
import {render} from '../renderer/dialog.js';

export function renderExercise(data) {
  const exercises = document.getElementById('renderer');
console.log(data);
  const markup = data.results
    .map(({ bodyPart, burnedCalories, name, rating, target, time, _id }) => {
      return `
      <div class="bg-card rounded-xl p-4 cursor-pointer hover:shadow-md transition-shadow border border-border">
            <div class="flex items-center justify-between mb-3">
              <div class="flex items-center gap-2"><span class="text-xs font-medium px-2 py-1 bg-muted rounded text-foreground uppercase tracking-wide">Workout</span><span class="text-xs text-muted-foreground flex items-center gap-1">${rating}<svg class="w-3 h-3 text-yellow-500 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path></svg></span>
              </div>
              <button class="flex items-center gap-1 text-sm text-foreground hover:opacity-70 transition-opacity start-dialog" data-id="${_id}">Start
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right w-4 h-4">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </button>
            </div>
            <div class="flex items-center gap-2 mb-3">
              <div class="w-6 h-6 rounded-full bg-muted flex items-center justify-center">
                <svg class="w-3.5 h-3.5 text-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M4 12h16M4 12l4-4m-4 4l4 4m12-4l-4-4m4 4l-4 4"></path>
                </svg>
              </div>
              <h3 class="font-medium text-foreground text-sm leading-tight line-clamp-1">${name}</h3></div>
            <div class="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground"><span>Burned calories: <span class="text-foreground font-medium">${burnedCalories} / ${time} min</span></span><span>Body part: <span class="text-foreground font-medium capitalize">${bodyPart}</span></span><span>Target: <span class="text-foreground font-medium capitalize">${target}</span></span></div>
          </div>
      `;
    })
    .join("");


  exercises.innerHTML = `<div class="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4" id="exercises">
    ${markup}
  </div>`;

  renderPagination(data.totalPages, 'Exercise');


  exercises.querySelectorAll('.start-dialog').forEach(el => {
      el.addEventListener('click', () => {
          render(el.getAttribute('data-id'));
      })
  })
}