// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getStorage } from "firebase/storage";
// import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyD5KcHFFY3weEP6EpfismBuJKfzwW4AT10",
//   authDomain: "sihmapfeature.firebaseapp.com",
//   databaseURL: "https://sihmapfeature-default-rtdb.firebaseio.com",
//   projectId: "sihmapfeature",
//   storageBucket: "sihmapfeature.appspot.com",
//   messagingSenderId: "76745067660",
//   appId: "1:76745067660:web:f1b4333971b6f2f72c3fa9",
//   measurementId: "G-S216B7GWS9",
// };

// // Initialize Firebase
// export const app = initializeApp(firebaseConfig);
// export const auth = getAuth();
// export const storage = getStorage();
// export const db = getFirestore();
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD5KcHFFY3weEP6EpfismBuJKfzwW4AT10",
  authDomain: "sihmapfeature.firebaseapp.com",
  databaseURL: "https://sihmapfeature-default-rtdb.firebaseio.com",
  projectId: "sihmapfeature",
  storageBucket: "sihmapfeature.appspot.com",
  messagingSenderId: "76745067660",
  appId: "1:76745067660:web:f1b4333971b6f2f72c3fa9",
  measurementId: "G-S216B7GWS9",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
