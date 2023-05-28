import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { app } from '../../Component/Firebase/firebase'

export const AuthContext = createContext(null);
const auth = getAuth( app );

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    //create user
    const CreateUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    //update
    const updateUserProfile = (name, photo) => {
      return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
          })
    }
    // user login
    const logIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    //user logOut
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    //State Change NextOrObserver
    useEffect(() => {
        const unSubscriber = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        })
        return () => {
            return unSubscriber();
        }
    }, [])

    const authInfo = {
        user,
        loading,
        CreateUser,
        updateUserProfile,
        logIn,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;