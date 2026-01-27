export async function fetchData(apiUrl, page, pagination = true) {
  const params = new URLSearchParams({
    limit: 12,
    page: page ? page : 1
  });

  return fetch(
    pagination ? apiUrl + `&${params}` : apiUrl
  ).then((response) => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}