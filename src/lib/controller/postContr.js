import { userCurrent } from '../model/modelFirebase.js';
import { addPostFirebase, deleteLikeDb, addLikeDb, editPost } from '../model/modelPost.js';
// import { db } from '../../main.js';

const allDatePost = (fullDate) => {
  const getDate = fullDate.getDate();
  const getMonth = fullDate.getMonth() + 1;
  const getFullYear = fullDate.getFullYear();

  const minutes = fullDate.getMinutes();
  const seconds = fullDate.getSeconds();
  const hours = fullDate.getHours();

  const day = `${getDate}/${getMonth}/${getFullYear}`;
  const myClock = `A las: ${hours}:${minutes}:${seconds}`;
  const date = `${day} ${myClock}`;
  return date;
};

export const textPost = () => {
  event.preventDefault();
  const allDate = new Date();
  const date = allDatePost(allDate);
  const txtpublicacion = document.getElementById('publicacion').value;
  const optionsPost = document.getElementById('options').value;
  addPostFirebase(userCurrent().email, txtpublicacion, userCurrent().uid, date, optionsPost) // pinta en el home
    .then(() => {
      document.querySelector('#publicacion').value = '';
      // console.log('Document written with ID: ', res.id);
    })
    .catch(() => {
      // console.error('Error adding document: ', error);.
    });
};
// muestra todos los post

/* likes */
export const deleteLikePost = (idPost) => {
  deleteLikeDb(userCurrent().uid, idPost)
    .then(() => {
    });
};

export const addLike = (idPost) => {
  addLikeDb(userCurrent().uid, idPost, userCurrent().email)
    .then(() => {
    });
};

export const actualizandoPost = (id, publicacion) => {
  editPost(id, publicacion);
};
