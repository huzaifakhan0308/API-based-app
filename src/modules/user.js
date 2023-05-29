import { getComment, getMealsInfo, addLike } from './api.js';
import getRecipe from './commentpopup.js';
import commentDisplay from './commentdisplay.js';

const meals = document.querySelector('.meals');
window.addEventListener('load', () => {
  getMealsInfo();
});

meals.addEventListener('click', async (e) => {
  // trash icon
  if (e.target.closest('.like-icon')) {
    const likeText = e.target.closest('.like-icon').nextElementSibling;
    const likeIcon = e.target.closest('.like-icon');
    const { id } = likeText;
    addLike(id);
    const likeNbr = parseInt(likeText.innerHTML, 10) + 1;
    likeText.innerHTML = `${likeNbr} likes`;
    likeIcon.className = 'fa fa-heart';
  }
});

meals.addEventListener('click', (e) => {
  if (e.target.closest('.comBtn')) {
    const btn = e.target;
    const { id } = btn;
    getComment(id);
    getRecipe(id);
    commentDisplay(id);
  }
});
