import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../FireBase/Firebase.config";
export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
  //  useState hook to store the current use info
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  // function to register new user
  const createUser = (email, password) => {
    // set loading to true until data is properly fetched
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  // function to current user Sign In
  const signIn = (email, password) => {
    // set loading to true until data is properly fetched
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  // observer the auth state change, and store current user info
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser)
      setLoading(false)
    })
    return () => {
      unsubscribe();
    }
  }, [])


  // function to logout
  const logOut = () => {
    return signOut(auth)
  }

  const authInfo = {
    user, createUser, signIn, loading, logOut
  }

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;