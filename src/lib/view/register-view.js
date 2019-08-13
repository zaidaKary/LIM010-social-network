import { registerFunction } from '../controller/register-controller.js';

export default () => {
    const viewRegister = `
    <div id="vista-registro" class="login">
    <img class="logo" src="./img/logo.png"  alt="logo">
    <p>«Vive la aventura de viajar»</p>
    <input id="txt-username" class="sesion" type="text" placeholder="Ingrese su usuario"/>
    <input id="txt-email" class="sesion" type="email" placeholder="Ingrese su email..."/>
    <input id="txt-password1" class="sesion" type="password" placeholder="Ingrese su contraseña..."/>
    <button class="sesion" id="btn-registrarse">Registrate</button>
    <label id="mensaje-error"></label>
    </div>`;
    const divElem = document.createElement('div')
    divElem.innerHTML = viewRegister;
    const btnRegistrarse = divElem.querySelector('#btn-registrarse');
    btnRegistrarse.addEventListener('click',() =>{
        registerFunction();
    });  
  return divElem;
};