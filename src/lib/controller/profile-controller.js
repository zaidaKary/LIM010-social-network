import { updateProfile } from "../model/modelProfile.js";
import { userCurrent } from "../model/modelLoginRegistro.js";

//Pintando nombre y correo en la vista perfil
export const pintarInfoPerfil = (userName, userCorreo,userfoto) => {
  const auth = firebase.auth();
  return auth.onAuthStateChanged((user) => {
    if (user) {
      // El usuario ha iniciado sesión.
      const id = firebase.auth().currentUser.uid;
      // Obtención de datos de un documento
      firebase.firestore().collection('users').where("ID", "==", id).get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => { // forEach -> se repite por cada documento que este en users
        // console.log(doc.id, " => ", doc.data());
        console.log("Datos del documento:", doc.data());
        userName.value = doc.data().Nombre;// consoleamos el nombre que hay en el documento
        userCorreo.value = doc.data().Email;// consoleamos el nombre que hay en el documento
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
  const id = userCurrent();
  updateProfile(nuevoUserNombre, id)
  .then(() => {
    console.log(firebase.auth().currentUser);
  }).catch(() => {
  });
};