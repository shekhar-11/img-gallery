// signInWithPop.ts
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { provider } from "../firebase/fbconfig";

const auth = getAuth();

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    return user;
  } catch (error: any) {
    console.error("Google sign-in error:", error.message);
    throw error;
  }
};
