import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js';
import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged} from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js';

const firebaseConfig = {
    apiKey: "AIzaSyBTrJ8mBY4dl_aeev2cbSY_6BzY2TmvjU4",
    authDomain: "makuauth.firebaseapp.com",
    projectId: "makuauth",
    storageBucket: "makuauth.appspot.com",
    messagingSenderId: "222851625191",
    appId: "1:222851625191:web:141e91d4571d5530167242",
    measurementId: "G-K87W4P87Y7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.getElementById('loginwithemail').addEventListener("click", login);

//email and passsssword
function login(){
    console.log('btn pressed');
    let email = document.getElementById('email').value;
    let pass = document.getElementById('pass').value;
    signInWithEmailAndPassword(auth, email, pass).then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        location.replace("welcome.html");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
}

onAuthStateChanged(auth, (user => {
    if (user) {
        location.replace("welcome.html");
    }
    else {

    }
}));
