const firebaseConfig = {
    apiKey: "AIzaSyCip4OE9HwYiH2LJXclkpos8Eait0Ijhvk",
    authDomain: "redsocial-752f0.firebaseapp.com",
    databaseURL: "https://redsocial-752f0.firebaseio.com",
    projectId: "redsocial-752f0",
    storageBucket: "redsocial-752f0.appspot.com",
    messagingSenderId: "424879236650",
    appId: "1:424879236650:web:d1226c8275e3a8c7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const email = document.getElementById('email');
const password = document.getElementById('password');
const btnLogin = document.getElementById('btnLogin');
const btnLogout = document.getElementById('btnLogout');
const btnRegistrar = document.getElementById('btnRegistrar');

btnLogin.addEventListener('click', (e) => {
    //obtener email y pass
    const correo = email.value;
    const contra = password.value;
    const auth = firebase.auth();
    //sig in
    const promise = auth.signInWithEmailAndPassword(correo, contra);
    promise.catch(e => console.log(e.message));
    document.getElementById('imagen').classList.remove('hide')
});
btnRegistrar.addEventListener('click', (e) => {
    //obtener email y pass
    const correo = email.value;
    const contra = password.value;
    const auth = firebase.auth();
    //sig in
    const promise = auth.createUserWithEmailAndPassword(correo, contra);
    promise.catch(e => console.log(e.message));
});
btnLogout.addEventListener('click', (e) => {
    firebase.auth().signOut();
});

firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser) {
        console.log(firebaseUser);
    } else {
        console.log('no logueado');
    }
})
//creado base de datos
const uploader = document.getElementById('uploader');
const fileButton = document.getElementById('fileButton');

fileButton.addEventListener('change', (e) => {
    const file = e.target.files[0];
    const storageRef = firebase.storage().ref('mis_fotos/' + file.name);
    //subir archivo
    const task = storageRef.put(file);
    task.on('state_changed',
        function progress(snapshot) {
            const percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            uploader.value = percentage;
        },
        error = (error) => {

        },
        complete = () => {

        }
    )
});

// import { myFunction } from './lib/index.js';

// myFunction();
