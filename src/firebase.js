// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyCwvLnzwFjsJHMpVKntVEJFK5L-Jd6zkK0",
    authDomain: "chat-app-aeb64.firebaseapp.com",
    projectId: "chat-app-aeb64",
    storageBucket: "chat-app-aeb64.appspot.com",
    messagingSenderId: "867505493582",
    appId: "1:867505493582:web:94444bfdded1fee59a551f",
    measurementId: "G-N3LRY3WZGF"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;