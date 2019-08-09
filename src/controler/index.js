// El controlador asocia el cambio de la ruta con las vistas
//changeView -> cambio de vistas, 
const changeView = (route) => { //nos trae el window.location.hash del main.js cada vez que 
                           //cambiemos la URL para poder asociar a cada uno de las vistas
console.log(route);
};

export { changeView } //lo importamos en main.js