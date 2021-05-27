export async function getCategories() {
  const URL_API = 'https://api.mercadolibre.com/sites/MLB/categories';
  const request = await fetch(URL_API);
  const response = await request.json();

  return response;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const URL_API = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
  const request = await fetch(URL_API);
  const response = await request.json();

  return response;
}
