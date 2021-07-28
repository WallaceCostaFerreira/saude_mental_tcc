import firebase from "firebase";
// import 'firebase/storage';

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
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

export default firebase;