import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCVYxTLJNlJX9pJHfIVzrH9NX9mJVdOc0A",
  authDomain: "owomi-19d1c.firebaseapp.com",
  projectId: "owomi-19d1c",
  storageBucket: "owomi-19d1c.appspot.com",
  messagingSenderId: "274237404140",
  appId: "1:274237404140:web:33253c2be6ada77e8b46c9",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

// timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, timestamp };
