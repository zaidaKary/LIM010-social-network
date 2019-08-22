import { userCurrent } from '../model/modelFirebase.js';
import { addPostFirebase } from '../model/modelPost.js';
import { db } from '../../main.js';
import { deletePost } from '../model/modelPost.js';

export const textPost = () => {
  event.preventDefault();
  document.querySelector('#publicacion').value;
  addPostFirebase(userCurrent().email, textPost) // pinta en el home
    .then((res) => {
      document.querySelector('#publicacion').value = "";

      console.log('Document written with ID: ', res.id);
    })
    .catch(() => {
      // console.error('Error adding document: ', error);
    });

}
export const savePost = (callback) => {
  event.preventDefault();
  db.collection('post')
    .onSnapshot((querySnapshot) => {
      const comment = [];
      querySnapshot.forEach((doc) => {
        comment.push({ id: doc.id, ...doc.data() });
        console.log(comment);
      });
      callback(comment);
    });
};

// Eliminando comentarios
export const deletePostSubmit = (textPost) => {
  if (userCurrent().uid === textPost.idUser) {
    deletePost(textPost.id)
  };
};


