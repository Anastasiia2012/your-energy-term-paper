const FAVORITES_KEY = 'favorites';


export function getFavorites() {
  try {
    return JSON.parse(localStorage.getItem(FAVORITES_KEY)) || [];
  } catch {
    return [];
  }
}

export function addToFavorites(exercise) {
  const favorites = getFavorites();

  favorites.push(exercise);
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
}
