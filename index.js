// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBYs665e0N8YXt-2V2k5uncdahhWMtPcZk",
    authDomain: "login-web-site-830be.firebaseapp.com",
    projectId: "login-web-site-830be",
    storageBucket: "login-web-site-830be.appspot.com",
    messagingSenderId: "880111200942",
    appId: "1:880111200942:web:ecb9fa5546d794a5d45b3f"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const database = firebase.database();

// Function to show login form
function showLogin() {
    document.getElementById("login").classList.remove("hidden");
    document.getElementById("register").classList.add("hidden");
}

// Function to show register form
function showRegister() {
    document.getElementById("login").classList.add("hidden");
    document.getElementById("register").classList.remove("hidden");
}

// Register function
function register() {
    console.log("Register function called"); // Debugging line
    const first_name = document.getElementById('first_name').value;
    const last_name = document.getElementById('last_name').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;

    if (!validate_email(email) || !validate_password(password)) {
        alert('Email or password not correct');
        return;
    }
    if (!validate_field(first_name) || !validate_field(last_name)) {
        alert('One or more extra fields are out of line!!');
        return;
    }

    auth.createUserWithEmailAndPassword(email, password)
        .then(function () {
            const user = auth.currentUser;
            const database_ref = database.ref();

            const user_data = {
                first_name: first_name,
                last_name: last_name,
                email: email,
                last_login: Date.now()
            };

            database_ref.child('users/' + user.uid).set(user_data);
            alert('User Created!!');
        })
        .catch(function (error) {
            const error_message = error.message;
            alert(error_message);
        });
}

// Login function
function login() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    auth.signInWithEmailAndPassword(email, password)
        .then(function () {
            alert('User Logged In!!');
        })
        .catch(function (error) {
            const error_message = error.message;
            alert(error_message);
        });
}

// Validation functions
function validate_email(email) {
    const exp = /^[^@]+@\w+(\.\w+)+\w$/;
    return exp.test(email);
}

function validate_password(password) {
    return password.length >= 6;
}

function validate_field(field) {
    return field != null && field.length > 0;
}
