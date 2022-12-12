import { dinamicForm } from '../dinamicForm.js';
import { api } from '../../../api/api.js';

const options = document.querySelectorAll('input[name="option"]');
const button = document.querySelector('.button_cadastro');
const form = document.querySelector('.main__form__form');
let selectedOption = 'new_user';

for (const option of options) {
  option.addEventListener('click', (e) => {
    selectedOption = option.value;
    dinamicForm(selectedOption);
  });
}

export const getCheckInputsValues = (inputs = []) => {
  const values = [];

  inputs.forEach((input) => {
    if (input.checked) values.push(input.value);
  });

  return values;
};

const getFormData = () => new FormData(form);

const handleClick = async () => {
  if (selectedOption === 'new_user') {
    const formData = getFormData();

    for (const pair of formData.entries()) {
      console.log(`${pair[0]}, ${pair[1]}`);
    }

    try {
      const response = await api.post('/user/register', formData);
      swal('Parabens!', 'Usuário criado com sucesso!', 'success');
      return response;
    } catch (e) {
      swal('Oops!', 'Something went wrong!', 'error');
    }
  }
  if (selectedOption === 'new_product') {
    console.log(getCheckInputsValues(document.querySelectorAll('.ingredient-box')));
  }
};

export const fetchTypes = async (categoryInput, divToAppend) => {
  try {
    console.log('a');
    const typeSelected = categoryInput.value;
    const { data } = await api.get(`/${typeSelected}/types`);

    // TODO: arrumar o problema de onChange presente no input de categorias.

    data.payload.forEach((type) => {
      const option = document.createElement('option');
      option.value = type.name;
      option.textContent = type.name;

      divToAppend.appendChild(option);
    });
  } catch (e) {
    console.log(e);
  }
};

button.addEventListener('click', handleClick);
