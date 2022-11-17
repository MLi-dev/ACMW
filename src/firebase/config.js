import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCji5T-lyTAhyhoX9GKlTS6IVgd1VcpG94",
    authDomain: "acmw-adb59.firebaseapp.com",
    projectId: "acmw-adb59",
    storageBucket: "acmw-adb59.appspot.com",
    messagingSenderId: "225015975533",
    appId: "1:225015975533:web:9348ae721d49b80665b964",
    measurementId: "G-8571BHSPWD"
  };

  firebase.initializeApp(firebaseConfig)

  const projectFirestore = firebase.firestore()
  const projectAuth = firebase.auth()

  export {projectFirestore, projectAuth} 