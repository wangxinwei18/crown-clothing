/*
The error message "FirebaseError: Firebase: Error 
(auth/cancelled-popup-request)" occurs when the user
 closes the Firebase Auth popup before completing 
 the sign-in process. This error can occur when the user
  clicks outside the popup window or presses the 
  back button on their browser. You can try to handle 
  this error by catching it and displaying an appropriate
   message to the user. Here is an example 
   of how to handle this error in JavaScript:
*/

// firebase.auth().signInWithPopup(provider).catch(function(error) {
//     if (error.code === 'auth/cancelled-popup-request') {
//       // Handle popup closed by user error
//     } else {
//       // Handle other errors
//     }
//   });
