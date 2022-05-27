import {
  createUserWithEmailAndPassword, getAuth, getIdToken, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeFirebase from "../FirebaseInit";
// initialize Firebase app
initializeFirebase();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIstLoading] = useState(true);
  const [authError, setError] = useState("");
  const [admin, setAdmin] = useState('');
// console.log(admin)

  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  const registerUser = (email, password, name,phone,addres, navigate) => { 
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Error Handel
        setError("");
        // name update
        const newUser = { email, displayName: name,phone,addres,navigate};
        setUser(newUser);
        // save User to the database  
        saveUser(email, name,phone,addres, 'POST');
        // name with Firebase
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {})
          .catch((error) => {});
        // Login return to the Private Page
        navigate("/");
      })
      .catch((error) => {
        // ..
      });
  };

  const loginUser = (email, password, location, navigate) => {
    // Loading
    setIstLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Login return to the Private Page
        const destination = location?.state?.from || "/";
        navigate(destination);
        // name with Firebase

        // error handel
        setError("");
      })
      .catch((error) => {
        // error handel
        setError(error.message);
      })
      // Loading
      .finally(() => setIstLoading(false));
  };

  const signImWithGoogle = (location, navigate) => {
    setIstLoading(true);
    signInWithPopup(auth, provider)
      .then((result) => {
        // user data save or update
        const user = result.user;
        saveUser(user.email, user.displayName, 'PUT');
        const destination = location?.state?.from || "/";
        navigate(destination);
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIstLoading(false));
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        getIdToken(user)
        .then((idToken) => localStorage.setItem('idToken', idToken))
        setUser(user);
      } else {
        setUser({});
      }
      // Loading
      setIstLoading(false);
    });
    return () => unsubscribe;
  }, []);

  const logOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      })
      // Loading
      .finally(() => setIstLoading(false));
  };

  // save User to the database
  const saveUser = (email, displayName,phone,addres,method) => {
    const user = { email, displayName, addres, phone};
    fetch("https://sleepy-journey-86126.herokuapp.com/users", {
      method: method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    }).then();
  };
  
  useEffect(() =>{
    fetch(`https://sleepy-journey-86126.herokuapp.com/users/${user.email}`)
    .then(res => res.json())
    .then(data => setAdmin(data.admin))
  }, [user.email])
  return {
    user,
    registerUser,
    loginUser,
    logOut,
    isLoading,
    authError,
    signImWithGoogle,
    admin,
  };
};

export default useFirebase;
