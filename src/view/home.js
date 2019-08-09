export default () => {
    const viewHome = `  
    <div id="vista-cargar-imagen" class="hide">
    <progress value="0" max="100" id="uploader">0%</progress>
    <input type="file" value="upload" id="btn-file"/>
    <button id="btn-cerrar">Cerrar</button>
    </div>`;
    const divElem = document.createElement('div')
    divElem.innerHTML = viewHome;

    return divElem;
}