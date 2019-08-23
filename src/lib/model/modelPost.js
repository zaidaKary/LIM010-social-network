import { db } from '../../main.js';

export const addPostFirebase = (email, textPost) => db.collection('posts').add({
  email: email,
  textPost: textPost
});

export const deletePost = (idPost) => db.collection('posts').doc(idPost).delete();