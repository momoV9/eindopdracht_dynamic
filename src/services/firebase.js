import {initializeApp} from "firebase/app";
import {getFirestore} from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyB65UPD5FexpUpCOnJNjS6weTAzEjGrWl0",
    authDomain: "league-of-legends-9e75b.firebaseapp.com",
    projectId: "league-of-legends-9e75b",
    storageBucket: "league-of-legends-9e75b.appspot.com",
    messagingSenderId: "448027231831",
    appId: "1:448027231831:web:fa1ff2075c05cfcf25c512"
};


const firebaseApp = initializeApp(firebaseConfig);

export const firestoreDB = getFirestore(firebaseApp);

console.log("initialized firebase connection");