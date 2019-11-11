import { obtenerInfo } from '../controller/obtenerInfo-controller.js';

export const userTemplate = () => {
  const viewuser = `
    <div id="datos-user">
        <div class="imagen-fondo-perfil">
        </div>
            <div class="usuario">
                <img class="foto-user" id="foto"/>
                <div class="datos">
                    <label id="name" class="profile-name" for="name"></label>
                    <label id="correo" class="profile-name" for="name"></label>
                </div>
            </div>
    </div>`;
  const divElem = document.createElement('div');
  divElem.innerHTML = viewuser;
  const userName = divElem.querySelector('#name');
  const userCorreo = divElem.querySelector('#correo');
  const userImage = divElem.querySelector('#foto');

  obtenerInfo(userName, userCorreo, userImage); // pinta en el home esos datos de argumento
  return divElem;
};
