import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDGRI2fVdRg7vnJLmgPA-GVBmle629OWZk",
    authDomain: "instagram-clone-a5a34.firebaseapp.com",
    projectId: "instagram-clone-a5a34",
    storageBucket: "instagram-clone-a5a34.appspot.com",
    messagingSenderId: "339398196505",
    appId: "1:339398196505:web:eb59b56738fdca94ded988"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
