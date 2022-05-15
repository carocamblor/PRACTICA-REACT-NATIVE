import app from 'firebase/app';
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDlYZ3TEwPEP98F8dsJVObj2AqBvVzW2Ec",
    authDomain: "prueba-cbcda.firebaseapp.com",
    projectId: "prueba-cbcda",
    storageBucket: "prueba-cbcda.appspot.com",
    messagingSenderId: "489317242824",
    appId: "1:489317242824:web:99ccc5f0f2644da9b2d2fd"
  };

app.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const storage = app.storage();
export const db = app.firestore();
