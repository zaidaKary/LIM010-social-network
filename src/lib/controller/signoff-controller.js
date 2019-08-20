import { cerrarSesion } from '../model/modelSigoffFirebase.js'
export const signOff = () => {
  cerrarSesion();
  window.location.hash = '#/';
};
