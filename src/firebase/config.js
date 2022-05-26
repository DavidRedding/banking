import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBup4eIi4X0CdNNasvUKWWR3XzMMzWbtns',
  authDomain: 'bank-a797a.firebaseapp.com',
  projectId: 'bank-a797a',
  storageBucket: 'bank-a797a.appspot.com',
  messagingSenderId: '85845769634',
  appId: '1:85845769634:web:a7ad0602dbcb547a1746fb',
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

export { projectFirestore, projectAuth };
