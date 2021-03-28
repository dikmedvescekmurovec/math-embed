import "firebase/analytics";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/functions";
import "firebase/performance";

const firebaseConfig = {
  apiKey: "AIzaSyBaFBBrDwMCf6w-zqenwkKktCACKxKc1-4",
  authDomain: "math-embed.firebaseapp.com",
  projectId: "math-embed",
  storageBucket: "math-embed.appspot.com",
  messagingSenderId: "577449916648",
  appId: "1:577449916648:web:47eacf46585ce38735715d",
  measurementId: "G-3RXW4K9YGT",
};

export default function initFirebase() {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);

    if (window.location.hostname === "localhost") {
      firebase.functions().useEmulator("localhost", 5001);
      firebase.firestore().settings({
        host: "localhost:8080",
        ssl: false,
      });
    }

    // Check that `window` is in scope for the analytics module!
    if (typeof window !== "undefined") {
      if ("measurementId" in firebaseConfig) {
        // firebase.analytics();
        // firebase.performance();
      }
    }
  }
}
