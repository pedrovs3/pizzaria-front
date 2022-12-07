import { api } from '../../../api/api.js';

const formInputs = document.querySelectorAll('.main-container-login__form-group input');
const buttonSubmit = document.querySelector('.main-container-login__login-button');
// const formData = new FormData(form);

// BASE URL = https://pizza-cms-api.netlify.app/.netlify/functions/server/

const getFormData = () => {
  const json = {};

  formInputs.forEach((input) => {
    if (input.name === 'email') json.email = input.value;
    if (input.name === 'password') json.password = input.value;
  });

  return json;
};

const checkLogin = async () => {
  const json = getFormData();

  console.log(JSON.stringify(json));

  try {
    const { data } = await api.post('/user/login', { ...json });
    const { token } = data.payload;

    api.defaults.headers.common.Authorization = `Bearer ${token}`;

    return data;
  } catch (e) {
    return e.response.data;
  }
};

const handleClick = async (e) => {
  try {
    const data = await checkLogin();
    if (!data.error) {
      location.href = './pages/CMS/main_dashboard.html';
    } else {
      alert(data.message);
      location.reload();
    }
  } catch (err) {
    console.log(e);
  }
};

buttonSubmit.addEventListener('click', handleClick);
