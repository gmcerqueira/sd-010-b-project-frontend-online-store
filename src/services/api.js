export async function getCategories() {
  const getProducts = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const getCat = await getProducts.json();
  console.log('fui chamada');
  return getCat;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const request = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`);
  const response = await request.json();
  console.log('eu tbm');
  return response;
}
