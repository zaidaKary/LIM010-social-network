import {db} from '../../main.js';

export const obtenerInfo = (userName, userCorreo,userImage) => { //pinta en el home el nombre, foto y correo
  const auth = firebase.auth();
  return auth.onAuthStateChanged((user) => {
    if (user) {
      // El usuario ha iniciado sesión.
      const user1 = firebase.auth().currentUser.uid;// obtiene el uid de un usuario
      // Obtención de un documento
      db.collection('users').doc(user1).get().then((doc) => {
          if (doc.exists) {
              console.log("Datos del documento:", doc.data());
              console.log(user1)// nos vota el id del usuario
              userName.textContent = doc.data().Nombre;
              userCorreo.textContent = doc.data().Email;
              userImage.src = doc.data().Foto;
          } else {
              console.log("No hay tal documento!", doc.data());
          }
      }).catch((error) => {
          console.log("Error al obtener el documento", error);
      });
    } else {
      // Ningún usuario ha iniciado sesión.
    }
  });
};
