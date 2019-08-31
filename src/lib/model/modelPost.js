

export const addPostFirebase = (email, textPost, idPost, date, typePost) => firebase.firestore().collection('posts').add({
  email,
  textPost,
  idPost,
  date,
  typePost,
});
export const deletePost = (iduser) => firebase.firestore().collection('posts').doc(iduser).delete();
export const editPost = (idPost, publicacion) => firebase.firestore().collection('posts').doc(idPost).update({
  textPost: publicacion,
});
export const privacyPost = (idPost, typePost) => firebase.firestore().collection('posts').doc(idPost).update({
  typePost: typePost,
  });
export const addLikeDb = (iduser, idPost, email) => firebase.firestore().collection('posts').doc(idPost).collection('likes').doc(iduser)
  .set({
    iduser: iduser,
    idPost: idPost,
    email,
  });
export const deleteLikeDb = (iduser, idPost) => firebase.firestore().collection('posts').doc(idPost).collection('likes').doc(iduser)
  .delete();
export const showLikeDb = (idPost) => firebase.firestore().collection('post').doc(idPost).collection('likes');
