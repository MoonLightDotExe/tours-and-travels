// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyB0TWf9T8APK7RqynMHaK9yudxahwd1L-8',
  authDomain: 'toursandtravels-332c3.firebaseapp.com',
  projectId: 'toursandtravels-332c3',
  storageBucket: 'toursandtravels-332c3.appspot.com',
  messagingSenderId: '1022076200184',
  appId: '1:1022076200184:web:7b6db9e0d5cd734a14070d',
  measurementId: 'G-C025ZZ09LJ',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
export const db = getFirestore()
