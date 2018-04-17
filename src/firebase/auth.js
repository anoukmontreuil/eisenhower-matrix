import { auth } from './firebase';

// Sign Up Using Email
export const doCreateUserWithEmailAndPassword = (email, password) =>
  auth.createUserWithEmailAndPassword(email, password);

// Log In Using Email
export const doLogInWithEmailAndPassword = (email, password) =>
  auth.signInWithEmailAndPassword(email, password);
  
// Log In Using Google
export const doLogInWithGoogle = () => {
  const provider = new auth.GoogleAuthProvider(); // Usually firebase.auth.(...), make sure this causes no issues.
  auth.signInWithPopup(provider);
}

// Log Out
export const doSignOut = () =>
  auth.signOut();

// Password Recovery
export const doPasswordReset = (email) =>
  auth.sendPasswordResetEmail(email);

// Password Update
export const doPasswordUpdate = (password) =>
  auth.currentUser.updatePassword(password);