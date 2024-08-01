// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
console.log("S", import.meta.env.VITE_API_KEY);
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_APPID,
};

// const firebaseConfig = {
//   apiKey: "AIzaSyDZcdTaOtvkVNreiOCr3gSpDlYW8r91emo",
//   authDomain: "fir-foodi-client-8af1f.firebaseapp.com",
//   projectId: "fir-foodi-client-8af1f",
//   storageBucket: "fir-foodi-client-8af1f.appspot.com",
//   messagingSenderId: "842507887057",
//   appId: "1:842507887057:web:1ecfc27fea26c5e12840f0",
// };

// Initialize Firebase
console.log(firebaseConfig);
const app = initializeApp(firebaseConfig);

export default app;
