const commentUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/tKVlvnEbmf4TMWB77SE7/comments?item_id=';
const calcom = async (id) => {
  try {
    const comments = await fetch(`${commentUrl}${id}`, {
      method: 'Get',
    });
    return comments.json();
  } catch (error) {
    return error;
  }
};
export default calcom;
