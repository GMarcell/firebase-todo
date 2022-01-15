// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDeuppKRR1EiszK-DHAavsr0O73iE2CTpA",
    authDomain: "fir-todo-c24d8.firebaseapp.com",
    projectId: "fir-todo-c24d8",
    storageBucket: "fir-todo-c24d8.appspot.com",
    messagingSenderId: "198772965736",
    appId: "1:198772965736:web:c78136803e23e7fa1096dd",
    measurementId: "G-NPW32CSBPN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export default db