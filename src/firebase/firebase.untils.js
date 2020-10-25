import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBc088Z-jubFEc24EzyNo_DbzuDbmKIu3c",
    authDomain: "crwn-db-1d551.firebaseapp.com",
    databaseURL: "https://crwn-db-1d551.firebaseio.com",
    projectId: "crwn-db-1d551",
    storageBucket: "crwn-db-1d551.appspot.com",
    messagingSenderId: "276605001526",
    appId: "1:276605001526:web:acab6f56906e12001c9d97",
    measurementId: "G-YXLJCLB2Z7"
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account' });

export const signInwithGoogle = () => auth.signInWithPopup(provider);