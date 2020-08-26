import * as firebase from "firebase/app"
import "firebase/auth"
import "firebase/storage"

const app = firebase.initializeApp({
  apiKey: "AIzaSyCTQNadFZF6tsbKV9HCZl1AwwXyQrWav4o",
  authDomain: "woutersite-45fe9.firebaseapp.com",
  databaseURL: "https://woutersite-45fe9.firebaseio.com",
  projectId: "woutersite-45fe9",
  storageBucket: "woutersite-45fe9.appspot.com",
  messagingSenderId: "301059339863",
  appId: "1:301059339863:web:6b82647424c4f1df8c1512",
  measurementId: "G-TN9SNYZW5Z"
})

export default app

export const storage = firebase.storage();
