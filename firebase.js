import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getStorage } from "firebase/storage";
  
    const firebaseConfig = {
    apiKey: "AIzaSyAsynRz6ft5HnnHgXvzaBpls5fAzhgKh8o",
    authDomain: "fawwaz-18cd4.firebaseapp.com",
    projectId: "fawwaz-18cd4",
    storageBucket: "fawwaz-18cd4.appspot.com",
    messagingSenderId: "546868129232",
    appId: "1:546868129232:web:024d4d9f506ce7ec4c9dd5"
    };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export const storage = getStorage(app);


export { db, auth, provider };

