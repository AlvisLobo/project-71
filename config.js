import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyCOlOZ5_Q3HW0thCkNvbgsp5ZXNaAb9hF0",
    authDomain: "project-71-8423b.firebaseapp.com",
    databaseURL: "https://project-71-8423b-default-rtdb.firebaseio.com",
    projectId: "project-71-8423b",
    storageBucket: "project-71-8423b.appspot.com",
    messagingSenderId: "1091248570235",
    appId: "1:1091248570235:web:3a17140bd1d6e401cdc7de"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
