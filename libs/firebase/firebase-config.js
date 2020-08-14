/*
const firebase = require("firebase/app");
require('firebase/auth')
const firebaseConfig = {
    apiKey: "AIzaSyAizLoQq7A_954zDDVjeMq4I_ZVa6gLlpo",
    authDomain: "freelance-apps-8f81c.firebaseapp.com",
    databaseURL: "https://freelance-apps-8f81c.firebaseio.com",
    projectId: "freelance-apps-8f81c",
    storageBucket: "freelance-apps-8f81c.appspot.com",
    messagingSenderId: "440028828781",
    appId: "1:440028828781:web:6582acb3c40c8247359b64",
    measurementId: "G-W2E4WXLYZW"
};

var defaultProject = firebase.initializeApp(firebaseConfig);
console.log(defaultProject.name);  // "[DEFAULT]"
firebase.auth().createUserWithEmailAndPassword("email", "232").catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(`Error CODE ${errorCode} - Message ${errorMessage}`)
});
*/


const firebase = require("firebase/app");
require('firebase/auth')
const firebaseConfig = {
    apiKey: "AIzaSyAizLoQq7A_954zDDVjeMq4I_ZVa6gLlpo",
    authDomain: "freelance-apps-8f81c.firebaseapp.com",
    databaseURL: "https://freelance-apps-8f81c.firebaseio.com",
    projectId: "freelance-apps-8f81c",
    storageBucket: "freelance-apps-8f81c.appspot.com",
    messagingSenderId: "440028828781",
    appId: "1:440028828781:web:6582acb3c40c8247359b64",
    measurementId: "G-W2E4WXLYZW"
};
firebase.initializeApp(firebaseConfig);

let firebase_functions = {
    signup: (user, pass) => {
        firebase.auth().createUserWithEmailAndPassword(user, pass).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(`Error CODE ${errorCode} - Message ${errorMessage}`)
        });
    },
    signin: (user, pass) => {
        firebase.auth().signInWithEmailAndPassword(user, pass).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
        });
    }
}

module.exports = firebase_functions;
