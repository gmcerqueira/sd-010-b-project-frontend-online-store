export const getProductfromId = async (id) => {
  const URL_API = `https://api.mercadolibre.com/items?ids=${id}`;
  const request = await fetch(URL_API);
  const response = await request.json();

  return response[0].body;
};
