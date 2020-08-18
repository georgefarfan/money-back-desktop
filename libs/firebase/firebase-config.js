const firebase = require("firebase/app");
require("firebase/auth");
const firebaseConfig = {
  apiKey: "AIzaSyAizLoQq7A_954zDDVjeMq4I_ZVa6gLlpo",
  authDomain: "freelance-apps-8f81c.firebaseapp.com",
  databaseURL: "https://freelance-apps-8f81c.firebaseio.com",
  projectId: "freelance-apps-8f81c",
  storageBucket: "freelance-apps-8f81c.appspot.com",
  messagingSenderId: "440028828781",
  appId: "1:440028828781:web:6582acb3c40c8247359b64",
  measurementId: "G-W2E4WXLYZW",
};
firebase.initializeApp(firebaseConfig);

let firebase_functions = {
  signup: (user, pass) => {
    const promise = firebase.auth().createUserWithEmailAndPassword(user, pass);
    promise
      .then(function (response) {
        return response;
      })
      .catch(function (error) {
        let errorCode = error.code;
        let errorMessage = error.message;
        return `Error CODE ${errorCode} - Message ${errorMessage}`;
      });
  },
  signin: (user, pass) => {
    const promise = firebase.auth().signInWithEmailAndPassword(user, pass);
    promise
      .then(function (response) {
        console.log("SIGIN => ", response);
        return response;
      })
      .catch(function (error) {
        let errorCode = error.code;
        let errorMessage = error.message;
        return `Error CODE ${errorCode} - Message ${errorMessage}`;
      });
  },
  userSigned: () => {
    firebase.auth().onAuthStateChanged((firebaseUser) => {
      if (firebaseUser) {
        console.log("USER => ", firebaseUser);
      } else {
        console.log("user not logged in");
      }
    });
  },
  googleSignIn: () => {
    const base_provider = new firebase.auth.GoogleAuthProvider();
    const promise = firebase.auth().signInWithPopup(base_provider);
    promise
      .then(function (result) {
        console.log(result);
        console.log("Success ... Google Account Linked");
      })
      .catch(function (error) {
        console.log(error);
        console.log("Fail to do ...");
      });
  },
};

module.exports = firebase_functions;
