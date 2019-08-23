import { createUserWithEmailAndPassword } from '../model/modelFirebase.js';
import { db } from '../../main.js';
// REGISTRO DE UN NUEVO USUARIO
// ---------------------------------------------------------------------//
// export const obtenerNombreEmail = (email) => {
//   // Obtención de datos de un documento
//   db.collection('users').where("Email", "==", email).get()
//     .then((querySnapshot) => {
//         querySnapshot.forEach((doc) => { // forEach -> se repite por cada documento que este en users
//             // console.log(doc.id, " => ", doc.data());
//             console.log(doc.data().Nombre);// consoleamos el nombre que hay en el documento
//             console.log(doc.data().Email);// consoleamos el nombre que hay en el documento
//         });
//     })
//     .catch((error) => {
//         console.log("Error al obtener documentos: ", error);
//     });
//   };
const crearUsuario = (id, name, email, foto) => {
  db.collection('users').doc(id).set({ // agrega datos en la colección
    ID: id,
    Nombre: name,
    Email: email,
    Foto: foto
  });
};
//el set -> doc(id)
export const registerFunction = (email, pass, mensajeError,username, foto) => {
  createUserWithEmailAndPassword(email, pass)
    .then((result) => {
    const user = firebase.auth().currentUser;// obtiene el usuario que accedió
    console.log(user); 
    // obtenerNombreEmail(email); // obtenemos nombre y email del usuario creado
    crearUsuario(user.uid, username, email, foto);// creamos el usuario en firebase
    window.location.hash = '#/';
    
    // guardarRegistro(username, foto, email);
    console.log(result);
    // alert('Usuario creado correctamente');
  })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // alert(`Error detectado: ${errorMessage}, Tipo:${errorCode}`);
      console.log('Detectado un error:', error, errorMessage);
      switch (errorCode) {
        case 'auth/email-already-in-use':
          mensajeError.innerHTML = '*La dirección de correo electrónico ya existe.';
          break;
        case 'auth/weak-password':
          mensajeError.innerHTML = '*La contraseña debe tener al menos 6 caracteres.';
          break;
        case 'auth/invalid-email':
          mensajeError.innerHTML = '*El formato del correo ingresado no es válido, verifica e intente de nuevo.';
          break;
        default:
          mensajeError.innerHTML = 'Se ha producido un error';
      }
    });
};
