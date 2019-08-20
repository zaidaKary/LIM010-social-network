import { userCurrent } from '../model/modelFirebase.js';
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

<<<<<<< HEAD
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
=======
    const postCreados = document.getElementById('listOfPos');
    db.collection('post').onSnapshot((querySnapshot) => {
        postCreados.innerHTML = '';
        querySnapshot.forEach((doc) => {
           
            // doc.data() is never undefined for query doc snapshots
            postCreados.innerHTML += `    
            <tr>
            <th scope="col">${doc.id}</th>
            <th scope="col">${doc.data().email}</th>
            <th scope="col">${doc.data().notes}</th>
            <td><button id="${doc.data().id}" name="delete" class="compartir" >Eliminar</button></td>
>>>>>>> 5ddc035d10a47551142fa2419ea170917e3dd996
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