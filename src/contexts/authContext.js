import React, { useContext, useEffect, useState } from "react";
import { auth } from "../firebase";
const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }
  function signin(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }
  function signout() {
    return auth.signOut();
  }

  const value = { currentUser, signup, signin, signout };

  return (
    !loading && (
      <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    )
  );
}
