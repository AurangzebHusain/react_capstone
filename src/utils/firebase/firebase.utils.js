import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithRedirect,
  createUserWithEmailAndPassword,
  //   signInWithGooglePopup,
  signInWithPopup,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCtJtFuYPuqCj1DusjOJ6q6tvKiKIvTWlY",
  authDomain: "capstoneecommerce-37dc2.firebaseapp.com",
  projectId: "capstoneecommerce-37dc2",
  storageBucket: "capstoneecommerce-37dc2.appspot.com",
  messagingSenderId: "425881926496",
  appId: "1:425881926496:web:c45db49d3f5d9033b9fc05",
  measurementId: "G-Z19ZB982BS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, provider);

// const analytics = getAnalytics(app);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapShot = getDoc(userDocRef);
  if (!(await userSnapShot).exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (e) {
      console.log("Error creating the user", e.message);
    }
  }
  return userDocRef;
};

export const signInAuthWithEmailAndPassword = async (form) => {
  const { email, password } = form;
  if (!email || !password) return;

  try {
    return await signInWithEmailAndPassword(auth, email, password);
  } catch (e) {
    console.log("Error creating the user", e.message);
    throw e;
  }
};

export const signOutUser = async () => {
  await signOut(auth);
};
//   return userDocRef;

export const onAuthStateChangedListener = (callback) =>
  // if(!callback) return "Error";
  onAuthStateChanged(auth, callback);
