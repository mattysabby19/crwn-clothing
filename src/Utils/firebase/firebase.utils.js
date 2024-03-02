import { FirebaseApp, initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
} from "firebase/auth";

import {getFirestore, doc, setDoc, getDoc} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBheaNHS3p4PtqAwnL8kdLALP9y0R_3oY4",
  authDomain: "crwn-clothing-db-778c1.firebaseapp.com",
  projectId: "crwn-clothing-db-778c1",
  storageBucket: "crwn-clothing-db-778c1.appspot.com",
  messagingSenderId: "73718788061",
  appId: "1:73718788061:web:80a30d7b5fb2b6440d5034",
};

const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth,provider);
export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db,"users", userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);
    if(!userSnapshot.exists())
    {
        const{ displayName, email } = userAuth;
        const createdAt = new Date();
        try{
            await setDoc(userDocRef, { displayName, email, createdAt})

        }catch(ex)
        {
            console.log('error creating the user',ex.message);

        }

    }else{
        return userDocRef;
    }
    console.log(userSnapshot);
}