// import db from './firebase.js';

// const docRef = db.doc('users');
// export const guardarDatos = (nombre, apellido, nacimiento, telefono, correo) => {
//     return docRef.set({
//             first: nombre,
//             last: apellido,
//             date: nacimiento,
//             telephone: telefono,
//             email: correo
//         })
//         .then(function(docRef) {
//             console.log("Documento escrito con ID: ", docRef.id);
//         })
//         .catch(function(error) {
//             console.error("Error al agregar documento: ", error);
//         });
// };