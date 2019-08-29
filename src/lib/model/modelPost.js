import { db } from '../../main.js';

export const addPostFirebase = (email, textPost, idPost, date, typePost) => db.collection('posts').add({
  email,
  textPost,
  idPost,
  date,
  typePost,
});
export const deletePost = (iduser) => db.collection('posts').doc(iduser).delete();
export const editPost = (idPost, publicacion) => db.collection('posts').doc(idPost).update({
  textPost: publicacion,
});
export const privacyPost = (idPost, typePost) => db.collection('posts').doc(idPost).update({
  typePost: typePost,
  });
export const addLikeDb = (iduser, idPost, email) => db.collection('posts').doc(idPost).collection('likes').doc(iduser)
  .set({
    iduser: iduser,
    idPost: idPost,
    email,
  });
export const deleteLikeDb = (iduser, idPost) => db.collection('posts').doc(idPost).collection('likes').doc(iduser)
  .delete();
export const showLikeDb = (idPost) => db.collection('post').doc(idPost).collection('likes');

export const addComents = (textComents, idUser) => db.collection('posts').doc(idPost).collection('coments').doc(iduser)
.add({
  textComents,
  idUser,
})