function initializeApp() {

// TODO(developer) Replace the following with your app's Firebase configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
var firebaseConfig = {
  apiKey: "AIzaSyC2HQBdHqdRnRlFSzdUbblhmXu8w5L2zSA",
  authDomain: "bentleyseventkalender.firebaseapp.com",
  databaseURL: "https://bentleyseventkalender-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "bentleyseventkalender",
  storageBucket: "bentleyseventkalender.appspot.com",
  messagingSenderId: "877220977131",
  appId: "1:877220977131:web:a4ac3d50095f8ec341a1ae"
};

firebase.initializeApp(firebaseConfig);
const firestore= firebase.firestore()
}
