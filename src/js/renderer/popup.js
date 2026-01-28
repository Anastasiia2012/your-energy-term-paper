import {rating} from '../rating.js';

export function renderPopup (id = string) {
const markup = `
<div data-state="open"
     class="fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
     style="pointer-events: auto;" data-aria-hidden="true" aria-hidden="true"></div>

<div role="dialog" id="radix-:r3:" aria-describedby="radix-:r5:" aria-labelledby="radix-:r4:" data-state="open"
     class="fixed left-[50%] top-[50%] z-50 grid w-full translate-x-[-50%] translate-y-[-50%] gap-4 border shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg max-w-md p-0 overflow-hidden bg-[#242424] border-none rounded-2xl"
     tabindex="-1" style="pointer-events: auto;">
  <button id="close-popup"
    class="absolute right-4 top-4 z-10 w-8 h-8 flex items-center justify-center hover:opacity-70 transition-opacity">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
         stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x w-6 h-6 text-white">
      <path d="M18 6 6 18"></path>
      <path d="m6 6 12 12"></path>
    </svg>
  </button>
  <div class="p-8 pt-12">
    <div class="mb-6"><p class="text-sm text-muted-foreground mb-2">Rating</p>
      <div class="flex items-center gap-2"><span class="text-xl font-medium text-white" id="rating-amount">0.0</span>
        <div class="flex items-center gap-1" id="rating">
          <button type="button" class="transition-transform hover:scale-110">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                 class="lucide lucide-star w-6 h-6 text-muted-foreground/50">
              <path
                d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
            </svg>
          </button>
          <button type="button" class="transition-transform hover:scale-110">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                 class="lucide lucide-star w-6 h-6 text-muted-foreground/50">
              <path
                d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
            </svg>
          </button>
          <button type="button" class="transition-transform hover:scale-110">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                 class="lucide lucide-star w-6 h-6 text-muted-foreground/50">
              <path
                d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
            </svg>
          </button>
          <button type="button" class="transition-transform hover:scale-110">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                 class="lucide lucide-star w-6 h-6 text-muted-foreground/50">
              <path
                d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
            </svg>
          </button>
          <button type="button" class="transition-transform hover:scale-110">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                 class="lucide lucide-star w-6 h-6 text-muted-foreground/50">
              <path
                d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
    <form class="space-y-4" id="review-form"><input type="email" placeholder="Email"
                                   class="w-full px-6 py-4 bg-transparent border border-[#4A4A4A] rounded-full text-white placeholder:text-muted-foreground focus:outline-none focus:border-white/50 transition-colors"
                                   required="" value="" name="email"><textarea name="review" placeholder="Your comment" rows="5"
                                                                  class="w-full px-6 py-4 bg-transparent border border-[#4A4A4A] rounded-2xl text-white placeholder:text-muted-foreground focus:outline-none focus:border-white/50 transition-colors resize-none"
                                                                  required="" spellcheck="false"></textarea>

      <button type="submit"
              class="w-full py-4 bg-white text-black font-medium rounded-full hover:bg-white/90 transition-colors">Send
      </button>
    </form>
  </div>
  <button  type="button"
          class="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity data-[state=open]:bg-accent data-[state=open]:text-muted-foreground hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
         stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x h-4 w-4">
      <path d="M18 6 6 18"></path>
      <path d="m6 6 12 12"></path>
    </svg>
    <span class="sr-only">Close</span></button>
  <grammarly-extension-vbars data-grammarly-shadow-root="true" style="display: contents; --rem: 16;"
                             class="dnXmp"></grammarly-extension-vbars>
</div>
`;

document.getElementById('popup').innerHTML = markup;
rating();

  const closePopup = document.getElementById('close-popup');

  closePopup.addEventListener('click', () => {
    document.getElementById('popup').innerHTML = '';
  });

  const submitForm = document.getElementById('review-form');
  submitForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const rating = document.getElementById("rating-amount").innerText
    fetch(`https://your-energy.b.goit.study/api/exercises/${id}/rating`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        "rate": parseInt(rating),
        "email": e.target.email.value,
        "review": e.target.review.value
      }),
    })
      .then(response => response.json())
      .then(data => {})
      .catch(error => {
        console.error('Error:', error);
      });
    closePopup.click();
  });
}