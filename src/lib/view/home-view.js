import { obtenerInfo } from '../controller/obtenerInfo-controller.js';
import { cerrarSesion } from '../model/modelLoginRegistro.js';
import { itemPost } from '../view/post-view.js';
import { textPost } from '../controller/postContr.js';

export default (data) => {
  const viewHome = `
  <header class="barra-menu" id="barra-menu">
  <div class="contenedor-logo">
      <img class="logo-menu" src="./img/logoMenu2.png" alt="Logo live & travel" />
  </div>
  <div class="contenedor-menu">
      <input type="checkbox" id="btn-menu">
      <label class="glyphicon glyphicon-align-justify menu-movil" for="btn-menu"></label>
      <nav class="menu">
          <ul>
              <li id="btn-perfil"><a> PERFIL </a></li>
              <li id="btn-cerrar"><a>CERRAR SESIÓN</a></li>
          </ul>
      </nav>
  </div>
</header>
<div id="vista-home" class="container-post">
    <div class="profile-content">
        <div class="content">
            <div id="datos-user">
            <div class="imagen-fondo-perfil">
            </div>
            <div class="usuario">
                <img class="foto-user" id="foto" src="./img/profile.png" />
                <div class="datos">
                    <label id="name" class="profile-name" for="name"></label>
                    <label id="correo" class="profile-name" for="name"></label>
                </div>
                </div>
            </div>
            <div class="postear">
            <div class="post">
                <form id="form-post">
                <textarea   id= "publicacion" name="post" id="new-post" cols="30" rows="5" placeholder="¿Qué quieres compartir?"></textarea>              
                <div class="btn-imagen-compartir">
                  <select id="options" class="compartir">
                        <option value="Público">Público</option>
                        <option value="Privado">Privado</option>
                  </select>
                 <div> <button type=image   id="btn-compartir"class ="img-compartir"> <img src="https://img.icons8.com/ios-glyphs/30/000000/share.png"></button></div>
                </div>
                </form>
            </div>  
            <div class="public-posts" id="public-posts">
            </div>        
            </div>
        </div>
    </div>
</div>
</div>`;
  const divElem = document.createElement('div');
  divElem.innerHTML = viewHome;
  const userName = divElem.querySelector('#name');
  const userCorreo = divElem.querySelector('#correo');
  const userImage = divElem.querySelector('#foto');
  const btnCerrar = divElem.querySelector('#btn-cerrar');
  const btnPerfil = divElem.querySelector('#btn-perfil');
  const btnCompartir = divElem.querySelector('#btn-compartir');
  const contenedorPost = divElem.querySelector('#public-posts');

  data.forEach((element) => {
    contenedorPost.appendChild(itemPost(element));
  });
  btnCerrar.addEventListener('click', (e) => {
    e.preventDefault();
    cerrarSesion();
    window.location.hash = '#/';
  });
  btnPerfil.addEventListener('click', () => {
    window.location.hash = '#/perfil';
  });
  obtenerInfo(userName, userCorreo, userImage); // pinta en el home esos datos de argumento
  btnCompartir.addEventListener('click', () => {
    textPost(); // Guarda en la bd
  });

  return divElem;
};
