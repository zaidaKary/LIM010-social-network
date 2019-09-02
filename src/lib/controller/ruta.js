// El controlador asocia el cambio de la ruta con las vistas
// changeView -> cambio de vistas,
// importamos el viewLogin
import Login from '../view/login-view.js';
import Home from '../view/home-view.js';
import Register from '../view/register-view.js';
import Profile from '../view/profile-view.js';
import Different from '../view/404-view.js';
import { getPost } from '../model/modelPost.js';
// Creando un objeto de los componenetes
const components = {
  login: Login,
  home: Home,
  register: Register,
  profile: Profile,
  different: Different,
};

export const changeView = (route) => {
  // nos trae el window.location.hash del main.js cada vez que
  // cambiemos la URL para poder asociar a cada uno de las vistas
  const container = document.getElementById('root');
  container.innerHTML = '';
  switch (route) {
    case '#/':
      container.appendChild(components.login());
      break;
    case '#/register':
      container.appendChild(components.register());
      break;

    case '#/home':
      const pintarDataPost = (objetData) => {
        container.innerHTML = '';
        container.appendChild(components.home(objetData));
      };
      getPost(pintarDataPost);
      break;
    case '#/perfil':
      container.appendChild(components.profile());
      break;
    default:
      container.appendChild(components.different());
      break;
  }
};
