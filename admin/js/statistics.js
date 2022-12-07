const infosContainer = document.querySelector('.grid-content__insights-container');

const createInfoCard = (title, number) => {
  const div = document.createElement('div');
  div.classList.add('grid-content__insight-container');
  const h3 = document.createElement('h3');
  h3.textContent = title;
  const span = document.createElement('span');
  span.textContent = number;
  span.classList.add('number');
};

const fetchAPI = () => {

};
