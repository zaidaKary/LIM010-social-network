import { db } from '../../main.js';

export const addPostFirebase = (email, post) => {
    db.collection('post').add({
     post: post,
     email: email,
  });
};
