import {renderPagination} from '../renderer/pagination.js';

export function renderMuscles(data) {
  console.log(data);
  const muscles = document.getElementById('renderer');
  const markup = data.results
    .map(({ name, imgURL }) => {
      return `
        <div class="relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer group " style="background-image: url(&quot;${imgURL}&quot;); background-size: cover; background-position: center center;">
          <div class="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors"></div>
          <div class="absolute inset-0 flex flex-col items-center justify-center text-white"><h3 class="text-lg md:text-xl font-medium mb-1">${name}</h3><span class="text-xs text-white/70 uppercase tracking-wider">Muscules</span></div>
        </div>
      `;
    })
    .join("");



  muscles.innerHTML = `<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5" id="muscles">${markup}</div>`;

  renderPagination(data.totalPages, 'Muscles');
}