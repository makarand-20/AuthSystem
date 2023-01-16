import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js';
import { getAuth,RecaptchaVerifier,signInWithPhoneNumber,onAuthStateChanged,PhoneAuthProvider} from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js';

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
document.getElementById('loginwithphone').addEventListener("click", loginwithphone);
document.getElementById('validotp').addEventListener("click", validotp);

//recaptchhhhhhhhha
window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {}, auth);
    recaptchaVerifier.render().then((widgetId) => {
        window.recaptchaWidgetId = widgetId;
    });

//send otpppppppppppppppp
function loginwithphone(){
    var phnno = document.getElementById('phonenu').value;
    signInWithPhoneNumber(auth, phnno, window.recaptchaVerifier)
        .then((confirmationResult) => {
            window.confirmationResult = confirmationResult;
            document.getElementById('LoginScreen').style.display = "none";
            document.getElementById('Dashboard').style.display = "block";
        })
        .catch((error) => {
            document.getElementById('errorr').innerHTML = error.message;
        });
}

//validate otpppppppppppppppppppppppp
function validotp(){
    var code = document.getElementById('otpcheck').value;
    confirmationResult.confirm(code).then((result) => {
        // User signed in successfully.
        const user = result.user;
        location.replace("welcome.html");
      }).catch((error) => {
        // User couldn't sign in (bad verification code?)
        document.getElementById('errorrphn').innerHTML = error.message;
        console.log(error);
    });
}  


//check loggin.............................
function checkAuthState(user) {
    onAuthStateChanged(auth, (user => {
        if (user) {
            document.getElementById('LoginScreen').style.display = "none";
            document.getElementById('Dashboard').style.display = "block";
        }
        else {
            
        }
    }));
}
checkAuthState();
