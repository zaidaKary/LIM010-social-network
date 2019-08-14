import { registerFunction } from '../controller/register-controller.js';

export default () => {
  const viewRegister = `
  <div id="vista-registro" class="login">
  <div class="logoIzquierda"></div>
  <div class="sesion">
  <img class="logo" src="./img/logo.png"  alt="logo">
  <p class="intro"><strong>«Vive la aventura de viajar» </strong></p>
  <input id="txt-username" class="sesion name info-alert espacio" type="text" placeholder="&#128100 Nombre"/>
  <input id="txt-email" class="sesion info-alert espacio" type="email" placeholder="&#128231 ejemplo@mail.com"/>
  <input id="txt-password1" class="sesion info-alert espacio" type="password" placeholder="Ingrese su contraseña..."/>
  <p id ="mensaje-error" class ="mensaje-error "></p>
   <button class="sesion register register-view espacio" id ="btn-registrarse">Regístrate</button>
   <footer style="padding-top: 90px;">Creado por Betsy, Zaida & Milca</footer>
   </div>
  </div>`;
  const divElem = document.createElement('div')
  divElem.innerHTML = viewRegister;
  const btnRegistrarse = divElem.querySelector('#btn-registrarse');
  btnRegistrarse.addEventListener('click',() =>{
      registerFunction();
  });  
return divElem;
};