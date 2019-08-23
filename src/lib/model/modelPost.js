import { db } from '../../main.js';

export const addPostFirebase = (email, textPost,id) => db.collection('posts').add({
  email,
  textPost,
  id
});

// export const deletePosts = () => db.collection('posts').doc(id).delete();
