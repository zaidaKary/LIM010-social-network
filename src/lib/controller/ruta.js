// El controlador asocia el cambio de la ruta con las vistas
// changeView -> cambio de vistas,
// importamos el viewLogin
import Login from '../view/login-view.js';
import Home from '../view/home-view.js';
import Register from '../view/register-view.js';
import Profile from '../view/profile-view.js';
import Different from '../view/404-view.js';

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
    {
      return container.appendChild(components.login());
    }
    case '#/register':
    {
      return container.appendChild(components.register());
    }

    case '#/home':
    {

      return container.appendChild(components.home());
    }
    case '#/perfil':
    {
      return container.appendChild(components.profile());
    }
    default:
    {
      return container.appendChild(components.different());
    }
  }
};
