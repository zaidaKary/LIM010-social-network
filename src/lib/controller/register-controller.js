import { createUserWithEmailAndPassword } from '../model/modelFirebase.js';
// import { guardarRegistro } from '../model/modelguardarRegistro.js';
// REGISTRO DE UN NUEVO USUARIO
// ---------------------------------------------------------------------//
export const obtenerNombreEmail = (email) => {
  // Obtención de datos de un documento
  db.collection('users').where("Email", "==", email).get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => { // forEach -> se repite por cada documento que este en users
            // console.log(doc.id, " => ", doc.data());
            console.log(doc.data().Nombre);// consoleamos el nombre que hay en el documento
            console.log(doc.data().Email);// consoleamos el nombre que hay en el documento
        });
    })
    .catch((error) => {
        console.log("Error al obtener documentos: ", error);
    });
  };
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
  // Validando datos del email y password
  // validar(email, pass);
  createUserWithEmailAndPassword(email, pass).then((result) => {
    const user = firebase.auth().currentUser;// obtiene el usuario que accedió
    console.log(user); 
    obtenerNombreEmail(email); // obtenemos nombre y email del usuario creado
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
// ---------------------------------------------------------------------//
// VALIDACION DEL EMAIL Y PASSWORD
// ---------------------------------------------------------------------//
// const validar = (email, password) => {
//   // Normalmente el formato de un email es: texto.123@texto.texto
//   const expresionEmail = /\w+@\w+\.+[a-z]/; // email lo mas simple
//   // Ingresar constraseña solo texto y numero
//   const expresionPassword = /[a-z][0-9]/;
//   if (email === '' && password === '') {
//     alert('Todos los campos son obligatorios');
//   } else if (email === '') {
//     alert('Campo email obligatorio');
//   } else if (password === '') {
//     alert('Campo Password obligatorio');
//   } else if (!expresionEmail.test(email)) {
//     alert('Email no válido');
//   } else if (!expresionPassword.test(password)) {
//     alert('Constraseña no válido (Solo texto y números)');
//   }
// };
