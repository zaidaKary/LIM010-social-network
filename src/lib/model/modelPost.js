import { db } from '../../main.js';

export const addPostFirebase = (email, textPost) => db.collection('post').add({
  email: email,
  textPost: textPost
});

export const deletePost = (idPost) => db.collection('post').doc(idPost).delete();

