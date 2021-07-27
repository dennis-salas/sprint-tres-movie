import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyDeiyB6X488TadNXX1bXJSfrigcAFbRhxE",
    authDomain: "sprint-tres-movie.firebaseapp.com",
    projectId: "sprint-tres-movie",
    storageBucket: "sprint-tres-movie.appspot.com",
    messagingSenderId: "664544927105",
    appId: "1:664544927105:web:fc5026d45f0e2c4a07dc80"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

const db = firebase.firestore();

export {
    db,
    googleAuthProvider,
    firebase
}