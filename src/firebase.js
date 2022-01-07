import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD_bXEO9XLf7L9P0UX9htIEVWSbRRlahrg",
  authDomain: "ecommerce-25380.firebaseapp.com",
  projectId: "ecommerce-25380",
  storageBucket: "ecommerce-25380.appspot.com",
  messagingSenderId: "736134608993",
  appId: "1:736134608993:web:e41527659edc460be81220"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;