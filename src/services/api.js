export async function getCategories() {
  const endPoint = 'https://api.mercadolibre.com/sites/MLB/categories';
  return fetch(endPoint).then((data) => data.json());
}

export async function getProductsFromCategories(categories) {
  const endPoint = `https://api.mercadolibre.com/sites/MLB/search?category=${categories}`;
  return fetch(endPoint).then((data) => data.json());
}

export async function getProductsFromQuery(query) {
  const endPoint = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
  return fetch(endPoint).then((data) => data.json());
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const endPoint = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
  return fetch(endPoint).then((data) => data.json());
}
