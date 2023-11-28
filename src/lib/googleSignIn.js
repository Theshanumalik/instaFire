import app, { auth } from "../firbase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
export default function signinWithGoogle() {
  signInWithPopup(auth, new GoogleAuthProvider())
    .then((user) => {
      console.log("Login Success", user);
    })
    .catch((err) => {
      console.log("Login Failed", err);
    });
}
