// Import the functions you need from the SDKs you need
import { initializeApp,getApp,getApps} from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getFirebase, getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOGV5aTQv65h1M7L-y08dHE_jgBPcHIR4",
  authDomain: "insat-75c96.firebaseapp.com",
  projectId: "insat-75c96",
  storageBucket: "insat-75c96.appspot.com",
  messagingSenderId: "564958087576",
  appId: "1:564958087576:web:e8c481368d3b4f4cad43ed"
};

// Initialize Firebase
const app =!getApps().length  ?  initializeApp(firebaseConfig):getApp();
const db=getFirestore();
const storage=getStorage();


export {app,db,storage};