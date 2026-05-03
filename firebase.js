import { initializeApp } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-app.js";

import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  updateDoc
} from "https://www.gstatic.com/firebasejs/12.12.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBLoKDJBx2duS4Be9AZ30SP28UDcpB8TxU",
  authDomain: "lists-maker.firebaseapp.com",
  projectId: "lists-maker",
  storageBucket: "lists-maker.firebasestorage.app",
  messagingSenderId: "815131393205",
  appId: "1:815131393205:web:3cd55df04a51e31bb312fc"
};

// INIT
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// 🔥 GLOBAL (VERY IMPORTANT)
window.db = db;
window.collection = collection;
window.addDoc = addDoc;
window.getDocs = getDocs;
window.deleteDoc = deleteDoc;
window.doc = doc;
window.updateDoc = updateDoc;

console.log("✅ Firebase Connected");