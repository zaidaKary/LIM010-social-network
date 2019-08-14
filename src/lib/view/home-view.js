import { signOff } from '../controller/signoff-controller.js';
import { obtenerInfo } from '../controller/obtenerInfo-controller.js';
export default () => {
    const viewHome = ` 
    <header>
        <div class="menuBurguer">
            <button id="menu"><img class="burguer" src="https://img.icons8.com/ios-filled/50/000000/menu-rounded.png"></button>
            <nav id="superior">
            <ul>
            <li id="btn-perfil"><a >Ver Perfil</a></li>
            <li id="btn-cerrar"><a >Cerrar Sesión</a></li>
            </ul>
            </nav>
        </div>
        <img src="./img/logoMenu2.png" alt="logo">
    </header>
    <div id="vista-home" class="post">
             <img src="" alt="">
             <div id="datos-user">
                <img class="foto-user" id="foto" src=""/>
                <div class ="datos">
                <label class="profile-name" id="name" for="name"></label>
                <label id="correo" class="profile-name" for="name"></label>
                </div>
             </div>
            <div class="post">
            <textarea name="post" id="" cols="30" rows="5" placeholder="¿que quieres compartir hoy?"></textarea>
            <div id="vista-cargar-imagen">
            <progress value="0" max="100" id="uploader">0%</progress>    
            <button>Compartir</button>
            </div>
        </div>    
    </div> `;
    const divElem = document.createElement('div')
    divElem.innerHTML = viewHome;
    const btnCerrar = divElem.querySelector('#btn-cerrar');
    const btnPerfil = divElem.querySelector('#btn-perfil');
    btnCerrar.addEventListener('click', (e) =>{
        e.preventDefault();
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