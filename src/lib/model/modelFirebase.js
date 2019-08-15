 
 export const signInWithEmailAndPassword  = (email, pass) =>{  
    firebase.auth().signInWithEmailAndPassword(email, pass);
}