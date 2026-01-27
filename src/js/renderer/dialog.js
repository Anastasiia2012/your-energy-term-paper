import {renderPopup} from '../renderer/popup.js';
import {fetchData } from '../fetchApi.js';
import { renderExercise } from './exercise.js';

export function render (id = '') {

  console.log(id);

  fetchData(`https://your-energy.b.goit.study/api/exercises/${id}`, null, false)
    .then((exercise) => renderDialog(exercise))
    .catch((error) => console.log(error));

  function renderDialog(data) {
    console.log(data);
    console.log(data.rating)


    const markup = `
<div data-state="open"
     class="fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
     style="pointer-events: auto;" data-aria-hidden="true" aria-hidden="true"></div>

<div role="dialog" id="radix-:r0:" aria-describedby="radix-:r2:" aria-labelledby="radix-:r1:" data-state="open"
     class="fixed left-[50%] top-[50%] z-50 grid w-full translate-x-[-50%] translate-y-[-50%] gap-4 border shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg max-w-[708px] p-6 overflow-hidden bg-[#1f1f1f] border-border rounded-2xl"
     tabindex="-1" style="pointer-events: auto;">
  <button
    class="absolute right-4 top-4 z-10 w-8 h-8 flex items-center justify-center hover:opacity-70 transition-opacity" id="close-dialog">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
         stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x w-6 h-6 text-white">
      <path d="M18 6 6 18"></path>
      <path d="m6 6 12 12"></path>
    </svg>
  </button>
  <div class="flex gap-4">
    <div
      class="w-[295px] h-[258px] bg-[#e4e4e4] rounded-xl flex-shrink-0 flex items-center justify-center overflow-hidden">
      <img src="${data.gifUrl}" alt="Exercise image" class="w-full h-full object-cover"/>
    </div>
    <div class="flex-1 flex flex-col">
      <div class="flex flex-col space-y-1.5 text-center sm:text-left mb-3"><h2 id="radix-:r1:"
                                                                               class="tracking-tight text-2xl font-medium text-white">
        Glutes</h2>
        <div class="flex items-center gap-2 mt-1"><span class="text-base text-white">${data.rating}</span>
          <div class="flex items-center gap-0.5">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                 class="lucide lucide-star w-4 h-4 fill-amber-400 text-amber-400">
              <path
                d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                 class="lucide lucide-star w-4 h-4 fill-amber-400 text-amber-400">
              <path
                d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                 class="lucide lucide-star w-4 h-4 fill-amber-400 text-amber-400">
              <path
                d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                 class="lucide lucide-star w-4 h-4 fill-amber-400 text-amber-400">
              <path
                d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                 class="lucide lucide-star w-4 h-4 fill-amber-400/50 text-amber-400">
              <path
                d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
            </svg>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-4 gap-2 mb-3">
        <div><span class="text-xs text-[#6c6c6c] block">Target</span><span
          class="text-sm font-medium text-white capitalize">${data.target}</span></div>
        <div><span class="text-xs text-[#6c6c6c] block">Body Part</span><span
          class="text-sm font-medium text-white capitalize">${data.bodyPart}</span></div>
        <div><span class="text-xs text-[#6c6c6c] block">Equipment</span><span
          class="text-sm font-medium text-white capitalize">${data.equipment}</span></div>
        <div><span class="text-xs text-[#6c6c6c] block">Popular</span><span
          class="text-sm font-medium text-white">${data.popularity}</span></div>
      </div>
      <div class="mb-3"><span class="text-xs text-[#6c6c6c] block">Burned calories</span><span
        class="text-sm font-medium text-white">${data.burnedCalories}/${data.time} min</span></div>
      <div class="border-t border-[#4f4f4f] mb-3"></div>
    </div>
  </div>
  <div class="flex gap-4 mt-6 justify-end">
    <button
      class="inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 h-10 bg-white text-black hover:bg-white/90 rounded-full px-8 py-6 text-base font-normal">
      Add to favorites
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
           stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
           class="lucide lucide-heart w-5 h-5 ml-2">
        <path
          d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
      </svg>
    </button>
    <button
      id="give-rating"
      class="inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border bg-background h-10 border-white/40 text-white hover:bg-white/10 hover:text-white rounded-full px-8 py-6 text-base font-normal">
      Give a rating
    </button>
  </div>
  <button id="close_dialog" type="button"
          class="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity data-[state=open]:bg-accent data-[state=open]:text-muted-foreground hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
         stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x h-4 w-4">
      <path d="M18 6 6 18"></path>
      <path d="m6 6 12 12"></path>
    </svg>
    <span class="sr-only" >Close</span></button>
</div>
`;

    document.getElementById('dialog').innerHTML = markup;

    const closeDialog = document.getElementById('close-dialog');
    closeDialog.addEventListener('click', () => {
      document.getElementById('dialog').innerHTML = '';
    });

    const giveRating = document.getElementById('give-rating');
    giveRating.addEventListener('click', () => {
      renderPopup(id);
    });

  }
}