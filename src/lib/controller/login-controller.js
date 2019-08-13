//NOTA: Instalar el LIVE SERVER para usar puerto

//---------------------------------------------------------------------//
//AUTENTICACIÓN CON CUALQUIER OTRA CUENTA
//---------------------------------------------------------------------//
export const loginFunction = () => {
    //Obtener los campos email y password
    const email = document.getElementById('txt-email').value;
    const pass = document.getElementById('txt-password').value;
    const auth = firebase.auth();
    //Login
    const promise = auth.signInWithEmailAndPassword(email,pass).then(result => {
        location.hash = '#/home';
        console.log('autenticado usuario ',result);
      })
      .catch(error => {
        console.log('Detectado un error:', error);
      });
    promise.catch (evento => console.log(evento.message));
};
//---------------------------------------------------------------------//
//AUTENTICACIÓN CON GOOGLE EN FIREBASE
//---------------------------------------------------------------------//
export const authAccountGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const authService = firebase.auth();
    authService.signInWithPopup(provider).then(result => {
        const user = result.user;
        const token = result.credential.accessToken;
        location.hash = '#/home';
        console.log('autenticado usuario ', result.user,user,token);
    })
    .catch ( error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(`Error detectado: ${errorMessage}, Tipo:${errorCode}`);
        console.log('Detectado un error:', error);
    });
};
//---------------------------------------------------------------------//
//AUTENTICACIÓN CON FACEBOOK EN FIREBASE
//---------------------------------------------------------------------//
export const authAccountFacebook = () => {
    //creando el provider de autenticación
    const provider = new firebase.auth.FacebookAuthProvider();
    //accediendo al servicio de autenticación
    const authService = firebase.auth();
    authService.signInWithPopup(provider).then(result => {
        const user = result.user;
        const token = result.credential.accessToken;
        location.hash = '#/home';
        //todo correcto
        console.log('autenticado usuario ', result.user,user,token);
    })
    .catch ( error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(`Error detectado: ${errorMessage}, Tipo:${errorCode}`);
        console.log('Detectado un error:', error);
    });
};