import firebase from 'firebase/compat/app';
import "firebase/compat/auth";

const app = firebase.initializeApp({
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: "react-firebase-redux-49748.firebaseapp.com",
    projectId: "react-firebase-redux-49748",
    storageBucket: "react-firebase-redux-49748.appspot.com",
    messagingSenderId: "285460461270",
    appId: "1:285460461270:web:25f829312d2f5713d6fb77"
});

export const auth = app.auth();
export default app;