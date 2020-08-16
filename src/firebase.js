import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBzt1HyCqIExG7Q0Wu0FCdeuM4UG_4x1n8",
  authDomain: "twitter-clone-7861a.firebaseapp.com",
  databaseURL: "https://twitter-clone-7861a.firebaseio.com",
  projectId: "twitter-clone-7861a",
  storageBucket: "twitter-clone-7861a.appspot.com",
  messagingSenderId: "854388802757",
  appId: "1:854388802757:web:64544810cbc578b927dcac",
  measurementId: "G-Z1GJBCY5QR",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const storage = firebaseApp.storage();

export { db, auth, storage };
