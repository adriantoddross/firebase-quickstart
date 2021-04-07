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

const createThing = document.getElementById("createThing");
const thingsList = document.getElementById("thingsList");

const db = firebase.firestore();
let thingsRef;
let unsubscribe;

auth.onAuthStateChanged((user) => {
  if (user) {
    // Signed In
    whenSignedIn.hidden = false;
    whenSignedOut.hidden = true;
    userDetails.innerHTML = `<h3>Hello ${user.displayName}! </h3> <p>User ID: ${user.uid}</p>`;

    // Database reference
    thingsRef = db.collection("things");

    createThing.onclick = () => {
      const { serverTimestamp } = firebase.firestore.FieldValue;

      thingsRef.add({
        uid: user.uid,
        name: "random item!!!",
        createdAt: serverTimestamp(),
      });

      // Query
      unsubscribe = thingsRef
        .where("uid", "==", user.uid)
        .onSnapshot((querySnapshot) => {
          // Map results to an array of li elements
          const items = querySnapshot.docs.map((doc) => {
            return `<li>Finish putting code here...</li>`;
          });
        });
    };
  } else {
    // Not Signed In
    whenSignedIn.hidden = true;
    whenSignedOut.hidden = false;
    userDetails.innerHTML;
  }
});
