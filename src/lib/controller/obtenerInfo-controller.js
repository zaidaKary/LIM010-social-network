
export const obtenerInfo = (userName, userCorreo, userImage) => { // pinta en el home el nombre, foto y correo
  const auth = firebase.auth();
  return auth.onAuthStateChanged((user) => {
    if (user) {
      // El usuario ha iniciado sesión.
      const id = firebase.auth().currentUser.uid;
      // Obtención de datos de un documento
      firebase.firestore().collection('users').where("ID", "==", id).get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => { // forEach -> se repite por cada documento que este en users
            console.log("Datos del documento:", doc.data());
            userName.textContent = doc.data().Nombre;// consoleamos el nombre que hay en el documento
            userCorreo.textContent = doc.data().Email;// consoleamos el nombre que hay en el documento
            userImage.src = doc.data().Foto;
          });
        }).catch((error) => {
          console.log("Error al obtener el documento", error);
        });
    } else {
      // Ningún usuario ha iniciado sesión.
    }
  });
};
