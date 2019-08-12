import { loginFunction, authAccountFacebook, authAccountGoogle } from '../controller/login-controller.js';

export default () => {
    const viewLogin = `
    <div id="vista-login" class="login">
    <img class="logo" src="./img/logo.png"  alt="logo">
    <p>«Vive la aventura de viajar»</p>
    <input id="txt-email" class="sesion" type="email" placeholder="Ingrese su email..."/>
    <input id="txt-password" class="sesion" type="password" placeholder="Ingrese su contraseña..."/>
    <button class="sesion" id="btn-ingresar">Ingresar</button>
    <p>O bien ingresa con...</p>
    <p>
        <input id="btn-facebook" type=image src="https://img.icons8.com/color/48/000000/facebook-new.png" class="icon">
        <input id="btn-google" type=image src="https://img.icons8.com/color/48/000000/google-plus--v2.png" class="icon">
    </p>
    <p>¿No tienes una cuenta?&nbsp;<a href="#/register"><span id="btn-registrarse">Registrate</span></a></p>
    </div>`;
    const divElem = document.createElement('div')
    divElem.innerHTML = viewLogin;

    const btnIngresar = divElem.querySelector('#btn-ingresar');
    const btnFacebook = divElem.querySelector('#btn-facebook');
    const btnGoogle = divElem.querySelector('#btn-google');

    btnIngresar.addEventListener('click', () =>{
        loginFunction ();
    });    
    btnFacebook.addEventListener('click', () => {
        authAccountFacebook();
    });
    btnGoogle.addEventListener('click', () => {
        authAccountGoogle();
    });

    return divElem;
};