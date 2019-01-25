// import 'firebase-functions';

import * as firebase from 'firebase';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: "education-charity",
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: "989607735589"
};

firebase.initializeApp(config);

const database = firebase.database();

export { database };

export default firebase;

