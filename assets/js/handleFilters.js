import { populateCardapio } from "./app.js";
import fetchProducts from "./utils/fetchProducts.js";
import { filterForCategory } from "./utils/fetchToFilterProducts.js";

const categorySelect = document.querySelectorAll(".select-input__option")[0];

console.log(categorySelect);
categorySelect.addEventListener("change", async (e) => {
  e.preventDefault();

  document.querySelector(".grid-foods").innerHTML = "";
  
  const { target } = e;
  const { value } = target;

  if (value.toLowerCase().includes("any")) {
    // DEFAULT
    const data = await fetchProducts();
    populateCardapio(data);
    return;
  }

  const data = await filterForCategory(value);

  console.log(data);

  populateCardapio(data);
});
