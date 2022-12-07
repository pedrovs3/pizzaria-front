import { ItemCard } from "./components/ItemCard.js";
import fetchProducts from "./utils/fetchProducts.js";

const cardapio = document.querySelector(".grid-foods");

const products = await fetchProducts();

products.map((item) => {
  const card = new ItemCard();
  card.setTitle(item.name);

  if (item.tbl_pizza) {
    const ingredients = item.tbl_pizza[0].tbl_pizza_ingredient;
    let ingredientsNames = [];
    ingredients.forEach((ingredient) =>
      ingredientsNames.push(ingredient.tbl_ingredient.name)
    );

    card.setIngredients(ingredientsNames.join(" "));
  } else {
    const volume = item.tbl_drink[0].volume;

    card.setIngredients(volume + " ml");
  }

  const { tbl_picture } = item.tbl_product_pictures[0];

  card.setPrice(item.price);
  card.setImage(tbl_picture.picture_link);
  card.setId(item.id);

  card.connectedCallback();

  cardapio.append(card.shadow);
});
