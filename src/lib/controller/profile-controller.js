import { updateProfile } from '../model/modelProfile.js';
import { userCurrent } from '../model/modelLoginRegistro.js';
//Pintando nombre y correo en la vista perfil
export const pintarInfoPerfil = (userName, userCorreo, userfoto) => {
  const auth = firebase.auth();
  return auth.onAuthStateChanged((user) => {
    if (user) {
      // El usuario ha iniciado sesión.
      const id = firebase.auth().currentUser.uid;
      // Obtención de datos de un documento
      firebase.firestore().collection('users').where("ID", "==", id).get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            userName.value = doc.data().Nombre;
            userCorreo.value = doc.data().Email;
            userfoto.src = doc.data().Foto;
          });
        }).catch((error) => {
          console.log("Error al obtener el documento", error);
        });
    } else {
      // Ningún usuario ha iniciado sesión.
    }
  });
};
export const actualizandoPerfil = (nuevoUserNombre) => {
  const id = userCurrent().uid;
  updateProfile(nuevoUserNombre, id);
};