import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js';
import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, signOut, onAuthStateChanged} from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js';

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

document.getElementById('Dashboard').style.display = "none";

document.getElementById('login').addEventListener("click", GoogleLogin);
document.getElementById('logout').addEventListener("click", LogoutUser);
document.getElementById('Glogin').addEventListener("click", GithubLogin);

var provider = new GoogleAuthProvider();
var Gprovider = new GithubAuthProvider();

//gooooooogle
function GoogleLogin() {
    console.log('Login Btn Call')
    signInWithPopup(auth, provider).then(res => {
        console.log(res.user);
        document.getElementById('LoginScreen').style.display = "none";
        document.getElementById('Dashboard').style.display = "block";
        showUserInfo(res.user)
    }).catch(e => {
        console.log(e);
    })
}
function checkAuthState(user) {
    onAuthStateChanged(auth, (user => {
        if (user) {
            document.getElementById('LoginScreen').style.display = "none";
            document.getElementById('Dashboard').style.display = "block";
            showUserInfo(user);
        }
        else {

        }
    }));
}
checkAuthState();
function showUserInfo(user) {
    document.getElementById('userInfo').innerHTML = `
    <center><img src = "${user.photoURL}" style="position: relative; width: 170px; height: 170px; overflow: hidden; border-radius: 50%;"></img>
    <div><br></div>
    <h1 style="">${user.displayName}</h1>
    <div><br></div>
    <h6>${user.email}</h6>
    <div><br></div>
    </center>
    `
}

// githuuuuuuuuub
function GithubLogin(){
    console.log('Login Btn Call for git')
    signInWithPopup(auth, Gprovider).then(res => {
        console.log(res.user);
        let token = res.credential.accessToken;
        let user = res.user;
        showUserInfo(res.user)
    }).catch(error => {
        console.log(error);
    })
}
function GcheckAuthState(user) {
    onAuthStateChanged(auth, (user => {
        if (user) {
            document.getElementById('LoginScreen').style.display = "none";
            document.getElementById('Dashboard').style.display = "block";
            showUserInfo(user);
        }
        else {

        }
    }));
}
GcheckAuthState();

//looooooooogout
function LogoutUser() {
    console.log('Logout Btn Call');
    signOut(auth, provider).then(() => {
        document.getElementById('LoginScreen').style.display = "block";
        document.getElementById('Dashboard').style.display = "none";
    }).catch(e => {
        console.log(e);
    })
}