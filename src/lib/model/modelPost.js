import { db } from '../../main.js';

// Agrega el post en la bd
export const addPostFirebase = (email, textPost) => db.collection('posts').add({
  email,
  textPost
});