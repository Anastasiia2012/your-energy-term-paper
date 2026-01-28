import {init} from '../pagination.js';

export function renderPagination(totalPages, filter) {
  const pagination = document.getElementById('pagination');
  let markup = '';
  totalPages = totalPages > 5 ? 5 : totalPages;
  for (let i = 1; i <= totalPages; i++) {
    markup += `
    <button
      data-filter="${filter}"
      class="w-8 h-8 rounded-full flex items-center justify-center text-sm transition-colors text-muted-foreground hover:text-foreground">
      ${i}
    </button>
      `;
  }

  pagination.innerHTML = markup;

  init(filter);
}