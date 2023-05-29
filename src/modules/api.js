import ui from './ui.js';
import resBtn from './reservation.js';

const id = 'tKVlvnEbmf4TMWB77SE7';
const urlMealrecipe = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';
const urlAllMeals = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood';
const invApiUrl = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${id}/likes`;
export const ides = ['52959', '52819', '52944', '53043', '52802', '52918'];

const getLikes = async () => {
  try {
    const allLikes = await fetch(invApiUrl, {
      method: 'Get',
    });
    return allLikes.json();
  } catch (error) {
    return error;
  }
};

const postReservations = async (data) => {
  let reservation = '';
  try {
    reservation = await fetch(
      'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/tKVlvnEbmf4TMWB77SE7/reservations/',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      },
    );
    // eslint-disable-next-line no-empty
  } catch (error) {}
  return reservation;
};

const getReservations = async (id) => {
  const ID = id.toString();
  try {
    const reservation = await fetch(
      `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/tKVlvnEbmf4TMWB77SE7/reservations?item_id=${ID}`,
      {
        method: 'Get',
      },
    );
    const res = await reservation.json();
    return res;
  } catch (error) {
    return error;
  }
};

const getStrInstruction = async (id) => {
  const ID = id.toString();
  try {
    const reservation = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${ID}`,
      {
        method: 'Get',
      },
    );
    const res = await reservation.json();
    return res.meals[0];
  } catch (error) {
    return error;
  }
};

const getMealsInfo = async () => {
  const allMeals = await fetch(urlAllMeals, {
    method: 'Get',
  });
  const likes = await getLikes();
  const meals = await allMeals.json();
  ui(meals.meals, likes);
  resBtn(meals.meals);
};

const addLike = async (index) => {
  try {
    const userPost = await fetch(invApiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        item_id: `${ides[index]}`,
      }),
    });
    return userPost;
  } catch (error) {
    return error;
  }
};

const getRecipe = async (id) => {
  const url = urlMealrecipe + id;
  const comments = await fetch(url, {
    method: 'Get',
  });
  const commentsResponse = await comments.json();
  return commentsResponse;
};

const getComment = async (id) => {
  const comments = await fetch(
    `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/tKVlvnEbmf4TMWB77SE7/comments?item_id=${id}`,
    {
      method: 'Get',
    },
  );
  const commentsResponse = await comments.json();
  return commentsResponse;
};

export {
  getComment,
  getRecipe,
  postReservations,
  getReservations,
  getStrInstruction,
  getMealsInfo,
  addLike,
  getLikes,
};
