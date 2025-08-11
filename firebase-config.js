import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAiivzpIEsKhfOe2EMY3m3OxBmXjdAL8pQ",
  authDomain: "zowi-9f8e8.firebaseapp.com",
  databaseURL: "https://zowi-9f8e8-default-rtdb.firebaseio.com",
  projectId: "zowi-9f8e8",
  storageBucket: "zowi-9f8e8.firebasestorage.app",
  messagingSenderId: "581091477130",
  appId: "1:581091477130:web:462d677514a86f7d06cf73",
  measurementId: "G-TCJQ1L7BGZ"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth };
