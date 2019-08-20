import { userCurrent } from '../model/modelFirebase.js';
import { addPostFirebase } from '../model/modelPost.js';
import { db } from '../../main.js';

export const savePost = (event) => {
    event.preventDefault();
    const notePost = document.querySelector('#publicacion').value;
    console.log(notePost);
    const user = userCurrent();
    console.log(user);
    addPostFirebase(notePost, user) // pinta en el home
        .then(() => {
            // console.log('Document written with ID: ', docRef.id);
        })
        .catch(() => {
            console.error('Error adding document: ', error);
            userCorreo.value = doc.data().Email;
        });

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
          </tr>`;

        });
    });
};


export const deletePost = (id) => {
    //event.preventDefault();
    // const id = event.target.id;
    deletePostFirebase(id)
      .then(() => {
        // console.log('Document written with ID: ', docRef.id);
      }).catch(() => {
        console.error('Error adding document: ', error);
      });
  };