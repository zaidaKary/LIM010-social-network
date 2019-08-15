import { guardarDatos } from '../controller/profile-controller.js';

export default () => {
    const viewProfile = `
    <div id="vista-profile" class="perfil">
        <div class="perfil-contenedor">
            <label class="nombre-perfil">Perfil de Usuario</label>
            <img src='./img/profile.png' id="foto"/>
            <label><strong>Nombres:</strong></label>
            <input id="nombre" type="text"/>
            <label><strong>Apellidos:</strong></label>
            <input id="apellido" type="text"/>
            <label><strong>Lugar de Nacimiento:</strong></label>
            <input id="nacimiento" type="text"/>
            <label><strong>Celular/Teléfono:</strong></label>
            <input id="telefono" type="text"/>
            <label><strong>Email:</strong></label>
            <input id="correo" type="text"/>
            <button id="editar-perfil">Editar</button>
            <button id="guardar-perfil">Guardar</button>
        <div>        
    </div>`;
    const divElem = document.createElement('div')
    divElem.innerHTML = viewProfile;

    const btnGuardar = divElem.querySelector('#guardar-perfil');

    btnGuardar.addEventListener('click', () => {
        const userNombre = divElem.querySelector('#nombre').value;
        const userApellido = divElem.querySelector('#apellido').value;
        const userNacimiento = divElem.querySelector('#nacimiento').value;
        const userTelefono = divElem.querySelector('#telefono').value;
        const userCorreo = divElem.querySelector('#correo').value;
        guardarDatos(userNombre, userApellido, userNacimiento, userTelefono, userCorreo);
    });
    return divElem;
};