// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkZKcfSRx_4Aj-tzfbPjugS6sgzujPzk0",
  authDomain: "storagepractice-8ec35.firebaseapp.com",
  projectId: "storagepractice-8ec35",
  storageBucket: "storagepractice-8ec35.appspot.com",
  messagingSenderId: "266741874006",
  appId: "1:266741874006:web:15154dda87e531bf482af7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;

const storage = getStorage(app)
const firestore = getFirestore(app)
export {storage , firestore}