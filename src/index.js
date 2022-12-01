import {initializeApp} from 'firebase/app';
import { getFirestore, doc, where, getDocs } from 'firebase/firestore';
import {
    setDoc,
    collection,
    addDoc,

    onSnapshot,
    orderBy,
    limit
}from 'firebase/firestore'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = initializeApp( {
    apiKey: "AIzaSyCji5T-lyTAhyhoX9GKlTS6IVgd1VcpG94",
    authDomain: "acmw-adb59.firebaseapp.com",
    databaseURL: "https://acmw-adb59-default-rtdb.firebaseio.com",
    projectId: "acmw-adb59",
    storageBucket: "acmw-adb59.appspot.com",
    messagingSenderId: "225015975533",
    appId: "1:225015975533:web:9348ae721d49b80665b964",
    measurementId: "G-8571BHSPWD"
});
const firestore = getFirestore();

const newCollection = doc(firestore, 'newCollection/11-30-2022')
function writeToDoc() {
    const docData = {
        email: 'anguyen4@scu.edu',
        score:10,
        module: 'Linux',
    };
    setDoc(newCollection,docData, {merge: true})
        .then(() => {
            console.log('value has been written to database')
        })
        .catch((error) => {
            console.log(`error ${error}`)
        });
}

//writeToDoc();
/////////////////////////

//const quizCollection = collection(firestore,'')

// //read a single doc
// async function readASingleDoc() {
//     const mySnapshot = await getDocs(newCollection);
//     if (mySnapshot.exists()) {
//         const docData = mySnapshot.data();
//         console.log(`My date is ${JSON.stringify(docData)}`);
//     }
// }
// readASingleDoc();

// async function queryForDocs() {
//     const memberQuery = query(
//         collection(firestore, 'QuizResults'),
//         where('UserID','==','anguyen4@scu.edu'),
//     );
    
//     const querySnapshot = await getDocs(memberQuery);
//     querySnapshot.forEach((snap) => {
//         console.log(`Documents ${snap.id} contains ${JSON.stringify(snap.data())}`)
//     }); 
// }

// const specialOfTheDay = doc(firestore, '')
console.log('Hello, firestore');
writeToDoc();
