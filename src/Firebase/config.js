// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyApbdu0pkhLBsirIXKJd3ehXJCRWrbL_E4",
  authDomain: "userlogin1-1097c.firebaseapp.com",
  projectId: "userlogin1-1097c",
  storageBucket: "userlogin1-1097c.appspot.com",
  messagingSenderId: "558742840481",
  appId: "1:558742840481:web:c08b584749a23887f13ce0",
  measurementId: "G-PKTSMK6LGY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const dbConfig = getFirestore(app);
//console.log(app,  "aas")

export {dbConfig};