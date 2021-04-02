const signInBtn = document.getElementById("signInBtn");
const signOutBtn = document.getElementById("signOutBtn");

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

// Sign in event handlers

signInBtn.onclick = () => auth.signInWithPopup(provider);
signOutBtn.onclick = () => auth.signOut();
