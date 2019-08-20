export const signOff = () => {
  cerrarSesion();
  window.location.hash = '#/';
};
