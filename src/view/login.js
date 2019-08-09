export default () => {
    const viewLogin = `
    <div id="vista-login" class="login">
    <img class="logo" src="./img/logo.png"  alt="logo">
    <p>«Vive la aventura de viajar»</p>
    <input id="txt-email" class="sesion" type="email" placeholder="Ingrese su email..."/>
    <input id="txt-password" class="sesion" type="password" placeholder="Ingrese su contraseña..."/>
    <button class="sesion" id="btn-ingresar">Ingresar</button>
    <p>O bien ingresa con...</p>
    <p>
        <input id="btn-facebook" type=image src="https://img.icons8.com/color/48/000000/facebook-new.png" class="icon">
        <input id="btn-google" type=image src="https://img.icons8.com/color/48/000000/google-plus--v2.png" class="icon">
    </p>
    <p>¿No tienes una cuenta?<button id="btn-registrarse">Registrarse</button></p>
    </div>`;
    const divElem = document.createElement('div')
    divElem.innerHTML = viewLogin;

    return divElem;
}