import { firebase } from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyATJXbNpcnyDnVUbmPNRA50QpnO_SI86OI",
  authDomain: "clone-ac378.firebaseapp.com",
  projectId: "clone-ac378",
  storageBucket: "clone-ac378.appspot.com",
  messagingSenderId: "218382827759",
  appId: "1:218382827759:web:2883d3f99d1487e22bdb1a",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
