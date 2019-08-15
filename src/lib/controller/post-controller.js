import { db } from '../../main.js';

export const publicarPost = () => {
    //const email = document.getElementById('correo').value;
    const post = document.getElementById('new-post').value;
    //console.log(email);
    console.log(post);
     const userEmail = firebase.auth().currentUser.email;
    db.collection("post").add({
        [userEmail]: post
    })
        .then(function (docRef) {
           console.log("Document written with ID: ", docRef.id);
            //document.getElementById('correo').value = '';
            //document.getElementById('new-post').value = '';
        })
        .catch(function (error) {
            console.error("Error adding document: ", error);
        });
}

