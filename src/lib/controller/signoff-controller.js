export const signOff = () => {
  firebase.auth().signOut();
  window.location.hash = '#/';
};
