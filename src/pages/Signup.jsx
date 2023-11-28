import { motion } from "framer-motion";
import signinWithGoogle from "../lib/googleSignIn";

const Signup = () => {
  return (
    <div className="bg-gray-700 text-white h-screen w-full flex items-center justify-center flex-col">
      <div className="text-center my-4">
        <h1 className="text-2xl">Welcome to InstaFire</h1>
        <p className="my-2">Please Sign in to continue using the app.</p>
      </div>
      <motion.button
        whileTap={{ scale: 1 }}
        whileHover={{ scale: 1.04 }}
        className="border border-white px-6 py-2 rounded-full transition-colors hover:border-yellow-500 hover:text-yellow-500"
        onClick={signinWithGoogle}
      >
        Sign In With Google
      </motion.button>
    </div>
  );
};

export default Signup;
