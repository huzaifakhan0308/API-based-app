const commentUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/tKVlvnEbmf4TMWB77SE7/comments?item_id=';
const commentDisplay = async (id) => {
  const url = commentUrl + id;
  const response = await fetch(url, {
    method: 'Get',
  });
  const comments = await response.json();
  const div = document.createElement('div');
  comments.forEach((element) => {
    const p = document.createElement('p');
    p.innerHTML = `${element.creation_date}  ${element.username}: ${element.comment}`;
    div.appendChild(p);
  });
  return div;
};

export default commentDisplay;