import { cerrarSesion } from '../model/modelLoginRegistro.js';
import { itemPost } from './post-view.js';
import { textPost } from '../controller/postContr.js';
import { userTemplate } from './user-view.js';

export default (data) => {
  const divElem = document.createElement('div');
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
                  <div> <button type=image   id="btn-compartir"class ="img-compartir"> 
                       <img src="https://img.icons8.com/ios-glyphs/30/000000/share.png"></button>
                  </div>
                </div>
              </form>
            </div>  
            <div class="public-posts" id="public-posts">
            </div>        
          </div>
        </div>
      </div>
    </div>
</div>
</div>`;
 
  divElem.innerHTML = viewHome;
  const contenedorUser = divElem.querySelector('#datos-user');
  contenedorUser.appendChild(userTemplate());
  const btnCerrar = divElem.querySelector('#btn-cerrar');
  const btnPerfil = divElem.querySelector('#btn-perfil');
  const btnCompartir = divElem.querySelector('#btn-compartir');
  const contenedorPost = divElem.querySelector('#public-posts');
  const contentPublic = divElem.querySelector('#publicacion');

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
  if (contentPublic.value !== ' ') {
    btnCompartir.addEventListener('click', (e) => {
      e.preventDefault();
      textPost();
    });
  }
  return divElem;
};
