import firebase from "firebase/app";
import "firebase/auth";

const provider = new firebase.auth.GoogleAuthProvider();

function signInWithGoogle() {
  firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      // Signed in successfully
      const user = result.user;
      console.log(user);
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
}

// This code uses Firebase Authentication to sign in with Google.
// If the sign-in flow is canceled by the user before completing,
// the error message “FirebaseError:
// Firebase: Error (auth/cancelled-popup-request)” will be caught
// by the catch block and handled accordingly
