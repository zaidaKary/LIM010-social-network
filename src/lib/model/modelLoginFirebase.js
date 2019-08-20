export const signInWithEmailAndPassword = (email, pass) => {
  return firebase.auth().signInWithEmailAndPassword(email, pass);
};
export const signInGoogle = () => {
  return firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider());
};
export const signInFacebook = () => {
  return firebase.auth().signInWithPopup(new firebase.auth.FacebookAuthProvider());
};

export const userCurrent = () => firebase.auth().currentUser;

export const signOutLogin = () => firebase.auth().signOut();

export const createUser = (email, password,) => firebase.auth().createUserWithEmailAndPassword(email, password);

export const cerrarSesion = () => {
  return firebase.auth().signOut();
};