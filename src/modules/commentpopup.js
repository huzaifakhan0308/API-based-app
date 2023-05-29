const popupContent = document.querySelector('.popupcontent');
const popup = document.getElementById('popup');
const urlMealrecipe = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';
const getRecipe = async (id) => {
  const url = urlMealrecipe + id;
  const comments = await fetch(url, {
    method: 'Get',
  });
  const meal = await comments.json();
  popupContent.innerHTML = '';
  const closeBtn = document.createElement('i');
  closeBtn.className = 'closeBtn fa fa-times fa-4x';
  closeBtn.id = meal.meals[0].idMeal;
  popupContent.appendChild(closeBtn);
  const popupbg = document.createElement('div');
  popupbg.className = 'popupbg';
  const image = document.createElement('img');
  const src = meal.meals[0].strMealThumb;
  image.className = 'img-large';
  image.src = src;
  popupContent.appendChild(image);
  const heading = document.createElement('h3');
  heading.className = 'heading';
  heading.innerHTML = meal.meals[0].strMeal;
  popupContent.appendChild(heading);
  const detailDiv = document.createElement('div');
  detailDiv.className = 'detail-flex';
  popupContent.appendChild(detailDiv);
  const areaP = document.createElement('p');
  areaP.className = 'detailstyle';
  areaP.innerHTML = `Area:    ${meal.meals[0].strArea}`;
  const paragraph = document.createElement('p');
  paragraph.className = 'recipe';
  paragraph.innerHTML = meal.meals[0].strInstructions;
  popupContent.appendChild(paragraph);
  const categoryP = document.createElement('p');
  categoryP.className = 'detailstyle';
  categoryP.innerHTML = `Category:   ${meal.meals[0].strCategory}`;
  detailDiv.appendChild(areaP);
  detailDiv.appendChild(categoryP);
  const subHeading = document.createElement('h4');
  subHeading.className = 'subheading';
  subHeading.innerHTML = 'Comments';
  popupContent.appendChild(subHeading);
  const commentsDiv = document.createElement('div');
  commentsDiv.id = 'commentDiv';
  popupContent.appendChild(commentsDiv);
  const subHeading2 = document.createElement('h4');
  subHeading2.className = 'subheading2';
  subHeading2.innerHTML = 'Add A Comment';
  popupContent.appendChild(subHeading2);
  const formDiv = document.createElement('div');
  formDiv.className = 'form-div';
  const form = document.createElement('form');
  form.setAttribute('method', 'post');
  const commentName = document.createElement('input');
  commentName.className = 'inputstyle';
  commentName.setAttribute('type', 'text');
  commentName.setAttribute('id', 'commentname');
  commentName.setAttribute('placeholder', 'Your Name');
  const commentText = document.createElement('input');
  commentText.setAttribute('type', 'textarea');
  commentText.setAttribute('id', 'commentsubject');
  commentText.setAttribute('placeholder', 'Your Insights');
  commentText.className = 'inputstyle commentText';
  const submitBtn = document.createElement('input');
  submitBtn.setAttribute('type', 'submit');
  submitBtn.setAttribute('value', 'Submit');
  submitBtn.className = 'submitBtn';
  form.appendChild(commentName);
  form.appendChild(commentText);
  form.appendChild(submitBtn);
  formDiv.appendChild(form);
  popupContent.appendChild(formDiv);
  document.body.appendChild(popupbg);
  popup.style.display = 'block';
  popupbg.style.display = 'block';
  closeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    popup.style.display = 'none';
    popupbg.style.display = 'none';
  });
  // const displayedcomments = commentDisplay(id);
  // console.log(displayedcomments);
  const commentUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/tKVlvnEbmf4TMWB77SE7/comments?item_id=';
  const commentDisplay = async (id) => {
    const url = commentUrl + id;
    const response = await fetch(url, {
      method: 'Get',
    });
    const comments = await response.json();
    const div = document.createElement('div');
    div.className = 'commentdivstyle';
    comments.forEach((element) => {
      const p = document.createElement('p');
      p.classList = 'commentChild-P';
      p.innerHTML = `${element.creation_date}  ${element.username}: ${element.comment}`;
      div.appendChild(p);
    });
    subHeading.innerHTML = `Comments (${comments.length})`;
    commentsDiv.appendChild(div);
    subHeading.innerHTML = `Comments(${comments.length})`;
  };
  commentDisplay(id);
  const commentPost = async () => {
    const response = await fetch(
      'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/tKVlvnEbmf4TMWB77SE7/comments/',
      {
        method: 'Post',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          item_id: Number(id),
          username: commentName.value,
          comment: commentText.value,
        }),
      },
    );
    form.reset();
    getRecipe(id);
    return response;
  };
  submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (commentName.value !== '' || commentText.value !== '') {
      commentPost(id);
    }
  });
};
export default getRecipe;
