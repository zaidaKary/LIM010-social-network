export default () => {
  const viewRegistrar = `
    <div class="registrar">
    <img class="logo" src="./img/logo.png"  alt="logo">  
    <input class="sesion" id="name" type="text" placeholder="Ingrese su nombre">
    <input class="sesion" id="email" type="email" placeholder="Ingrese su Email">
    <input class="sesion" id="create-pass" type="password" id="password" placeholder="ingrese tu contraseña">
    <input class="sesion" id="repit-pass" type="password" id="password2" placeholder="repite su contraseña">
    <button class="sesion" id="btn-registar" type="button"> Registrar </button>
    </div>`;
  const divElem = document.createElement('div');
  divElem.innerHTML = viewRegistrar;
  return divElem;
};
