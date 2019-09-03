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
export const userCurrent = () => {
  return firebase.auth().currentUser;
};
// creando una función que agregue datos de registro en la colección users
export const createUser = (id, name, email, foto) => {
  firebase.firestore().collection('users').doc(id).set({
    ID: id,
    Nombre: name,
    Email: email,
    Foto: foto,
  });
};