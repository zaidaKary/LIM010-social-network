import { signOff } from '../controller/signoff-controller.js'
export default () => {
    const viewHome = `  
    <div id="vista-cargar-imagen">
    <progress value="0" max="100" id="uploader">0%</progress>
    <input type="file" value="upload" id="btn-file"/>
    <button id="btn-cerrar">Cerrar</button>
    </div>`;
    const divElem = document.createElement('div')
    divElem.innerHTML = viewHome;
    const btnCerrar = divElem.querySelector('#btn-cerrar');
    btnCerrar.addEventListener('click', () =>{
        signOff();
    });
    return divElem;
}