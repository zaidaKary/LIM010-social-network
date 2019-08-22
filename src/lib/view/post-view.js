
export default () =>{
   const templatePost = `
   <div>
        <div>
          <p>Publicado por: </p>
        </div>
          <textarea   id= "publicacion" name="post" id="new-post" cols="30" rows="5" placeholder="¿Qué quieres compartir?"></textarea>
          <div>
          <button  id="btn-borrar"class="compartir">Eliminar</button>
          </div>
          <div  class="comparte">
          </div>
   </div>`;
    const divTabla = document.createElement('table');
    divTabla.innerHTML = templatePost;
    const notePost = document.querySelector('#publicacion').value;
    console.log(notePost);
    return templatePost;
}