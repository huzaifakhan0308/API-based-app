import Object from './resObj.js';

const API = require('./api.js');

const popupContainer = document.querySelector('.container');
const resPageCloseBtn = document.querySelector('.reservation-page-close-btn');
const popupResImgDiv = document.querySelector('.popup-reservation-img-div');
const name = document.querySelector('.name');
const instruction = document.querySelector('.instructions');
const area = document.querySelector('.area');
const category = document.querySelector('.category');
const meals = document.querySelector('.meals');

const element = (data) => {
  document.querySelector('.reservations-div').innerHTML = '';
  if (Array.isArray(data)) {
    document.querySelector('.res-count').innerHTML = `(${data.length})`;
    data.forEach((element) => {
      const div = document.createElement('div');
      div.classList = 'reservations';
      const startDate = document.createElement('h4');
      startDate.innerHTML = element.date_start;
      const endDate = document.createElement('h4');
      endDate.innerHTML = `~${element.date_end}`;
      const name = document.createElement('h3');
      name.classList = 'byName';
      name.innerHTML = `by ${element.username}`;
      div.append(startDate, endDate, name);
      document.querySelector('.reservations-div').appendChild(div);
    });
  } else {
    document.querySelector('.res-count').innerHTML = '(0)';
  }
};

const nameInput = document.querySelector('.Your-name');
const startDate = document.querySelector('.start-date');
const endDate = document.querySelector('.end-date');

let index = '';

let array = [];

const resBtn = (data) => {
  array = data;
};

meals.addEventListener('click', async (event) => {
  if (event.target.className === 'resBtn') {
    nameInput.value = '';
    startDate.value = '';
    endDate.value = '';
    index = parseInt(event.target.parentElement.id, 10);
    const meals = await API.getStrInstruction(index);
    const ID = event.target.id;
    popupContainer.classList.add('container-appear');
    const resPageImg = new Image();
    resPageImg.src = array[ID].strMealThumb;
    popupResImgDiv.innerHTML = '';
    popupResImgDiv.append(resPageImg);
    name.innerHTML = array[ID].strMeal;
    area.innerHTML = `Area: ${meals.strArea}`;
    category.innerHTML = `Category: ${meals.strCategory}`;
    instruction.innerHTML = meals.strInstructions;
    const reservation = await API.getReservations(index);
    element(reservation);
  }
});

resPageCloseBtn.addEventListener('click', () => {
  popupContainer.classList.remove('container-appear');
});

document.querySelector('.form-btn').addEventListener('click', async () => {
  if (nameInput.value !== '' && startDate.value !== '' && endDate.value !== '') {
    const obj = new Object(
      index,
      nameInput.value,
      startDate.value,
      endDate.value,
    );
    await API.postReservations(obj);
    const reservation = await API.getReservations(index);
    element(reservation);
    nameInput.value = '';
    startDate.value = '';
    endDate.value = '';
  }
});

export default resBtn;
