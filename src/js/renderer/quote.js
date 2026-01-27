export function renderQuote(quote) {
  const text = document.getElementById('quote-text');
  const author = document.getElementById('quote-author');

  text.insertAdjacentHTML("beforeend", quote.quote);
  author.insertAdjacentHTML("beforeend", quote.author);
}