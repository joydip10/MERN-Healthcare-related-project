import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, onAuthStateChanged, signOut, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useEffect, useState } from 'react';
import firebaseInitialize from './../Firebase/firebase.initialize';
firebaseInitialize();

const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {

    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading,setIsLoading]=useState(true);
    const [displayName,setDisplayName]=useState('');
    const auth = getAuth();



    useEffect(() => {
        setIsLoading(true);
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
        
    }, [])

    const signUpWithEP = (name,email, password) => {
        setIsLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInWithEP = (email, password) => {
        setIsLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
            
    }

    const setUserName=(name)=>{
        setIsLoading(true);
        updateProfile(auth.currentUser,{displayName:name})
          .then(()=>{
              setError('');
              setDisplayName(auth.currentUser.displayName);
          })
          .catch(err=>{
            setError(err.message);
          })
        .finally(()=>setIsLoading(false));
      }
    
    const googleSignIn = () => {
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const logOut = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            setUser({});
            setError("");
            setDisplayName("");
        }).catch((error) => {
            setError(error.message);
        })
        .finally(()=>setIsLoading(false));
    }


    return { user, error, signUpWithEP, signInWithEP, googleSignIn, logOut,isLoading,displayName,setUser,setDisplayName,setError,setUserName,setIsLoading }
}

export default useFirebase;