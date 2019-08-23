import { db } from '../../main.js';

export const addPostFirebase = (email, textPost,idPost) => db.collection('posts').add({
  email,
  textPost,
  idPost
});

export const deletePosts = (idpost) => db.collection('posts').doc(idpost).delete();
