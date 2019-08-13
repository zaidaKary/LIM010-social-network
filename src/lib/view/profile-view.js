import { guardarDatos } from '../controller/profile-controller.js';

export default () => {
    const viewProfile = `
    <div id="vista-profile" class="login">
            <h1 class="color-perfil text-center">Perfil de Usuario</h1>
            <img class="foto-user" src='./img/profile.png' id="foto"/>
            <label class="item-perfil" id="nombre"><strong>Nombres:</strong></label>
            <input type="text"/>
            <label class="item-perfil" id="apellido"><strong>Apellidos:</strong></label>
            <input type="text"/>
            <label class="item-perfil" id="nacimiento"><strong>Lugar de Nacimiento:</strong></label>
            <input type="text"/>
            <label class="item-perfil" id="telefono"><strong>Celular/Teléfono:</strong></label>
            <input type="text"/>
            <label class="item-perfil" id="correo"><strong>Email:</strong></label>
            <input type="text"/>
            <div class="editar">
                <button id="editar-perfil">Editar</button>
            </div>
            <div class="guardar">
            <button id="guardar-perfil">Guardar</button>
            </div>         
    </div>`;
    const divElem = document.createElement('div')
    divElem.innerHTML = viewProfile;

    const userNombre = divElem.querySelector('#nombre').value;
    const userApellido = divElem.querySelector('#apellido').value;
    const userNacimiento = divElem.querySelector('#nacimiento').value;
    const userTelefono = divElem.querySelector('#telefono').value;
    const userCorreo = divElem.querySelector('#correo').value;

    const btnGuardar = divElem.querySelector('#guardar-perfil');

    btnGuardar.addEventListener('click', () => {
        guardarDatos(userNombre, userApellido, userNacimiento, userTelefono, userCorreo);
    });
    return divElem;
};