import { db } from '../../main.js';

export const addPostFirebase = (email, textPost,idPost) => db.collection('posts').add({
  email,
  textPost,
  idPost
});

export const deletePost = (idPost) => db.collection('posts').doc(idPost).delete();
