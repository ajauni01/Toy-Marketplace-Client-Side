// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_messagingSenderId
};

console.log("API Key:", import.meta.env.VITE_apiKey);
console.log("Auth Domain:", import.meta.env.VITE_authDomain);
console.log("Project ID:", import.meta.env.VITE_projectId);
console.log("Storage Bucket:", import.meta.env.VITE_storageBucket);
console.log("Messaging Sender ID:", import.meta.env.VITE_messagingSenderId);
console.log("App ID:", import.meta.env.VITE_appId);

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
