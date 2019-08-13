import { signOff } from '../controller/signoff-controller.js';
import { obtenerInfo } from '../controller/obtenerInfo-controller.js';
export default () => {
    const viewHome = ` 
    <header style="padding-bottom: 105px;">
    <button id="btn-perfil">Ver Perfil</button>
    <img class="logo" src="./img/logo.png" alt="logo">
    <button id="btn-cerrar">Cerrar Sesión</button>
    </header>
    <div id="vista-home">
    <div id="datos-user" style="text-align: center;">
    <img class="foto-user" id="foto"/>
    <label id='name'></label><br>
    <label id='correo'></label>
    </div>
    </div>`;
    const divElem = document.createElement('div')
    divElem.innerHTML = viewHome;
    const btnCerrar = divElem.querySelector('#btn-cerrar');
    const btnPerfil = divElem.querySelector('#btn-perfil');
    btnCerrar.addEventListener('click', () =>{
        signOff();
    });
    btnPerfil.addEventListener('click', () =>{
        location.hash = '#/perfil';
    });
    const userName = divElem.querySelector('#name');
    const userCorreo = divElem.querySelector('#correo');
    const userImage = divElem.querySelector('#foto');
    
    obtenerInfo(userName, userCorreo, userImage);

    return divElem;
}