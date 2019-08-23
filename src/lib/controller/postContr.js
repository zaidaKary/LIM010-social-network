import { userCurrent } from '../model/modelFirebase.js';
import { addPostFirebase } from '../model/modelPost.js';
import { db } from '../../main.js';
import { itemPost } from '../view/post-view.js';

// Guarda los datos en la bd
export const textPost = (txtpublicacion) => {
  const auth = firebase.auth();
  return auth.onAuthStateChanged((user) => {
    if(user){
      addPostFirebase(userCurrent().email, txtpublicacion)
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
// Juntando todos los comentarios en un push
// export const savePost = (callback) => {
//   event.defaultPrevented();
//   db.collection('posts')
//     .onSnapshot((querySnapshot) => {
//       const comment = [];
//       querySnapshot.forEach((doc) => {
//         comment.push(doc.data());
//         itemPost(comment);
//       });
//     });
// };


