import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js';
import { getAuth, signOut,onAuthStateChanged} from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js';

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

document.getElementById('logoutwithemail').addEventListener("click", LogoutUser);


function LogoutUser() {
    console.log('Logout Btn Call');
    signOut(auth).then(() => {

    }).catch(e => {
        console.log(e);
    })
}

onAuthStateChanged(auth, (user => {
    if (!user) {
        location.replace("index.html");
    }
    else {
        document.getElementById('welcomemsg').innerHTML = user.email;
    }
}));