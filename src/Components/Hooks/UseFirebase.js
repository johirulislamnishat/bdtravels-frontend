import { useEffect, useState } from "react"
import initializeAuthentication from "../Authentication/Firebase/firebase.init";
import { GoogleAuthProvider, getAuth, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');

    const GoogleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    const signInUsingGoogle = () => {
        return signInWithPopup(auth, GoogleProvider)

            .catch((error) => {

                // Handle Errors here.
                const errorCode = error.code;
                setError(error.message);

            });

    }

    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
        })
    }, [])

    return {
        user,
        error,
        signInUsingGoogle,
        logOut,
    }


}

export default useFirebase;