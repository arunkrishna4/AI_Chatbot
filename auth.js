// auth.js
import { auth } from "./firebase-config.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

export function handleSignup(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

export function handleLogin(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}
