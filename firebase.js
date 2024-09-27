import { initializeApp, getApps } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { API_KEY } from "./config";

// Firebase configuration
const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: "movietime-auth.firebaseapp.com",
  projectId: "movietime-auth",
  storageBucket: "movietime-auth.appspot.com",
  messagingSenderId: "224128187279",
  appId: "1:224128187279:web:4d140a38d497ff059169fa"
};

// Initialize Firebase app
let app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0]; // If already initialized, use that one
}

// Initialize Firebase Auth with AsyncStorage persistence
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});

export { auth };
