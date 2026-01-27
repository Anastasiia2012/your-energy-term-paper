import { fetchData } from "./fetchApi.js";
import { renderQuote } from "./renderer/quote.js";

const API_URL = "https://your-energy.b.goit.study/api/quote";

fetchData(API_URL, null, false)
  .then((quote) => renderQuote(quote))
  .catch((error) => console.log(error));