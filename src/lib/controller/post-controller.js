
export const publicarPost = () => {
  const email = document.getElementById('correo').value;
  const post = document.getElementById('new-post').value;
  const db = firebase.firestore();
  db.collection('post').add({
    Email: email,
    Post: post,
  })
    .then((docRef) => {
      console.log('Document written with ID: ', docRef.id);
      document.getElementById('correo').value = '';
      document.getElementById('new-post').value = '';
    })
    .catch((error) => {
      console.error('Error adding document: ', error);
    });
};
