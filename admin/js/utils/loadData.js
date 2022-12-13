import { api } from '../../../api/api.js';
import { fetchTypes } from './fetchTypes.js';

const fetchProduto = (category, idProduct) => {
  const { data } = api.get(`/${category}/${idProduct}`);
  console.log(data);
};
export const loadData = async (id) => {
  const categoryInput = document.querySelector('#category-select');
  const { data } = await axios(
    `https://api-pizza-client.netlify.app/.netlify/functions/server/product/${id}`,
  );

  const idCategoria = data.payload[0].category_id;

  const dataCategoria = await api.get(`/category/${idCategoria}`);
  categoryInput.value = dataCategoria.data.payload[0].name;

  setTimeout(async () => {
    await fetchProduto(categoryInput.value.toLowerCase(), id);
    await fetchTypes(categoryInput, document.querySelector('#type-select'));
  }, 5000);
};
