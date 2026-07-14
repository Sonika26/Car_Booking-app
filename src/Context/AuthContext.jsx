import {createContext,useEffect,useState,} from "react";

import {createUserWithEmailAndPassword,signInWithEmailAndPassword, signOut,onAuthStateChanged,GoogleAuthProvider,signInWithPopup} from "firebase/auth";

import {doc,setDoc,getDoc,} from "firebase/firestore";

import { auth, db } from "../firebase";

export const AuthContext = createContext();

const AuthProvider = ({children,}) => {
  const [user, setUser] =useState(null);

  //register document 


  const googleLogin = async () => {
  const provider = new GoogleAuthProvider();
  const res = await signInWithPopup(auth, provider);

  const userData = {
    uid: res.user.uid,
    name: res.user.displayName,
    email: res.user.email,
    photoURL: res.user.photoURL,
  };

  setUser(userData);
  return userData;
};

  const register = async ( email,password) => {
    const res = await createUserWithEmailAndPassword( auth,email,password);
    setUser(res.user);
    return res.user;
  };


//login whe user is in databse
const login = async (email,password) => {
  const res =await signInWithEmailAndPassword( auth, email, password );
  setUser(res.user);
  return res.user;
  console.log("Auth user");
  console.log(res.user);
};
//logout
  const logout = async () => {
    await signOut(auth);
    setUser(null);
  };


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return unsubscribe;
  }, []);


    return (
      <AuthContext.Provider
      value={{
          user,
          register,
          login,
          logout,
          googleLogin
      }}
      >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;