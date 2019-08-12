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