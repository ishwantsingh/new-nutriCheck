import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Replace this with your own config details
var config = {
  apiKey: "AIzaSyBYFzxYn4H0eQA7DKkuPwGItBLJfKz8Hug",
  authDomain: "nutricheck.firebaseapp.com",
  databaseURL: "https://nutricheck.firebaseio.com",
  projectId: "nutricheck",
  storageBucket: "nutricheck.appspot.com",
  messagingSenderId: "918108625952",
  appId: "1:918108625952:web:f6e20cb78bf3d29ec67045"
};
firebase.initializeApp(config);
firebase.firestore();

export default firebase;
