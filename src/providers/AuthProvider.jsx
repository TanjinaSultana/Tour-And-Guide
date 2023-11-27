/* eslint-disable react/prop-types */
import React, { createContext, useEffect, useState } from 'react';
import { app } from '../firebase/firebase.config';
import {  GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import useAxiosPublic from '../hooks/useAxiosPublic';
export const AuthContext = createContext(null)
const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();
    const axiosPublic = useAxiosPublic();
const createUser = (email,password) =>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
}
const signIn = (email,password) =>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
}
const logOut = () =>{
    setLoading(true);
    return signOut(auth)
}
const updateUserProfile =(name,photo)=>{
    return updateProfile(auth.currentUser,{
        displayName: name, photoURL:photo
    })
}
const googleSignIn = () =>{
    setLoading(true);
    return signInWithPopup(auth,googleProvider)
}
useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,currentUser=>{
        console.log("current user",currentUser);
        setUser(currentUser)
        if(currentUser){

            console.log('current user',currentUser);
            const userInfo = {email:currentUser.email}
            axiosPublic.post('/jwt',userInfo)
            .then(res=>{
                if(res.data.token){
                    localStorage.setItem('acces token',res.data.token)
                    setLoading(false)
                }
            })
        }else{
            localStorage.removeItem('acces token')
            setLoading(false)
        }
    })
    return () =>{
        return unsubscribe()
    }
},[axiosPublic])
const authInfo = {
    loading,
    createUser,
    signIn,
    logOut,
    updateUserProfile,
    googleSignIn,
    user
}
    return (
       
            <AuthContext.Provider value={authInfo}>
             {children}
            </AuthContext.Provider>
      
    );
};

export default AuthProvider;