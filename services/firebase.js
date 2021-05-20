import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCSbRz7F8Hhakf1K9SfFBs0irReeY32Kp0",
    authDomain: "homma-contact.firebaseapp.com",
    databaseURL: "https://homma-contact-default-rtdb.firebaseio.com",
    projectId: "homma-contact",
    storageBucket: "homma-contact.appspot.com",
    messagingSenderId: "1065817460230",
    appId: "1:1065817460230:web:e626958bafb8bf62cffd87"
});

var database = firebaseApp.firestore();

export { database };