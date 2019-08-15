import { registerFunction } from '../controller/register-controller.js';

export default () => {
  const viewRegister = `
  <div id="vista-registro" class="login">
  <div class="logoIzquierda"></div>
  <div class="sesion">
  <img class="logo" src="./img/logo.png"  alt="logo">
<<<<<<< HEAD
  <p class="intro"><strong>«Vive la aventura de viajar» </strong></p>
  <input id="txt-username" class="sesion name info-alert espacio" type="text" placeholder="&#128100 Nombre"/>
  <input id="txt-email" class="sesion info-alert espacio" type="email" placeholder="&#128231 ejemplo@mail.com"/>
  <input id="txt-password1" class="sesion info-alert espacio" type="password" placeholder=" Ingrese su contraseña..."/>
=======
  <p class="font">«Vive la aventura de viajar»</p>
  <input id="txt-username" class="sesion" type="text" placeholder="&#128100 Nombre"/>
  <input id="txt-email" class="sesion" type="email" placeholder="&#128231 ejemplo@mail.com"/>
  <input id="txt-password1" class="sesion" type="password" placeholder="Ingrese su contraseña..."/>
>>>>>>> 5b1400e289f12741c19333c0a7457925b6344718
  <p id ="mensaje-error" class ="mensaje-error "></p>
   <button class="sesion log espacio" id ="btn-registrarse">Regístrate</button>
  <p class="contrato">Al registrarte, aceptas nuestras<strong>Condiciones, la Política de datos y la Política de cookies</strong>.</p>
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