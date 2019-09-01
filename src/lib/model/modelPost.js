export const addPostFirebase = (email, textPost, idPost, date, typePost) => firebase.firestore().collection('posts').add({
  email,
  textPost,
  idPost,
  date,
  typePost,
});
export const deletePost = iduser => firebase.firestore().collection('posts').doc(iduser).delete();
export const editPost = (idPost, publicacion) => firebase.firestore().collection('posts').doc(idPost).update({
  textPost: publicacion,
});
export const privacyPost = (idPost, typePost) => firebase.firestore().collection('posts').doc(idPost).update({
  typePost,
});
export const addLikeDb = (iduser, idPost, email) => firebase.firestore().collection('posts').doc(idPost).collection('likes')
  .doc(iduser)
  .set({
    iduser,
    idPost,
    email,
  });
export const deleteLikeDb = (iduser, idPost) => firebase.firestore().collection('posts').doc(idPost).collection('likes')
  .doc(iduser)
  .delete();
export const getLike = (idPost, callback) => {
  firebase.firestore().collection('posts').doc(idPost).collection('likes')
    .onSnapshot((querySnapshot) => {
      const likes = [];
      querySnapshot.forEach((doc) => {
        likes.push({ id: doc.id, ...doc.data() });
      });
      callback(likes);
      console.log(likes);
    });
};
