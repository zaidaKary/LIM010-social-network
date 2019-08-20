import { pintarInfoPerfil ,actualizandoPerfil} from '../controller/profile-controller.js';

export default () => {
  const viewProfile = `
    <div id="vista-profile" class="perfil">
        <div class="perfil-contenedor">
            <label class="nombre-perfil">Perfil de Usuario</label>
            <img id="foto"/>
            <label><strong>Nombre:</strong></label>
            <input id="nombre" type="text" disabled/>
            <label><strong>Email:</strong></label>
            <input id="correo" type="text" disabled/>
            <button class="sesion log espacio" id="editar-perfil">Editar</button>
            <button class="sesion log espacio" id="guardar-perfil">Guardar</button>
            <button class="sesion log espacio" id="inicio">Inicio</button>
        <div>        
    </div>`;
  const divElem = document.createElement('div');
  divElem.innerHTML = viewProfile;

  const userNombre = divElem.querySelector('#nombre');
  const userCorreo = divElem.querySelector('#correo');
  const userFoto = divElem.querySelector('#foto');
  const btnGuardar = divElem.querySelector('#guardar-perfil');
  const btnEditar = divElem.querySelector('#editar-perfil');
  const btnInicio = divElem.querySelector('#inicio');
  pintarInfoPerfil(userNombre,userCorreo, userFoto);
  // obteniendoDatosUsuario();
  btnEditar.addEventListener('click', () => {
    userNombre.disabled = false;
  });

  btnGuardar.addEventListener('click', () => {
    const nuevoUserNombre = divElem.querySelector('#nombre').value;
    actualizandoPerfil(nuevoUserNombre).then(() => {
      // pintarInfoPerfil(nuevoUserNombre,userCorreo);
     
    });
    userNombre.disabled = true;
  });

  btnInicio.addEventListener('click', () =>{
    window.location.hash = '#/home';
  });
  return divElem;
};
