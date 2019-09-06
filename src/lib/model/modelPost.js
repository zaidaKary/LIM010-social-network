export const addPostFirebase = (email, textPost, idPost, date, typePost) => firebase.firestore().collection('posts').add({
  email,
  textPost, 
  idPost,
  date,
  typePost,
});

export const getPost = (datapost) => {
  // event.preventDefault();
  firebase.firestore().collection('posts').orderBy('date', 'desc')
    .onSnapshot((querySnapshot) => {
      const array = [];
      querySnapshot.forEach((doc) => {
        array.push({ id: doc.id, ...doc.data() });
        console.log(array);
      });
      datapost(array);
    });
};
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
export const getLike = (idPost, contadorLikes, likesPintadosPost) => {
  firebase.firestore().collection('posts').doc(idPost).collection('likes')
    .onSnapshot((querySnapshot) => {
      
      const likes = [];
      querySnapshot.forEach((doc) => {
        likes.push({ id: doc.id, ...doc.data() });
      });
      contadorLikes(likes);
      likesPintadosPost(likes);
    });
};


export const addCommentPost = (iduser, idPost, email, comment) => {
  firebase.firestore().collection('posts').doc(idPost).collection('comments')
    .add({
      iduser,
      idPost,
      email,
      comment,
    });
};

export const getCommentPost = (idPost, pintarComentario) => {
  firebase.firestore().collection('posts').doc(idPost).collection('comments')
    .onSnapshot((querySnapshot) => {
      const comment = [];
      querySnapshot.forEach((doc) => {
        comment.push({ idPost, id: doc.id, ...doc.data() });
      });
      pintarComentario(comment);
    });
};
