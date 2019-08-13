/* Se crea este main.js porque se va a ejecutar cuando se 
inicialice la página, es decir, cuando 
se haga una recarga de nuestra página */
import { changeView } from '../src/lib/controller/ruta.js'

const init = () => { // sirve para cambiar la url
    changeView(window.location.hash)
    window.addEventListener('hashchange', () => changeView(window.location.hash));//hash -> para que nos traiga despues del #
};

window.addEventListener('load', init);// cada vez que haya una recarga (load) se ejecuta esta funcion

