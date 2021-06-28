import React from 'react'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyCcDrEWjXpaHvWEQS6QznUOJIi3_hqxeEE",
    authDomain: "superhero-b81ee.firebaseapp.com",
    projectId: "superhero-b81ee",
    storageBucket: "superhero-b81ee.appspot.com",
    messagingSenderId: "739137004121",
    appId: "1:739137004121:web:207de5b0b6f2e927fd8748",
    measurementId: "G-F1N56HFBVS"
  };
    // Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
export {fire}