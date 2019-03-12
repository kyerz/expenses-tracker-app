import * as firebase from 'firebase'

const config = {
  apiKey: "AIzaSyB_W78WKbXNcdCGG7A1bzPEFvF2Rpjj4qI",
  authDomain: "expenses-tracker-1a008.firebaseapp.com",
  databaseURL: "https://expenses-tracker-1a008.firebaseio.com",
  projectId: "expenses-tracker-1a008",
  storageBucket: "expenses-tracker-1a008.appspot.com",
  messagingSenderId: "473758814187"
}

firebase.initializeApp(config);

const database = firebase.database()

export { firebase, database as default }
