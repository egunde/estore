import "firebase/auth";
import { getAuth, GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import "firebase/storage";
import { getStorage } from "firebase/storage";
import app from "./firebaseInit";

export const firestore = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const provider = new GoogleAuthProvider();
export const signOut = () => auth.signOut();

export function signInWithGoogle() {
  provider.addScope('https://www.googleapis.com/auth/plus.login')
  signInWithRedirect(auth, provider)
}

export function createGoogleProvider() {
  provider.addScope("profile");
  provider.addScope("email");
  return provider;
}

export default app;