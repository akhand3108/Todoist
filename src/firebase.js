import firebase from "firebase/app"
import "firebase/storage"
import "firebase/firestore"
const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyAxup8IotGeh9QV0FJ6BwY_DfPf56DBabA",
    authDomain: "nextdev-de1f2.firebaseapp.com",
    projectId: "nextdev-de1f2",
    storageBucket: "nextdev-de1f2.appspot.com",
    messagingSenderId: "812946934094",
    appId: "1:812946934094:web:c3b660da3b9fe04e25761f"
  });

  export {firebaseConfig as firebase}