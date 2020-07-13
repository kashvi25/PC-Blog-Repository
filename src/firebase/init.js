import firebase from 'firebase'
import firestore from 'firebase/firestore'
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDieok03Ayu9cp77jp9TZRcs21eavOwIsw",
    authDomain: "pilot-city-blog-project.firebaseapp.com",
    databaseURL: "https://pilot-city-blog-project.firebaseio.com",
    projectId: "pilot-city-blog-project",
    storageBucket: "pilot-city-blog-project.appspot.com",
    messagingSenderId: "430395772170",
    appId: "1:430395772170:web:6c38863a000bac7ad6fef3",
    //measurementId: "G-N3GFYTKV08"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
 //firebase.analytics();
 export default firebaseApp.firestore()