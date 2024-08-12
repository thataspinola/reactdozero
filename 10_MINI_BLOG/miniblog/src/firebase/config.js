/* eslint-disable no-unused-vars */
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBRi3U51TOMJCAHpKr2Dh8Nj-9su-UVYSI",
  authDomain: "miniblog-568ee.firebaseapp.com",
  projectId: "miniblog-568ee",
  storageBucket: "miniblog-568ee.appspot.com",
  messagingSenderId: "367050103147",
  appId: "1:367050103147:web:ca33cdef6226fa643ad42e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
