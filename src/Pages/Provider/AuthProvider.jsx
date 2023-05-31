import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from '../../Component/Firebase/firebase'
import axios from "axios";

export const AuthContext = createContext(null);
const auth = getAuth(app);

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
    // social Login
    const googleAndGithub = (provider) => {
        return signInWithPopup(auth, provider)
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

            /* JWT setUP from axios */
            if (currentUser) {
                axios.post('http://localhost:5000/jwt', { email: currentUser.email })
                    .then(data => {
                        // console.log(data.data.token);
                        localStorage.setItem('token_access', data.data.token )
                        setLoading(false);
                    })
            }
            else{
                localStorage.removeItem('token_access')
            }

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
        googleAndGithub,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;