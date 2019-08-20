import { userCurrent } from '../model/modelLoginFirebase.js';
import { addPostFirebase } from '../model/modelPost.js';
import { db } from '../../main.js';

export const savePost = (event) => {
  event.preventDefault();
  const notePost = document.querySelector('#publicacion').value;
  console.log(notePost);
  const user = userCurrent();
  addPostFirebase(notePost, user) // pinta en el home
    .then(() => {
      // console.log('Document written with ID: ', docRef.id);
    })
    .catch(() => {
      console.error('Error adding document: ', error);

    });

  const postCreados = document.getElementById('listOfPos');
  db.collection('post').onSnapshot((querySnapshot) => {
    postCreados.innerHTML = '';
    querySnapshot.forEach((doc) => {
      console.log(doc.data());
      // doc.data() is never undefined for query doc snapshots
      postCreados.innerHTML += `
            <tr>
            <th scope="col">${doc.id}</th>
            <th scope="col">${doc.data().notes}</th>
            <td id = "delete-post"><button id="${doc.id}" name="delete" class="compartir" >Eliminar</button></td>
          </tr>`;

    });
  });
};


export const deletePost = (id) => {
  deletePostFirebase(id)
    .then(() => {
      // console.log('Document written with ID: ', docRef.id);
    }).catch(() => {
      console.error('Error adding document: ', error);
    });
};