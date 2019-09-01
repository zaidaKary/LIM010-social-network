import { loginFunction, authAccountFacebook, authAccountGoogle } from '../controller/login-controller.js';

export default () => {
  const viewLogin = `
    <div id="vista-login" class="login">
    <div class="logoIzquierda"></div>
    <div class="sesion orden">
    <img class="logo" src="./img/logo.png"  alt="logo">
    <p class="font">«Vive la aventura de viajar»</p>
    <input id="txt-email" class="sesion" type="email" placeholder="&#128100 Ingrese su email..."/>
    <div class="ojo">
    <input id="txt-password" class="sesion" type="password" placeholder="&#128231 Ingrese su contraseña...">
    <span id="mostrar-pass" class="glyphicon glyphicon-eye-open imgojito"></span>
    </div>
    <p id ="mensaje-error" class ="mensaje-error "></p>
    <button class="sesion log espacio" id="btn-ingresar"> Log in </button>
    <p>O bien ingresa con...</p>
    <p>
        <input id="btn-facebook" type=image src="https://img.icons8.com/color/48/000000/facebook-new.png" class="icon">
        <input id="btn-google" type=image src="https://img.icons8.com/color/48/000000/google-plus--v2.png" class="icon">
    </p>
    <p>¿No tienes una cuenta?&nbsp;<a href="#/register"><span id="btn-registrarse">Registrate</span></a></p>
    <footer >Creado por Betsy, Zaida & Milca</footer>
     </div>
    </div>`;
  const divElem = document.createElement('div');
  divElem.innerHTML = viewLogin;
  const mensajeError = divElem.querySelector('#mensaje-error');
  const btnIngresar = divElem.querySelector('#btn-ingresar');
  const btnFacebook = divElem.querySelector('#btn-facebook');
  const btnGoogle = divElem.querySelector('#btn-google');
  const mostrarPass = divElem.querySelector('#mostrar-pass');
  // Mostrar constraseña ojo
  const mostrarPassword = () => {
    const pass = document.querySelector('#txt-password');
    if (pass.type === 'password') {
      pass.type = 'text';
    } else {
      pass.type = 'password';
    }
  };
  btnIngresar.addEventListener('click', () => {
    event.preventDefault();
    const email = divElem.querySelector('#txt-email').value;
    const pass = divElem.querySelector('#txt-password').value;
    loginFunction(email, pass, mensajeError);
  });
  btnFacebook.addEventListener('click', () => {
    authAccountFacebook();
  });
  btnGoogle.addEventListener('click', () => {
    authAccountGoogle();
  });
  mostrarPass.addEventListener('click', () => {
    mostrarPassword();
  });
  return divElem;
};
