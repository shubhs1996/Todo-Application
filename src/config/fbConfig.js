import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyA9OrUdmVFoGt74xWDP-6jbIX68xgb0aH4",
    authDomain: "mario-plan-34b79.firebaseapp.com",
    databaseURL: "https://mario-plan-34b79.firebaseio.com",
    projectId: "mario-plan-34b79",
    storageBucket: "mario-plan-34b79.appspot.com",
    messagingSenderId: "903182085344",
    appId: "1:903182085344:web:800ef53dfc98d63f0a7485",
    measurementId: "G-ZD6LWSFHEC"
  };

firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots:true });


export default firebase;
