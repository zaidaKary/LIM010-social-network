import { signInWithEmailAndPassword, signInGoogle, signInFacebook, createUser } from '../model/modelLoginRegistro.js';
// ---------------------------------------------------------------------//
// AUTENTICACIÓN CON CUALQUIER OTRA CUENTA
// ---------------------------------------------------------------------//
export const loginFunction = (email, pass, mensajeError) => {
  signInWithEmailAndPassword(email, pass)
    .then(() => {
      window.location.hash = '#/home';
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      switch (errorCode) {
        case 'auth/user-not-found':
          mensajeError.innerHTML = '*Usuario no registrado. Por favor, registrarse.';
          break;
        case 'auth/wrong-password':
          mensajeError.innerHTML = '*La contraseña es incorrecta.';
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
// AUTENTICACIÓN CON GOOGLE EN FIREBASE
// ---------------------------------------------------------------------//
export const authAccountGoogle = () => {
  signInGoogle()
    .then((resultado) => {
      const user = resultado.user;
      const token = resultado.credential.accessToken;
      createUser(user.uid, user.displayName, user.email, user.photoURL);
      window.location.hash = '#/home';
      // console.log('autenticado usuario ', resultado.user, user, token);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(`Error detectado: ${errorMessage}, Tipo:${errorCode}`);
      // console.log('Detectado un error:', error);
    });
};
// ---------------------------------------------------------------------//
// AUTENTICACIÓN CON FACEBOOK EN FIREBASE
// ---------------------------------------------------------------------//
export const authAccountFacebook = () => {
  signInFacebook()
    .then((result) => {
      const user = result.user;
      const token = result.credential.accessToken;
      createUser(user.uid, user.displayName, user.email, user.photoURL);
      window.location.hash = '#/home';
      console.log('autenticado usuario ', result.user, user, token);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(`Error detectado: ${errorMessage}, Tipo:${errorCode}`);
      console.log('Detectado un error:', error);
    });
};
