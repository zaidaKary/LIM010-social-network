export const signInWithEmailAndPassword = (email, pass) => {
  return firebase.auth().signInWithEmailAndPassword(email, pass);
};
export const signInGoogle = () => {
  return firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider());
};
export const signInFacebook = () => {
  return firebase.auth().signInWithPopup(new firebase.auth.FacebookAuthProvider());
};
export const createUserWithEmailAndPassword = (email, pass) => {
  return firebase.auth().createUserWithEmailAndPassword(email, pass);
};
export const cerrarSesion = () => {
  return firebase.auth().signOut();
};
