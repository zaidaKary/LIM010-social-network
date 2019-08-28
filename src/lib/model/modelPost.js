import { db } from '../../main.js';

export const addPostFirebase = (email, textPost, idPost) => db.collection('posts').add({ // agregamos datos en la colección
  email,
  textPost,
  idPost,

});

export const deletePost = (iduser) => db.collection('posts').doc(iduser).delete();
export const addLikeDb = (iduser, idPost, email) => db.collection('posts').doc(idPost).collection('likes').doc(iduser)
  .set({
    iduser: iduser,
    idPost: idPost,
    email,
  });
export const deleteLikeDb = (iduser, idPost) => db.collection('posts').doc(idPost).collection('likes').doc(iduser)
  .delete();
export const showLikeDb = (idPost) => db.collection('post').doc(idPost).collection('likes');


export const editPost = (idPost, publicacion) => db.collection('posts').doc(idPost).update({
  textPost: publicacion,
});
