import { db } from './../../main.js';
export const publicarPost = () => {
  const post = document.getElementById('#new-post').value;
  console.log(post);
  
  db.collection("post").add({
    // [firebase.auth().currentUser.email]: post
    post:post
  })
      .then(function (docRef) {
          console.log("Document written with ID: ", docRef.id);
      })
      .catch(function (error) {
          console.error("Error adding document: ", error);
      });

const postCreado = document.getElementById('#listOfPost');
  db.collection('post').onSnapshot((querySnapshot) => {
    postCreado.innerHTML = '';
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data().UserName);
      postCreado.innerHTML += `
          <tr>
          <th scope="col">${[userEmail]}</th>
             <th scope="col">${post}</th>
             <th scope="col">${doc.id}</th>
             <th scope="col">${doc.data().UserName}</th>
          </tr>`;

    });
  });
};
















//   const post = document.getElementById('new-post').value;
//   console.log(post);
//   // const userEmail = firebase.auth().currentUser.email;
//   db.collection('post').add({
//     //  [userEmail]: post
//     post: post
//   })
//     .then((docRef) => {
//       console.log('Document written with ID: ', docRef.id);

//     })
//     .catch((error) => {
//       console.error('Error adding document: ', error);
//     });

//   const postCreado = document.getElementById('listOfPost');
//   db.collection('post').onSnapshot((querySnapshot) => {
//     postCreado.innerHTML = '';
//     querySnapshot.forEach((doc) => {
//       console.log(doc.id, " => ", doc.data().UserName);
//       postCreado.innerHTML += `
//       <tr>
//           <th scope="col">${[userEmail]}</th>
//           <th scope="col">${post}</th>
//           <th scope="col">${doc.id}</th>
//         </tr>`;
//     });
//   });
// };




