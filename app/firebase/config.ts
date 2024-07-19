import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

console.log(process.env.REACT_APP_FIREBASE_API_KEY);

const firebaseConfig = {
  apiKey: "AIzaSyDh5TthLMQV9MHKOtCHf_lyG7LA6ZKhG1s",
  authDomain: "ai-resume-f6f3f.firebaseapp.com",
  projectId: "ai-resume-f6f3f",
  storageBucket: "ai-resume-f6f3f.appspot.com",
  messagingSenderId: "595707500514",
  appId: "1:595707500514:web:e22c0097a8ff4580274bbb",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, app, googleProvider };
