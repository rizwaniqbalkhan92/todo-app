import firebase  from 'firebase'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQsiBcKM1UUK0orMcqzABGl2Dy867Aoqw",
  authDomain: "todolist-rizwan.firebaseapp.com",
  projectId: "todolist-rizwan",
  storageBucket: "todolist-rizwan.appspot.com",
  messagingSenderId: "906299287276",
  appId: "1:906299287276:web:7f4c74e8795020764fe7c9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const createTodo=firebase.database().ref('createTask')
export const deleteTodo=firebase.database().ref('deleteTask')
export const updateTodo=firebase.database().ref('updateTask')