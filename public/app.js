const signInBtn = document.getElementById("signInBtn");
const signOutBtn = document.getElementById("signOutBtn");

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

// Sign in event handlers

signInBtn.onclick = () => auth.signInWithPopup(provider);
signOutBtn.onclick = () => auth.signOut();

const whenSignedIn = document.getElementById("whenSignedIn");
const whenSignedOut = document.getElementById("whenSignedOut");
const userDetails = document.getElementById("userDetails");

auth.onAuthStateChanged((user) => {
  if (user) {
    // Signed In
    whenSignedIn.hidden = false;
    whenSignedOut.hidden = true;
    userDetails.innerHTML = `<h3>Hello ${user.displayName}! </h3> <p>User ID: ${user.uid}</p>`;
  } else {
    // Not Signed In
    whenSignedIn.hidden = true;
    whenSignedOut.hidden = false;
    userDetails.innerHTML;
  }
});
