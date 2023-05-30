import { initializeApp } from 'firebase/app';
import { 
    getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider 
} from 'firebase/auth';
import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA9SFQy2fWhyeEgz1lPkRj8FrXOz-8GRPE",
    authDomain: "crown-clothing-db-79b7b.firebaseapp.com",
    projectId: "crown-clothing-db-79b7b",
    storageBucket: "crown-clothing-db-79b7b.appspot.com",
    messagingSenderId: "391684401321",
    appId: "1:391684401321:web:6095dd602fa6b2190e61b8"
  };
  
  // Initialize Firebase
  const firebasesApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();

  provider.setCustomParameters({
    prompt: "select_account"
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
  export const db = getFirestore();

  export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);
    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot.exists());

    // if user data does not exist
    // create / set the document with the data from userAuth in my collection
    if(!userSnapshot.exists()) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
        await setDoc(userDocRef, {
          displayName,
          email,
          createdAt
        });
        
      } catch (error) {
        console.log('error creating user', error.message)
      }
    }
    // if user data exists
    return userDocRef;
  } 