export const signInWithEmailAndPassword = (email, pass) => {
  firebase.auth().signInWithEmailAndPassword(email, pass);
};
export const signInGoogle = () => {
  firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider());
};
export const signInFacebook = () => {
  firebase.auth().signInWithPopup(new firebase.auth.FacebookAuthProvider());
};
