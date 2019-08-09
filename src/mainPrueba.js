
//---------------------------------------------------------------------//
//AUTENTICACIÓN REGISTRO DE CUENTA E INICIO DE CUENTA Y CERRAR SESIÓN//
//---------------------------------------------------------------------//


const btnRegistrarse = document.getElementById('btn-registrarse');
const btnCerrar = document.getElementById('btn-cerrar');




btnRegistrarse.addEventListener('click',() =>{
    //Obtener los campos email y password
    //Comprobando que el email sea real
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();
    //Validando datos del email y password
    validar(email, pass);
    //Login
    const promise = auth.createUserWithEmailAndPassword(email,pass);
    promise.catch (evento => console.log(evento.message));
});
btnCerrar.addEventListener('click', () =>{
    firebase.auth().signOut(); //deslogea al usuario    
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
//VALIDACION DEL EMAIL
//---------------------------------------------------------------------//
const validar = (email, password) =>{
    //Normalmente el formato de un email es: texto.123@texto.texto
    const expresionEmail =/\w+@\w+\.+[a-z]/; //email lo mas simple
    //Ingresar constraseña solo texto y numero
    const expresionPassword = /[a-z][0-9]/;
    if(email === "" && password === ""){
        alert('Todos los campos son obligatorios');
        return false;
    }else if (email === ""){
        alert('Campo email obligatorio');
        return false;
    }else if (password === ""){
        alert('Campo Password obligatorio');
        return false;
    }else if (!expresionEmail.test(email)){
        alert('Email no válido');
        return false;
    }else if(!expresionPassword.test(password)) {
        alert('Constraseña no válido (Solo texto y números)');
        return false;
    }
};

