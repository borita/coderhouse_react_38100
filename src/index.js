import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
//import NavBarTournaments from './components/NavBarTournaments';
import reportWebVitals from './reportWebVitals';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyD7pNTYnYlPp-G72DO-BrKJRuqcuPAiq8s",
  authDomain: "coderhousetennistournaments.firebaseapp.com",
  projectId: "coderhousetennistournaments",
  storageBucket: "coderhousetennistournaments.appspot.com",
  messagingSenderId: "26755010816",
  appId: "1:26755010816:web:fc0c49736d3b7f88bf23e5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
