import firebase from "firebase";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyB1sc9ssdPNGxiHRKacF9G7tuuHiH06-wo",
    authDomain: "saude-mental-tcc.firebaseapp.com",
    projectId: "saude-mental-tcc",
    storageBucket: "saude-mental-tcc.appspot.com",
    messagingSenderId: "730462094619",
    appId: "1:730462094619:web:842a154550870fce617fbe",
    measurementId: "G-QZJGL18KHZ"
};
// Initialize Firebase
const initFirebase = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore(initFirebase);

export const ConfigurationsRef = db.collection("Communities"); 
export const UsersRef = db.collection("Users");

export default firebase;