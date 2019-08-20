import {db} from '../../main.js';

//Pintando nombre y correo en la vista perfil
export const pintarInfoPerfil = (userName, userCorreo,userfoto) => {
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
              userName.value = doc.data().Nombre;
              userCorreo.value = doc.data().Email;
              userfoto.src = doc.data().Foto;
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

// Actualizando perfil en la base de datos
export const actualizandoPerfil = (nuevoUserNombre) => {
  const user = firebase.auth().currentUser.uid; // obteniendo id de usuario
  return db.collection('users').doc(user).update({
    Nombre: nuevoUserNombre,
  }).then(() => {
    // console.log('Document successfully updated!');
    // actualizarNombre(nuevoUserNombre);
    console.log(firebase.auth().currentUser);
  }).catch(() => {
    // The document probably doesn't exist.
    // console.error('Error updating document: ', error);
  });
};
