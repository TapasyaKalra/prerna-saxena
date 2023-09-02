import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {

  apiKey: "AIzaSyCaDdD_7ZSEo1CpfkNlelJjgpbQZ1JpUP0",

  authDomain: "therapeutically-yours.firebaseapp.com",

  projectId: "therapeutically-yours",

  storageBucket: "therapeutically-yours.appspot.com",

  messagingSenderId: "98399556518",

  appId: "1:98399556518:web:023e87e9a55bc82304b567",

  measurementId: "G-SK9VJZSXFE"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);