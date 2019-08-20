import { db } from '../../main.js';

export const addPostFirebase = (notePost, user) => {
  return db.collection('post').add({
    notes: notePost,
    user: user.uid
  });
};

// export const deletePostFirebase = (id) => {
//   return db.collection('post').doc(id).delete();
// };
