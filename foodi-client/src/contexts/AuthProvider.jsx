import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const googleProvider = new GoogleAuthProvider();
  //create an account
  console.log("dsdsd", app);
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
    // .then((userCredential) => {
    //   // Signed up
    //   const user = userCredential.user;
    //   // ...
    // })
    // .catch((error) => {
    //   const errorCode = error.code;
    //   const errorMessage = error.message;
    //   // ..
    // });
  };

  // signup with gmail

  const signUpWithGmail = () => {
    return signInWithPopup(auth, googleProvider);
  };

  //login using email and password

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //logout

  const logOut = () => {
    signOut(auth);
  };

  //update profile

  const updateuserProfile = ({ name, photoURL }) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoURL,
    });
  };

  //check signed-in user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        setUser(currentUser);
        setLoading(false);
        const uid = user.uid;
        // ...
      } else {
        // User is signed out
        // ...
      }
    });

    return () => {
      return unsubscribe;
    };
  }, []);
  const authInfo = {
    user,
    createUser,
    signUpWithGmail,
    updateuserProfile,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
