import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC89tFtuENCMKAvRss26ifV_J6i04Doc3g",
  authDomain: "mobilia-react-coderhouse.firebaseapp.com",
  projectId: "mobilia-react-coderhouse",
  storageBucket: "mobilia-react-coderhouse.appspot.com",
  messagingSenderId: "64778487389",
  appId: "1:64778487389:web:0e29045822cbe6e6a06fb4"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)