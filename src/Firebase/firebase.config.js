import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyD4TSoJhq9SnNm2agziNBpH-A_o7bLWdAk",
  authDomain: "medical-care-136ef.firebaseapp.com",
  projectId: "medical-care-136ef",
  storageBucket: "medical-care-136ef.appspot.com",
  messagingSenderId: "604806698816",
  appId: "1:604806698816:web:e49d45ecc4c8d57cd7cca5",
  measurementId: "G-12E6B2J81C",
};
const app = () => initializeApp(firebaseConfig);
export default app;
