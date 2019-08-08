//Inicia la configuracion de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAw54jrErsVrWC2Em_kzD3ydeTogwQblVY",
    authDomain: "pruebaredsocial-7ac42.firebaseapp.com",
    databaseURL: "https://pruebaredsocial-7ac42.firebaseio.com",
    projectId: "pruebaredsocial-7ac42",
    storageBucket: "pruebaredsocial-7ac42.appspot.com",
    messagingSenderId: "542825444526",
    appId: "1:542825444526:web:14136e0ecce0ff1b"
  };

firebase.initializeApp(firebaseConfig);
//---------------------------------------------------------------------//
//AUTENTICACIÓN REGISTRO DE CUENTA E INICIO DE CUENTA Y CERRAR SESIÓN//
//---------------------------------------------------------------------//
//Obteniendo elementos de la vista de login
const txtEmail = document.getElementById('txt-email');
const txtPassword = document.getElementById('txt-password');
const btnIngresar = document.getElementById('btn-ingresar');
const btnRegistrarse = document.getElementById('btn-registrarse');
const btnCerrar = document.getElementById('btn-cerrar');
//vista de login
const vistaLogin = document.getElementById('vista-login');
//Añadir evento login
btnIngresar.addEventListener('click', () =>{
    //Obtener los campos email y password
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();
    //Login
    const promise = auth.signInWithEmailAndPassword(email,pass);
    promise.catch (evento => console.log(evento.message));
    document.getElementById('imagen').classList.remove('hide')
});
btnRegistrarse.addEventListener('click',() =>{
    //Obtener los campos email y password
    //Comprobando que el email sea real
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();
    //Login
    const promise = auth.createUserWithEmailAndPassword(email,pass);
    promise.catch (evento => console.log(evento.message));
});
btnCerrar.addEventListener('click', () =>{
    firebase.auth().signOut(); //deslogea al usuario
    
    
});
//Anadiendo un listener en tiempo real, comprueba cualquier cambio de estado en el usuario
firebase.auth().onAuthStateChanged( firebaseUser => {
    if(firebaseUser){//si el usuario esta logeado
        console.log(firebaseUser); //muestre datos del usuario
        btnCerrar.classList.remove('hide'); //muestre el boton cerrar
        vistaLogin.classList.add('hide');
        vistaCargarImagen.classList.remove('hide');
        
    }else{ //si el usuario no este logeado
        console.log('no logueado');
        vistaLogin.classList.remove('hide');
        vistaCargarImagen.classList.add('hide');
        // btnCerrar.classList.add('hide');
    }

});
//---------------------------------------------------------------------//
//ALMACENAMIENTO EN FIREBASE
//---------------------------------------------------------------------//
//Obteniendo elementos de la vista de cargar imagen
const uploader = document.getElementById('uploader');
const btnFile = document.getElementById('btn-file');
//vista de cargar imagen
const vistaCargarImagen = document.getElementById('vista-cargar-imagen');
//Vigilar cuando el archivo ha sido seleccionado
btnFile.addEventListener('change', (event) =>{
    //obtener el archivo
    const file = event.target.files[0];//accede al primer elemento del objeto files
    //Creando un almacenamiento de referencia en firebase para guardar los archivos
    const storegeRef = firebase.storage().ref('mis_fotos/' + file.name);
    //Subir archivo
    const task = storegeRef.put(file);//put metodo de firebase storage
    //Actualizar barra de progreso
    task.on('state_changed', //verifica que evento queremos vigilar
    //state_changed -> evento a vigilar
    function progress(snapshot){ //esta funcion notifica el proceso de subida
        const percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        uploader.value = percentage;
    },
    function error(){//error en la subida

    },
    function complete(){//subida completada

    }
    )
});
//---------------------------------------------------------------------//
//AUTENTICACIÓN CON FACEBOOK EN FIREBASE
//---------------------------------------------------------------------//
const btnFacebook = document.getElementById('btn-facebook');

btnFacebook.addEventListener('click', () => {
    authAccountFacebook();
});

//Instalar el LIVE SERVER para usar Facebook y google
const authAccountFacebook = () => {
    //creando el provider de autenticación
    const provider = new firebase.auth.FacebookAuthProvider();
    //accediendo al servicio de autenticación
    const authService = firebase.auth();
    authService.signInWithPopup(provider).then(result => {
        const user = result.user;
        const token = result.credential.accessToken;
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

//---------------------------------------------------------------------//
//AUTENTICACIÓN CON GOOGLE EN FIREBASE
//---------------------------------------------------------------------//

const btnGoogle = document.getElementById('btn-google');

btnGoogle.addEventListener('click', () => {
    authAccountGoogle();
});

const authAccountGoogle = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    const authService = firebase.auth();
    authService.signInWithPopup(provider).then(result => {
        const user = result.user;
        const token = result.credential.accessToken;
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
//VALIDACION DEL EMAIL
//---------------------------------------------------------------------//
txtEmail.addEventListener('input', () =>{
    const campo = event.target;
    const valid = document.getElementById('email-Ok');
    const emailRule = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (emailRule.test(campo.value)){
        valid.innerText = "email válido";
    }else {
        valid.innerText = "email con sintaxis incorrecto";
    }
});



