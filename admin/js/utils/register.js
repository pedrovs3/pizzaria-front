import { dinamicForm } from '../dinamicForm.js';
import { api } from '../../../api/api.js';

const options = document.querySelectorAll('input[name="option"]');
const button = document.querySelector('.button_cadastro');
const form = document.querySelector('.main__form__form');
let selectedOption = 'new_user';

for (const option of options) {
  option.addEventListener('click', () => {
    selectedOption = option.value;
    dinamicForm(selectedOption);
  });
}

const getFormData = () => new FormData(form);

const handleClick = async () => {
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
};

button.addEventListener('click', handleClick);
