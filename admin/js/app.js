import { dinamicForm } from './dinamicForm.js';

const options = document.querySelectorAll('input[name="option"]');
const button = document.querySelector('.button_cadastro');
const form = document.querySelector('.main__form__form');
let selectedOption = 'new_user';

// Link baseAPI = https://pizza-cms-api.netlify.app/.netlify/functions/server/

for (const option of options) {
  option.addEventListener('click', () => {
    selectedOption = option.value;
    dinamicForm(selectedOption);
  });
}

const getFormData = () => new FormData(form);

button.addEventListener('click', () => {
  const formData = getFormData();
  console.log(formData);
});
