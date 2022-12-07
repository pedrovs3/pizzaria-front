import { ItemCard } from "./components/ItemCard.js";
import fetchProducts from "./utils/fetchProducts.js";

const cardapio = document.querySelector(".grid-foods");


const teste = [
  {
    id: 1,
    name: "4 queijos grande",
    price: "39.99",
    likes: 1,
    created_by: 1,
    status: true,
    tbl_pizza: [
      {
        id: 1,
        product_id: 1,
        pizza_type_id: 3,
        tbl_pizza_ingredient: [
          {
            id: 125,
            ingredient_id: 9,
            pizza_id: 1,
            tbl_ingredient: { name: "farinha", id: 9 },
          },
          {
            id: 126,
            ingredient_id: 11,
            pizza_id: 1,
            tbl_ingredient: { name: "morango", id: 11 },
          },
          {
            id: 127,
            ingredient_id: 10,
            pizza_id: 1,
            tbl_ingredient: { name: "chocolate", id: 10 },
          },
          {
            id: 128,
            ingredient_id: 12,
            pizza_id: 1,
            tbl_ingredient: { name: "m&m", id: 12 },
          },
        ],
        tbl_pizza_stuffing: [{ id: 1, pizza_id: 1, stuffing_id: 1 }],
        tbl_pizza_type: {
          id: 3,
          name: "Grande",
          dimensions: "40x40",
          status: true,
        },
      },
    ],
    tbl_product_pictures: [
      {
        id: 3,
        product_id: 1,
        picture_id: 3,
        tbl_picture: {
          id: 3,
          picture_link:
            "https://www.receitasnestle.com.br/sites/default/files/srh_recipes/d036cd01122da62bf581784f52d99b3a.jpg",
        },
      },
    ],
  },
  {
    id: 2,
    name: "calabresa media",
    price: "25.99",
    likes: 20,
    created_by: 2,
    status: true,
    tbl_pizza: [
      {
        id: 2,
        product_id: 2,
        pizza_type_id: 2,
        tbl_pizza_ingredient: [
          {
            id: 2,
            ingredient_id: 2,
            pizza_id: 2,
            tbl_ingredient: { name: "queijo2", id: 2 },
          },
          {
            id: 5,
            ingredient_id: 3,
            pizza_id: 2,
            tbl_ingredient: { name: "queijo3", id: 3 },
          },
        ],
        tbl_pizza_stuffing: [{ id: 2, pizza_id: 2, stuffing_id: 2 }],
        tbl_pizza_type: {
          id: 2,
          name: "Media",
          dimensions: "30x30",
          status: true,
        },
      },
    ],
    tbl_product_pictures: [
      {
        id: 1,
        product_id: 2,
        picture_id: 1,
        tbl_picture: {
          id: 1,
          picture_link:
            "https://www.receitasnestle.com.br/sites/default/files/srh_recipes/31604646755f78882c27872c877d9ea5.jpg",
        },
      },
    ],
  },
  {
    id: 3,
    name: "Pepsi",
    price: "12.99",
    likes: 5,
    created_by: 1,
    status: true,
    tbl_drink: [
      {
        id: 1,
        volume: 500,
        product_id: 3,
        drink_type_id: 1,
        tbl_drink_type: { id: 1, name: "Refrigerante", status: true },
      },
    ],
    tbl_product_pictures: [
      {
        id: 5,
        product_id: 3,
        picture_id: 5,
        tbl_picture: {
          id: 5,
          picture_link:
            "https://storage.googleapis.com/senai-pizzaria.appspot.com/1669943509359.jpg",
        },
      },
    ],
  },
  {
    id: 4,
    name: "Coca-Cola",
    price: "10.99",
    likes: 2,
    created_by: 2,
    status: true,
    tbl_drink: [
      {
        id: 2,
        volume: 1000,
        product_id: 4,
        drink_type_id: 1,
        tbl_drink_type: { id: 1, name: "Refrigerante", status: true },
      },
    ],
    tbl_product_pictures: [
      {
        id: 4,
        product_id: 4,
        picture_id: 4,
        tbl_picture: {
          id: 4,
          picture_link:
            "https://trimais.vteximg.com.br/arquivos/ids/1027694-1000-1000/foto_original.jpg?v=637686859357000000",
        },
      },
    ],
  },
  {
    id: 5,
    name: "2 queijos Familia",
    price: "35.99",
    likes: 30,
    created_by: 2,
    status: true,
    tbl_pizza: [
      {
        id: 3,
        product_id: 5,
        pizza_type_id: 4,
        tbl_pizza_ingredient: [],
        tbl_pizza_stuffing: [{ id: 3, pizza_id: 3, stuffing_id: 3 }],
        tbl_pizza_type: {
          id: 4,
          name: "Familia",
          dimensions: "50x50",
          status: true,
        },
      },
    ],
    tbl_product_pictures: [
      {
        id: 2,
        product_id: 5,
        picture_id: 2,
        tbl_picture: {
          id: 2,
          picture_link:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREuAHsQY2RnWoZd31iCYkEcX4T-rBijynygQ&usqp=CAU",
        },
      },
    ],
  },
  {
    id: 29,
    name: "4 queijos grande",
    price: "30.99",
    likes: null,
    created_by: 1,
    status: true,
    tbl_pizza: [
      {
        id: 22,
        product_id: 29,
        pizza_type_id: 3,
        tbl_pizza_ingredient: [],
        tbl_pizza_stuffing: [{ id: 22, pizza_id: 22, stuffing_id: 1 }],
        tbl_pizza_type: {
          id: 3,
          name: "Grande",
          dimensions: "40x40",
          status: true,
        },
      },
    ],
    tbl_product_pictures: [
      {
        id: 13,
        product_id: 29,
        picture_id: 14,
        tbl_picture: {
          id: 14,
          picture_link:
            "https://storage.googleapis.com/senai-pizzaria.appspot.com/1669644485878.webp",
        },
      },
    ],
  },
  {
    id: 30,
    name: "4 queijos grande",
    price: "30.99",
    likes: null,
    created_by: 1,
    status: true,
    tbl_pizza: [
      {
        id: 23,
        product_id: 30,
        pizza_type_id: 3,
        tbl_pizza_ingredient: [],
        tbl_pizza_stuffing: [{ id: 23, pizza_id: 23, stuffing_id: 1 }],
        tbl_pizza_type: {
          id: 3,
          name: "Grande",
          dimensions: "40x40",
          status: true,
        },
      },
    ],
    tbl_product_pictures: [
      {
        id: 14,
        product_id: 30,
        picture_id: 15,
        tbl_picture: {
          id: 15,
          picture_link:
            "https://storage.googleapis.com/senai-pizzaria.appspot.com/1669644576096.webp",
        },
      },
    ],
  },
  {
    id: 44,
    name: "2 queijos Media",
    price: "30.99",
    likes: null,
    created_by: 1,
    status: true,
    tbl_pizza: [
      {
        id: 37,
        product_id: 44,
        pizza_type_id: 2,
        tbl_pizza_ingredient: [
          {
            id: 39,
            ingredient_id: 7,
            pizza_id: 37,
            tbl_ingredient: { name: "tomate", id: 7 },
          },
          {
            id: 40,
            ingredient_id: 9,
            pizza_id: 37,
            tbl_ingredient: { name: "farinha", id: 9 },
          },
          {
            id: 41,
            ingredient_id: 8,
            pizza_id: 37,
            tbl_ingredient: { name: "leite", id: 8 },
          },
        ],
        tbl_pizza_stuffing: [{ id: 36, pizza_id: 37, stuffing_id: 3 }],
        tbl_pizza_type: {
          id: 2,
          name: "Media",
          dimensions: "30x30",
          status: true,
        },
      },
    ],
    tbl_product_pictures: [
      {
        id: 28,
        product_id: 44,
        picture_id: 31,
        tbl_picture: {
          id: 31,
          picture_link:
            "https://storage.googleapis.com/senai-pizzaria.appspot.com/1669809094417.webp",
        },
      },
    ],
  },
  {
    id: 45,
    name: "2 queijos Media",
    price: "30.99",
    likes: null,
    created_by: 1,
    status: true,
    tbl_pizza: [
      {
        id: 38,
        product_id: 45,
        pizza_type_id: 2,
        tbl_pizza_ingredient: [
          {
            id: 43,
            ingredient_id: 8,
            pizza_id: 38,
            tbl_ingredient: { name: "leite", id: 8 },
          },
          {
            id: 44,
            ingredient_id: 9,
            pizza_id: 38,
            tbl_ingredient: { name: "farinha", id: 9 },
          },
          {
            id: 46,
            ingredient_id: 7,
            pizza_id: 38,
            tbl_ingredient: { name: "tomate", id: 7 },
          },
        ],
        tbl_pizza_stuffing: [{ id: 37, pizza_id: 38, stuffing_id: 3 }],
        tbl_pizza_type: {
          id: 2,
          name: "Media",
          dimensions: "30x30",
          status: true,
        },
      },
    ],
    tbl_product_pictures: [
      {
        id: 29,
        product_id: 45,
        picture_id: 32,
        tbl_picture: {
          id: 32,
          picture_link:
            "https://storage.googleapis.com/senai-pizzaria.appspot.com/1669809239848.webp",
        },
      },
    ],
  },
  {
    id: 46,
    name: "2 queijos Media",
    price: "30.99",
    likes: null,
    created_by: 1,
    status: true,
    tbl_pizza: [
      {
        id: 39,
        product_id: 46,
        pizza_type_id: 2,
        tbl_pizza_ingredient: [
          {
            id: 47,
            ingredient_id: 8,
            pizza_id: 39,
            tbl_ingredient: { name: "leite", id: 8 },
          },
          {
            id: 48,
            ingredient_id: 7,
            pizza_id: 39,
            tbl_ingredient: { name: "tomate", id: 7 },
          },
          {
            id: 50,
            ingredient_id: 9,
            pizza_id: 39,
            tbl_ingredient: { name: "farinha", id: 9 },
          },
        ],
        tbl_pizza_stuffing: [{ id: 38, pizza_id: 39, stuffing_id: 3 }],
        tbl_pizza_type: {
          id: 2,
          name: "Media",
          dimensions: "30x30",
          status: true,
        },
      },
    ],
    tbl_product_pictures: [
      {
        id: 30,
        product_id: 46,
        picture_id: 33,
        tbl_picture: {
          id: 33,
          picture_link:
            "https://storage.googleapis.com/senai-pizzaria.appspot.com/1669809521283.webp",
        },
      },
    ],
  },
  {
    id: 47,
    name: "2 queijos Media",
    price: "30.99",
    likes: null,
    created_by: 1,
    status: true,
    tbl_pizza: [
      {
        id: 40,
        product_id: 47,
        pizza_type_id: 2,
        tbl_pizza_ingredient: [
          {
            id: 51,
            ingredient_id: 8,
            pizza_id: 40,
            tbl_ingredient: { name: "leite", id: 8 },
          },
          {
            id: 53,
            ingredient_id: 9,
            pizza_id: 40,
            tbl_ingredient: { name: "farinha", id: 9 },
          },
          {
            id: 54,
            ingredient_id: 7,
            pizza_id: 40,
            tbl_ingredient: { name: "tomate", id: 7 },
          },
        ],
        tbl_pizza_stuffing: [{ id: 39, pizza_id: 40, stuffing_id: 3 }],
        tbl_pizza_type: {
          id: 2,
          name: "Media",
          dimensions: "30x30",
          status: true,
        },
      },
    ],
    tbl_product_pictures: [
      {
        id: 31,
        product_id: 47,
        picture_id: 34,
        tbl_picture: {
          id: 34,
          picture_link:
            "https://storage.googleapis.com/senai-pizzaria.appspot.com/1669809549030.webp",
        },
      },
    ],
  },
  {
    id: 48,
    name: "2 queijos Media",
    price: "30.99",
    likes: null,
    created_by: 1,
    status: true,
    tbl_pizza: [
      {
        id: 41,
        product_id: 48,
        pizza_type_id: 2,
        tbl_pizza_ingredient: [
          {
            id: 55,
            ingredient_id: 8,
            pizza_id: 41,
            tbl_ingredient: { name: "leite", id: 8 },
          },
          {
            id: 56,
            ingredient_id: 9,
            pizza_id: 41,
            tbl_ingredient: { name: "farinha", id: 9 },
          },
          {
            id: 57,
            ingredient_id: 7,
            pizza_id: 41,
            tbl_ingredient: { name: "tomate", id: 7 },
          },
        ],
        tbl_pizza_stuffing: [{ id: 40, pizza_id: 41, stuffing_id: 3 }],
        tbl_pizza_type: {
          id: 2,
          name: "Media",
          dimensions: "30x30",
          status: true,
        },
      },
    ],
    tbl_product_pictures: [
      {
        id: 32,
        product_id: 48,
        picture_id: 35,
        tbl_picture: {
          id: 35,
          picture_link:
            "https://storage.googleapis.com/senai-pizzaria.appspot.com/1669809763788.webp",
        },
      },
    ],
  },
  {
    id: 49,
    name: "2 queijos Media",
    price: "30.99",
    likes: null,
    created_by: 1,
    status: true,
    tbl_pizza: [
      {
        id: 42,
        product_id: 49,
        pizza_type_id: 2,
        tbl_pizza_ingredient: [
          {
            id: 60,
            ingredient_id: 8,
            pizza_id: 42,
            tbl_ingredient: { name: "leite", id: 8 },
          },
          {
            id: 61,
            ingredient_id: 7,
            pizza_id: 42,
            tbl_ingredient: { name: "tomate", id: 7 },
          },
          {
            id: 62,
            ingredient_id: 9,
            pizza_id: 42,
            tbl_ingredient: { name: "farinha", id: 9 },
          },
        ],
        tbl_pizza_stuffing: [{ id: 41, pizza_id: 42, stuffing_id: 3 }],
        tbl_pizza_type: {
          id: 2,
          name: "Media",
          dimensions: "30x30",
          status: true,
        },
      },
    ],
    tbl_product_pictures: [
      {
        id: 33,
        product_id: 49,
        picture_id: 36,
        tbl_picture: {
          id: 36,
          picture_link:
            "https://storage.googleapis.com/senai-pizzaria.appspot.com/1669809785527.webp",
        },
      },
    ],
  },
  {
    id: 50,
    name: "2 queijos Media",
    price: "30.99",
    likes: null,
    created_by: 1,
    status: true,
    tbl_pizza: [
      {
        id: 43,
        product_id: 50,
        pizza_type_id: 2,
        tbl_pizza_ingredient: [
          {
            id: 63,
            ingredient_id: 9,
            pizza_id: 43,
            tbl_ingredient: { name: "farinha", id: 9 },
          },
          {
            id: 64,
            ingredient_id: 8,
            pizza_id: 43,
            tbl_ingredient: { name: "leite", id: 8 },
          },
          {
            id: 65,
            ingredient_id: 7,
            pizza_id: 43,
            tbl_ingredient: { name: "tomate", id: 7 },
          },
        ],
        tbl_pizza_stuffing: [{ id: 42, pizza_id: 43, stuffing_id: 3 }],
        tbl_pizza_type: {
          id: 2,
          name: "Media",
          dimensions: "30x30",
          status: true,
        },
      },
    ],
    tbl_product_pictures: [
      {
        id: 34,
        product_id: 50,
        picture_id: 37,
        tbl_picture: {
          id: 37,
          picture_link:
            "https://storage.googleapis.com/senai-pizzaria.appspot.com/1669811113119.webp",
        },
      },
    ],
  },
  {
    id: 51,
    name: "2 queijos Media",
    price: "30.99",
    likes: null,
    created_by: 1,
    status: true,
    tbl_pizza: [
      {
        id: 44,
        product_id: 51,
        pizza_type_id: 2,
        tbl_pizza_ingredient: [
          {
            id: 67,
            ingredient_id: 8,
            pizza_id: 44,
            tbl_ingredient: { name: "leite", id: 8 },
          },
          {
            id: 69,
            ingredient_id: 9,
            pizza_id: 44,
            tbl_ingredient: { name: "farinha", id: 9 },
          },
          {
            id: 70,
            ingredient_id: 7,
            pizza_id: 44,
            tbl_ingredient: { name: "tomate", id: 7 },
          },
        ],
        tbl_pizza_stuffing: [{ id: 43, pizza_id: 44, stuffing_id: 3 }],
        tbl_pizza_type: {
          id: 2,
          name: "Media",
          dimensions: "30x30",
          status: true,
        },
      },
    ],
    tbl_product_pictures: [
      {
        id: 35,
        product_id: 51,
        picture_id: 38,
        tbl_picture: {
          id: 38,
          picture_link:
            "https://storage.googleapis.com/senai-pizzaria.appspot.com/1669811945629.webp",
        },
      },
    ],
  },
  {
    id: 52,
    name: "2 queijos Media",
    price: "30.99",
    likes: null,
    created_by: 1,
    status: true,
    tbl_pizza: [
      {
        id: 45,
        product_id: 52,
        pizza_type_id: 2,
        tbl_pizza_ingredient: [
          {
            id: 71,
            ingredient_id: 9,
            pizza_id: 45,
            tbl_ingredient: { name: "farinha", id: 9 },
          },
          {
            id: 72,
            ingredient_id: 8,
            pizza_id: 45,
            tbl_ingredient: { name: "leite", id: 8 },
          },
          {
            id: 73,
            ingredient_id: 7,
            pizza_id: 45,
            tbl_ingredient: { name: "tomate", id: 7 },
          },
        ],
        tbl_pizza_stuffing: [{ id: 44, pizza_id: 45, stuffing_id: 3 }],
        tbl_pizza_type: {
          id: 2,
          name: "Media",
          dimensions: "30x30",
          status: true,
        },
      },
    ],
    tbl_product_pictures: [
      {
        id: 36,
        product_id: 52,
        picture_id: 39,
        tbl_picture: {
          id: 39,
          picture_link:
            "https://storage.googleapis.com/senai-pizzaria.appspot.com/1669813245779.webp",
        },
      },
    ],
  },
  {
    id: 53,
    name: "4 queijos Grande",
    price: "30.99",
    likes: null,
    created_by: 1,
    status: true,
    tbl_pizza: [
      {
        id: 46,
        product_id: 53,
        pizza_type_id: 3,
        tbl_pizza_ingredient: [
          {
            id: 91,
            ingredient_id: 9,
            pizza_id: 46,
            tbl_ingredient: { name: "farinha", id: 9 },
          },
          {
            id: 92,
            ingredient_id: 8,
            pizza_id: 46,
            tbl_ingredient: { name: "leite", id: 8 },
          },
          {
            id: 93,
            ingredient_id: 7,
            pizza_id: 46,
            tbl_ingredient: { name: "tomate", id: 7 },
          },
        ],
        tbl_pizza_stuffing: [{ id: 45, pizza_id: 46, stuffing_id: 1 }],
        tbl_pizza_type: {
          id: 3,
          name: "Grande",
          dimensions: "40x40",
          status: true,
        },
      },
    ],
    tbl_product_pictures: [
      {
        id: 37,
        product_id: 53,
        picture_id: 40,
        tbl_picture: {
          id: 40,
          picture_link:
            "https://storage.googleapis.com/senai-pizzaria.appspot.com/1669813764978.webp",
        },
      },
    ],
  },
  {
    id: 54,
    name: "4 queijos Grande",
    price: "30.99",
    likes: null,
    created_by: 1,
    status: true,
    tbl_pizza: [
      {
        id: 47,
        product_id: 54,
        pizza_type_id: 3,
        tbl_pizza_ingredient: [
          {
            id: 111,
            ingredient_id: 8,
            pizza_id: 47,
            tbl_ingredient: { name: "leite", id: 8 },
          },
          {
            id: 113,
            ingredient_id: 9,
            pizza_id: 47,
            tbl_ingredient: { name: "farinha", id: 9 },
          },
          {
            id: 114,
            ingredient_id: 7,
            pizza_id: 47,
            tbl_ingredient: { name: "tomate", id: 7 },
          },
        ],
        tbl_pizza_stuffing: [{ id: 46, pizza_id: 47, stuffing_id: 1 }],
        tbl_pizza_type: {
          id: 3,
          name: "Grande",
          dimensions: "40x40",
          status: true,
        },
      },
    ],
    tbl_product_pictures: [
      {
        id: 38,
        product_id: 54,
        picture_id: 41,
        tbl_picture: {
          id: 41,
          picture_link:
            "https://storage.googleapis.com/senai-pizzaria.appspot.com/1669817227456.webp",
        },
      },
    ],
  },
  {
    id: 55,
    name: "4 queijos Grande",
    price: "30.99",
    likes: null,
    created_by: 1,
    status: true,
    tbl_pizza: [
      {
        id: 48,
        product_id: 55,
        pizza_type_id: 3,
        tbl_pizza_ingredient: [
          {
            id: 115,
            ingredient_id: 9,
            pizza_id: 48,
            tbl_ingredient: { name: "farinha", id: 9 },
          },
          {
            id: 116,
            ingredient_id: 7,
            pizza_id: 48,
            tbl_ingredient: { name: "tomate", id: 7 },
          },
          {
            id: 117,
            ingredient_id: 8,
            pizza_id: 48,
            tbl_ingredient: { name: "leite", id: 8 },
          },
        ],
        tbl_pizza_stuffing: [{ id: 47, pizza_id: 48, stuffing_id: 1 }],
        tbl_pizza_type: {
          id: 3,
          name: "Grande",
          dimensions: "40x40",
          status: true,
        },
      },
    ],
    tbl_product_pictures: [
      {
        id: 39,
        product_id: 55,
        picture_id: 42,
        tbl_picture: {
          id: 42,
          picture_link:
            "https://storage.googleapis.com/senai-pizzaria.appspot.com/1669817274193.webp",
        },
      },
    ],
  },
  {
    id: 56,
    name: "Chocolate grande",
    price: "39.99",
    likes: null,
    created_by: 1,
    status: true,
    tbl_pizza: [
      {
        id: 49,
        product_id: 56,
        pizza_type_id: 3,
        tbl_pizza_ingredient: [
          {
            id: 121,
            ingredient_id: 9,
            pizza_id: 49,
            tbl_ingredient: { name: "farinha", id: 9 },
          },
          {
            id: 122,
            ingredient_id: 11,
            pizza_id: 49,
            tbl_ingredient: { name: "morango", id: 11 },
          },
          {
            id: 123,
            ingredient_id: 12,
            pizza_id: 49,
            tbl_ingredient: { name: "m&m", id: 12 },
          },
          {
            id: 124,
            ingredient_id: 10,
            pizza_id: 49,
            tbl_ingredient: { name: "chocolate", id: 10 },
          },
        ],
        tbl_pizza_stuffing: [{ id: 48, pizza_id: 49, stuffing_id: 4 }],
        tbl_pizza_type: {
          id: 3,
          name: "Grande",
          dimensions: "40x40",
          status: true,
        },
      },
    ],
    tbl_product_pictures: [
      {
        id: 40,
        product_id: 56,
        picture_id: 43,
        tbl_picture: {
          id: 43,
          picture_link:
            "https://storage.googleapis.com/senai-pizzaria.appspot.com/1669817478116.webp",
        },
      },
    ],
  },
  {
    id: 57,
    name: "Coca-Cola",
    price: "7.99",
    likes: null,
    created_by: 1,
    status: true,
    tbl_drink: [
      {
        id: 5,
        volume: 350,
        product_id: 57,
        drink_type_id: 1,
        tbl_drink_type: { id: 1, name: "Refrigerante", status: true },
      },
    ],
    tbl_product_pictures: [
      {
        id: 41,
        product_id: 57,
        picture_id: 44,
        tbl_picture: {
          id: 44,
          picture_link:
            "https://storage.googleapis.com/senai-pizzaria.appspot.com/1669929293781.webp",
        },
      },
    ],
  },
  {
    id: 58,
    name: "Coca-Cola",
    price: "7.99",
    likes: null,
    created_by: 1,
    status: true,
    tbl_drink: [
      {
        id: 6,
        volume: 350,
        product_id: 58,
        drink_type_id: 5,
        tbl_drink_type: { id: 5, name: "Alcoolico", status: true },
      },
    ],
    tbl_product_pictures: [
      {
        id: 42,
        product_id: 58,
        picture_id: 46,
        tbl_picture: {
          id: 46,
          picture_link:
            "https://storage.googleapis.com/senai-pizzaria.appspot.com/1669983912645.jpeg",
        },
      },
    ],
  },
  {
    id: 59,
    name: "Coca-Cola",
    price: "7.99",
    likes: null,
    created_by: 1,
    status: true,
    tbl_drink: [
      {
        id: 7,
        volume: 350,
        product_id: 59,
        drink_type_id: 5,
        tbl_drink_type: { id: 5, name: "Alcoolico", status: true },
      },
    ],
    tbl_product_pictures: [
      {
        id: 43,
        product_id: 59,
        picture_id: 47,
        tbl_picture: {
          id: 47,
          picture_link:
            "https://storage.googleapis.com/senai-pizzaria.appspot.com/1669984377362.jpeg",
        },
      },
    ],
  },
  {
    id: 60,
    name: "Coca-Cola",
    price: "7.99",
    likes: null,
    created_by: 1,
    status: true,
    tbl_drink: [
      {
        id: 8,
        volume: 350,
        product_id: 60,
        drink_type_id: 5,
        tbl_drink_type: { id: 5, name: "Alcoolico", status: true },
      },
    ],
    tbl_product_pictures: [
      {
        id: 44,
        product_id: 60,
        picture_id: 48,
        tbl_picture: {
          id: 48,
          picture_link:
            "https://storage.googleapis.com/senai-pizzaria.appspot.com/1669984750812.jpeg",
        },
      },
    ],
  },
];

const products = teste


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
