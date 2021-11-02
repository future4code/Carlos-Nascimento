import { useState } from "react";
import { useEffect } from "react";
import { createContext, useContext } from "react";
import { useHistory } from "react-router";
import { auth, firebase } from "../services/firebase";

export const AuthContext = createContext();

export function AuthContextProvider(props) {
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        const { displayName, photoURL, uid } = user;

        if (!displayName || !photoURL) {
          throw new Error("Missing information from Google Account");
        }

        setUser({
          id: uid,
          name: displayName,
          avatar: photoURL,
        });
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const [user, setUser] = useState();

  async function SigninWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    const result = await auth.signInWithPopup(provider);

    if (result.user) {
      const { displayName, photoURL, uid } = result.user;

      if (!displayName || !photoURL) {
        throw new Error("Missing information from Google Account");
      }

      setUser({
        id: uid,
        name: displayName,
        avatar: photoURL,
      });
    }
  }

  async function Logout(){
    await firebase.auth().signOut()
  }
  return (
    <AuthContext.Provider value={{ setUser, user, SigninWithGoogle, Logout }}>
      {props.children}
    </AuthContext.Provider>
  );
}



export function useAuth() {
  const context = useContext(AuthContext);

  const { setUser, user, SigninWithGoogle, Logout } = context;

  return { setUser, user, SigninWithGoogle, Logout };
}
