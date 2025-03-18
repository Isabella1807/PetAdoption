// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDatv86CBD2guCxm6RoikKSQ93IOIg96D4",
  authDomain: "petadoption-bacc4.firebaseapp.com",
  projectId: "petadoption-bacc4",
  storageBucket: "petadoption-bacc4.firebasestorage.app",
  messagingSenderId: "900557705359",
  appId: "1:900557705359:web:9892f254e39d62e03a60fa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export {
  db
}
