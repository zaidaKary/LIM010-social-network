import { db } from '../../main.js';

export const addPostFirebase = (email, textPost, idPost, date) => db.collection('posts').add({
  email,
  textPost,
  idPost,
  date,
});
export const deletePost = (iduser) => db.collection('posts').doc(iduser).delete();
export const editPost = (idPost, publicacion) => db.collection('posts').doc(idPost).update({
  textPost: publicacion,
});
export const privacyPost = (idPost, typePost) => db.collection('posts').doc(idPost).update({
  typePost: typePost,
  });