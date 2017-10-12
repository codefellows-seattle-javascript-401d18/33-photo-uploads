import superagent from 'superagent';

export const photoSet = photo => ({
  type:'PHOTO_SET',
  payload: photo,
});

export const photoCreate = photo => ({
  type:'PHOTO_CREATE',
  payload: photo,
});

export const photoUpdate = photo => ({
  type: 'PHOTO_UPDATE',
  payload: photo,
});

export const photoDelete = photo => ({
  type: 'PHOTO_DELETE',
  payload: photo,
});


export const photoFetchRequest = () => (dispatch, getState) => {
  let {auth} = getState();
  return superagent.get(`${__API_URL__}/photos/me`)
    .set('Authorization', `Bearer ${auth}`)
    .then(res => {
      dispatch(photoSet(res.body.data));
      return res;
    });
};

export const photoCreateRequest = (photo) => (dispatch, getState) => {
  let {auth} = getState();
  return superagent.post(`${__API_URL__}/photos`)
    .set('Authorization', `Bearer ${auth}`)
    .field('description', photo.description)
    .attach('photo', photo.photo)
    .then((res) => {
      dispatch(photoCreate(res.body));
      return res;
    });
};
