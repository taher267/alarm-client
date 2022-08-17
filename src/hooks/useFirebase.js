import firebase from "../Firebase/firebase.config";

import { useState, useEffect } from "react";
import {
  GoogleAuthProvider,
  getAuth,
  GithubAuthProvider,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  TwitterAuthProvider,
  FacebookAuthProvider,
  signOut,
  signInWithPopup,
  // updateProfile,
} from "firebase/auth";
firebase();
const auth = getAuth();
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const twitterProvider = new TwitterAuthProvider();
const fbProvider = new FacebookAuthProvider();

export default function useFirebase() {
  const [error, setError] = useState("");
  const [currentUser, setCurrentUser] = useState({});
  const [fireLoading, setFireLoading] = useState(true);
  //Login with Google
  const signinWithGoogle = () => {
    setFireLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  //Login with Github
  const signinWithGithub = () => {
    setFireLoading(true);
    return signInWithPopup(auth, githubProvider);
  };

  //Login with Twitter
  const signInWithTwiiter = () => {
    setFireLoading(true);
    return signInWithPopup(auth, twitterProvider);
  };

  //Login with Twitter
  const signInWithFb = () => {
    setFireLoading(true);
    return signInWithPopup(auth, fbProvider);
  };

  //Login with Email and Password
  const signinWithEmailPass = ({ email, password }) => {
    setFireLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //Signup with Github
  const signUpWithEmailPass = ({ email, password }) => {
    setFireLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //Logout
  const logout = () => {
    setFireLoading(true);
    signOut(auth)
      .then(() => {})
      .finally(() => setFireLoading(false));
  };

  useEffect(() => {
    setFireLoading(true);
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) setCurrentUser(user);
      else setCurrentUser({});
      setFireLoading(false);
    });
    return () => unsubscribe;
  }, []);
  return {
    currentUser,
    fireLoading,
    setFireLoading,
    logout,
    signinWithGoogle,
    signinWithGithub,
    signinWithEmailPass,
    signUpWithEmailPass,
    signInWithTwiiter,
    signInWithFb,
    error,
  };
}
