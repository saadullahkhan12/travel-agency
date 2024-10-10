import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Correct import for getAuth

const firebaseConfig = {
  apiKey: "AIzaSyCq-sb7xmngwV2PfOvoMZMh8GLjTi4bpxs",
  authDomain: "travel-agency-7ecb6.firebaseapp.com",
  projectId: "travel-agency-7ecb6",
  storageBucket: "travel-agency-7ecb6.appspot.com",
  messagingSenderId: "241160148410",
  appId: "1:241160148410:web:b5c42a78154c42e10f3983",
  measurementId: "G-GTHES8V41S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Initialize Auth

export {
    auth,
    app
};
