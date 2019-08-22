import { userCurrent } from '../model/modelFirebase.js';
import { addPostFirebase } from '../model/modelPost.js';
import { db } from '../../main.js';

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
  
export const savePost = (datapost) => {
  event.preventDefault();
  db.collection('posts')
    .onSnapshot((querySnapshot) => {
      querySnapshot.forEach((doc) => {        
        datapost({id: doc.id, ...doc.data()})
      });
    });
};