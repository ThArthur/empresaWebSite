import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

let firebaseConfig = {
    apiKey: "AIzaSyC8tQyGYbWQbi666P-Ony-g70Aa-pERipI",
    authDomain: "sistema-a3faf.firebaseapp.com",
    projectId: "sistema-a3faf",
    storageBucket: "sistema-a3faf.appspot.com",
    messagingSenderId: "417502403165",
    appId: "1:417502403165:web:67c6ef5fc77c714a7bcbb4",
    measurementId: "G-X37Q60FL2Y"
};
  
if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export default firebase;