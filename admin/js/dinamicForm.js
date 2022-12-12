import { api } from '../../api/api.js';
import { fetchTypes } from './utils/register.js';

const form = document.querySelector('fieldset');
// const buttonSendFormData = document.querySelector('.button_cadastro');

const fetchCategory = async (divToAppend) => {
  try {
    const { data } = await api.get('/category');

    data.payload.forEach((type) => {
      const option = document.createElement('option');
      option.value = type.name;
      option.textContent = type.name;

      divToAppend.appendChild(option);
    });
  } catch (e) {
    console.log('Ops! Houve um erro!', e);
  }
};

export const dinamicForm = async (option) => {
  if (option === 'new_user') {
    form.innerHTML = `
        <input class="input-string" name="name" type="text" placeholder="Name">
        <input class="input-string" name="email" type="email" placeholder="E-mail">
        <input class="input-string" name="cellphone" type="tel" placeholder="Telefone">
        <input class="input-string" name="password" type="password" placeholder="Password">
        `;
  }

  if (option === 'new_product') {
    const fileInput = document.querySelector('#imagem');
    fileInput.name = 'picture';

    form.innerHTML = `
        <input class="input-string" name="stuffing" type="text" placeholder="Recheio">
        <select name="categoria"  id="category-select" onchange="{fetchTypes(this ,document.querySelector('#type-select'))}">
            <option disabled selected value="pizza">Categoria</option>
        </select>
        <select name="type" id="type-select">
            <option disabled selected>Type</option>
        </select>
        <input class="input-string" name="price" type="number" placeholder="Price" step="0.50">
        <ul class="outer-box" style="list-style: none">
            <span class="title_ingredients">Ingredientes</span>
            <li style="margin-top: 10px">
                <div class="ingredient-box">
                    <input class="ingredient-box" type="checkbox" name="ingredient" id="1" value="Queijo">
                    <label for="1">Queijo</label>
                </div>
               
            </li>
        </ul>
        <div class="promo-option">
            <input type="checkbox" name="" id="promo-input">
            <label id="promo-label" for="promo-input">Desconto</label>
        </div>
        <input name="saleOffValue" type="number" placeholder="%" class="input-string" style="visibility: hidden" value="0">
        `;

    const promoOption = document.querySelector('input[id="promo-input"]');
    const divToAppend = document.querySelector('.promo-option');

    promoOption.addEventListener('click', () => {
      const input = document.querySelector('input[name="saleOffValue"]');
      if (promoOption.checked) {
        input.style.visibility = 'visible';
        input.value = '';
      } else {
        input.style.visibility = 'hidden';
        input.value = 0;
      }
    });

    const category = document.querySelector('#category-select');
    await fetchCategory(category);

    // buttonSendFormData.addEventListener('click', handleClick(e));
  }
};
