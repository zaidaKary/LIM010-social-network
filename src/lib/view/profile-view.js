// import { guardarDatos } from '../controller/profile-controller.js';

export default () => {
  const viewProfile = `
    <div id="vista-profile" class="perfil">
        <div class="perfil-contenedor">
            <label class="nombre-perfil">Perfil de Usuario</label>
            <img src='./img/profile.png' id="foto"/>
            <label id="nombre"><strong>Nombres:</strong></label>
            <input type="text"/>
            <label id="apellido"><strong>Apellidos:</strong></label>
            <input type="text"/>
            <label id="nacimiento"><strong>Lugar de Nacimiento:</strong></label>
            <input type="text"/>
            <label id="telefono"><strong>Celular/Teléfono:</strong></label>
            <input type="text"/>
            <label id="correo"><strong>Email:</strong></label>
            <input type="text"/>
            <button id="editar-perfil">Editar</button>
            <button id="guardar-perfil">Guardar</button>
        <div>        
    </div>`;
  const divElem = document.createElement('div');
  divElem.innerHTML = viewProfile;

  //   const userNombre = divElem.querySelector('#nombre').value;
  //   const userApellido = divElem.querySelector('#apellido').value;
  //   const userNacimiento = divElem.querySelector('#nacimiento').value;
  //   const userTelefono = divElem.querySelector('#telefono').value;
  //   const userCorreo = divElem.querySelector('#correo').value;

  //   const btnGuardar = divElem.querySelector('#guardar-perfil');

  // btnGuardar.addEventListener('click', () => {
  //     guardarDatos(userNombre, userApellido, userNacimiento, userTelefono, userCorreo);
  // });
  return divElem;
};
