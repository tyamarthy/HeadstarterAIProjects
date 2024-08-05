// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQpCm1oL7YBj0PFYI69ON5sFeO4bNtlwE",
  authDomain: "pantry-project-687ae.firebaseapp.com",
  projectId: "pantry-project-687ae",
  storageBucket: "pantry-project-687ae.appspot.com",
  messagingSenderId: "597725814140",
  appId: "1:597725814140:web:042ff2abb58aa3e0c658f9",
  measurementId: "G-DL72CTSYQH"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const firestore=getFirestore(app);