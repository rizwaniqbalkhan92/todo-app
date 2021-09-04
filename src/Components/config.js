// // Import the functions you need from the SDKs you need
import firebase from 'firebase'
// // import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCcGVQOKpoR44XMvopRV7YZLkia6rOqXXU",
  authDomain: "todo-app-rizwan.firebaseapp.com",
  databaseURL: "https://todo-app-rizwan-default-rtdb.firebaseio.com",
  projectId: "todo-app-rizwan",
  storageBucket: "todo-app-rizwan.appspot.com",
  messagingSenderId: "42413369696",
  appId: "1:42413369696:web:84d58b3d62ea13cc8ad605"
};

// // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
export default firebase

