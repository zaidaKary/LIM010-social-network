import { userCurrent } from '../model/modelFirebase.js';
import { addPostFirebase } from '../model/modelPost.js';
import { db } from '../../main.js';


// Guarda los datos en la bd
export const textPost = (txtpublicacion) => {
  const auth = firebase.auth();
  return auth.onAuthStateChanged((user) => {
    if (user) {
      addPostFirebase(userCurrent().email, txtpublicacion,userCurrent().uid)
        .then((res) => {
          document.querySelector('#publicacion').value = "";// limpia publicacion
          console.log('Document written with ID: ', res.id);
        })
        .catch(() => {
          // console.error('Error adding document: ', error);
        });
    }
  });
};
// Juntando todos los comentarios 
export const savePost = (callback = () => { }) => {
  db.collection('posts')
    .onSnapshot((querySnapshot) => {
      // const comments = [];
      querySnapshot.forEach((doc) => {
        //comments.push(doc.data());
        callback(doc.data());
      });
    });
};


