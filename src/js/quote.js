import { fetchData } from "./fetchApi.js";
import { renderQuote } from "./renderer/quote.js";

const API_URL = "https://your-energy.b.goit.study/api/quote";
const STORAGE_KEY = "savedQuote";

const savedQuote = localStorage.getItem(STORAGE_KEY);

if (savedQuote) {
  renderQuote(JSON.parse(savedQuote));
} else {
  fetchData(API_URL, null, false)
    .then((quote) => {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(quote));
      renderQuote(quote);
    })
    .catch((error) => console.log(error));
}