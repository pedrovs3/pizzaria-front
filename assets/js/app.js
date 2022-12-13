import { ItemCard } from "./components/ItemCard.js";
import fetchFavoriteProducts from "./utils/fetchFavoriteProducts.js";
import {
  categoryFetch,
  drinkTypesFetch,
  pizzaStuffingFetch,
  pizzaTypesFetch,
} from "./utils/fetchFilters.js";
import fetchPizzaInSaleOff from "./utils/fetchPizzaInSaleOff.js";
import fetchProducts from "./utils/fetchProducts.js";

const cardapio = document.querySelector(".grid-foods");

const pizzasPromocao = document
  .querySelector(".promo-section")
  .querySelector(".outer-box")
  .querySelector("li");

const produtosFavoritos = document
  .querySelector(".section-fav")
  .querySelector(".outer-box")
  .querySelector("li");

const categorySelect = document.querySelector("#category-filter");
const selects = document.querySelectorAll(".select-input__option");

// fetchs
const products = await fetchProducts();
const pizzasInSaleOf = await fetchPizzaInSaleOff();
const mostLikedProducts = await fetchFavoriteProducts();

// filters fetch
const categories = await categoryFetch();
const drinkTypes = await drinkTypesFetch();
const pizzaTypes = await pizzaTypesFetch();
const pizzaStuffing = await pizzaStuffingFetch();

export const populateCardapio = (data) => {
  data.map((item) => {
    const card = new ItemCard();
    card.setTitle(item.name);

    if (item.tbl_pizza) {
      const ingredients = item.tbl_pizza[0].tbl_pizza_ingredient;
      const ingredientsNames = [];
      ingredients.forEach((ingredient) =>
        ingredientsNames.push(ingredient.tbl_ingredient.name)
      );

      card.setIngredients(
        ingredientsNames.join(", ").replace(/,\s([^,]+)$/, " e $1")
      );
    } else {
      const { volume } = item.tbl_drink[0];

      card.setIngredients(`${volume} ml`);
    }

    const { tbl_picture } = item.tbl_product_pictures[0];

    card.setPrice(item.price);
    card.setImage(tbl_picture.picture_link);
    card.setId(item.id);

    card.connectedCallback();

    cardapio.append(card.shadow);
  });
};

export const populateProdutosEmPromocao = (data) => {
  data.map((item) => {
    console.log(item);
    const card = new ItemCard();
    card.setTitle(item.tbl_product.name);
    const ingredients = item.tbl_product.tbl_pizza[0].tbl_pizza_ingredient;

    let ingredientsNames = [];

    ingredients
      .slice(0, 1)
      .forEach((ingredient) =>
        ingredientsNames.push(ingredient.tbl_ingredient.name)
      );

    card.setIngredients(ingredientsNames.join(" "));

    const { tbl_picture } = item.tbl_product.tbl_product_pictures[0];

    card.setPrice(item.tbl_product.price);
    card.setImage(tbl_picture.picture_link);
    card.setId(item.id);

    card.connectedCallback();

    pizzasPromocao.append(card.shadow);
  });
};

export const populateProdutosFavoritos = (data) => {
  data.map((item) => {
    const card = new ItemCard();
    card.setTitle(item.name);

    if (item.tbl_pizza) {
      const ingredients = item.tbl_pizza[0].tbl_pizza_ingredient;
      const ingredientsNames = [];
      ingredients.forEach((ingredient) =>
        ingredientsNames.push(ingredient.tbl_ingredient.name)
      );

      card.setIngredients(ingredientsNames.join(" "));
    } else {
      const { volume } = item.tbl_drink[0];

      card.setIngredients(`${volume} ml`);
    }

    const { tbl_picture } = item.tbl_product_pictures[0];

    card.setPrice(item.price);
    card.setImage(tbl_picture.picture_link);
    card.setId(item.id);

    card.connectedCallback();

    produtosFavoritos.append(card.shadow);
  });
};

export const clearFilters = () => {
  while (selects[1].lastElementChild) {
    selects[1].remove(selects[1].lastElementChild);
  }
  while (selects[2].lastElementChild) {
    selects[2].remove(selects[2].lastElementChild);
  }
};

const populateCategoryFilter = (data) => {
  data.payload.map((item) => {
    const option = document.createElement("option");
    option.value = item.name;
    option.text = item.name;
    categorySelect.appendChild(option);
  });
};

const populateDrinkTypeFilter = (data) => {
  selects[1].innerHTML = '<option value="Any" selected>Any</option>';

  data.payload.map((item) => {
    const option = document.createElement("option");
    option.value = item.name;
    option.text = item.name;
    selects[1].append(option);
  });
};

const populatePizzaTypeFilter = (data) => {
  selects[1].innerHTML = '<option value="Any" selected>Any</option>';

  data.payload.map((item) => {
    const option = document.createElement("option");
    option.value = item.name;
    option.text = item.name;
    selects[1].append(option);
  });
};

const populatePizzaStuffingFilter = (data) => {
  selects[2].innerHTML = '<option value="Any" selected>Any</option>';
  data.payload.map((item) => {
    const option = document.createElement("option");
    option.value = item.name;
    option.text = item.name;
    selects[2].append(option);
  });
};

selects[0].addEventListener("change", (e) => {
  const { value } = selects[0];

  clearFilters();

  if (value.toLowerCase() === "pizza") {
    populatePizzaTypeFilter(pizzaTypes);
    populatePizzaStuffingFilter(pizzaStuffing);
  } else {
    populateDrinkTypeFilter(drinkTypes);
  }
});

populateCardapio(products);
populateProdutosEmPromocao(pizzasInSaleOf);
populateProdutosFavoritos(mostLikedProducts);
populateCategoryFilter(categories);
