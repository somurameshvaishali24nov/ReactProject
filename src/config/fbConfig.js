import firebase from 'firebase/app';
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBZrHgm5tjOWXhU3uJF5jxNzPFi9Fou_Jw",
  authDomain: "todo-list-e8d87.firebaseapp.com",
  projectId: "todo-list-e8d87",
  storageBucket: "todo-list-e8d87.appspot.com",
  messagingSenderId: "62033783186",
  appId: "1:62033783186:web:feae43a9d31677ee04b94b"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
