import { useState } from "react";
import { auth } from "../firebase/fbconfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { signInWithGoogle } from "../Hooks/signInWithPop";
import { useAuth } from "../Hooks/useAuth";

export const Signup = ()=>{
  const {isLoading} = useAuth();
   const handleGoogle = async (e: React.MouseEvent<HTMLButtonElement>) => {
  e.preventDefault();
  try {
    await signInWithGoogle();
    navigate("/"); // ✅ Only after success
  } catch (err: any) {
    console.error("Google sign-in failed:", err.message);
    setError(err.message);
  }
};

    const [email,setEmail] = useState<string>("");
    const [password,setPassword] = useState<string>("");
    const [error,setError] = useState<string>("");
    const navigate = useNavigate();
    // console.log(email);

    // const handleSubmit = async (e:React.FormEvent<HTMLFormElement>)=>{
    //   e.preventDefault();

    //     try{
    //       // await createUserWithEmailAndPassword(auth, email, password); 
    //       // await signInWithGoogle()
    //       navigate("/");
    //     } 
    //     catch(err){
    //       setError(err.message);
    //       console.log(err.message)
    //     }
    // }

    return (

        <form >
          {error && error}
        <div className="bg-black min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 left-1/2 w-48 h-48 bg-white rounded-full blur-3xl animate-pulse"></div>
      </div>
      
      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]" 
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}
      ></div>
      
      {/* Main Container */}
      <div className="bg-white bg-opacity-5 backdrop-blur-xl border border-white border-opacity-10 rounded-3xl p-8 w-full max-w-md relative z-10 shadow-2xl hover:bg-opacity-10 transition-all duration-500 group">
        {/* Logo Section */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 mx-auto mb-6 bg-white rounded-2xl flex items-center justify-center text-3xl shadow-2xl group-hover:scale-110 transition-transform duration-500">
            📸
          </div>
          <h1 className="text-4xl font-black text-white mb-2 tracking-tight">
            Img-Gallery
          </h1>
          <p className="text-gray-400 text-lg font-light">
             Visual universe awaits
          </p>
        </div>

        {/* Welcome Text */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-white mb-2">
            Welcome 
          </h2>
          <p className="text-gray-400 leading-relaxed">
            Sign in to access your curated photo collections and discover new visual stories
          </p>
        </div>

        {/* Google Sign In Button */}
        <button 
          onClick={handleGoogle}
          disabled={isLoading}
          className="w-full bg-white hover:bg-gray-100 text-black font-semibold py-4 px-6 rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 group/btn relative overflow-hidden disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {/* Shimmer Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white via-transparent opacity-0 group-hover/btn:opacity-20 transform -skew-x-12 group-hover/btn:animate-pulse"></div>
          
          {isLoading ? (
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
              <span>Signing in...</span>
            </div>
          ) : (
            <>
              {/* Google Icon */}
              <svg className="w-6 h-6" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <span className="relative z-10" >Continue with Google</span>
            </>
          )}
        </button>

        {/* Features Grid */}
        {/* <div className="mt-8 pt-6 border-t border-white border-opacity-10">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-2 text-gray-300">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">Unlimited Storage</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">Smart Albums</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">Instant Sync</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">Privacy First</span>
            </div>
          </div>
        </div> */}


     
      </div>

      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-3 h-3 bg-white opacity-20 rounded-full animate-bounce"></div>
      <div className="absolute bottom-10 right-10 w-2 h-2 bg-white opacity-30 rounded-full animate-bounce"></div>
      <div className="absolute top-1/2 right-20 w-1 h-1 bg-white opacity-40 rounded-full animate-ping"></div>
      <div className="absolute bottom-20 left-20 w-4 h-4 border border-white opacity-10 rounded-full animate-spin"></div>
    </div>
        </form>
    )
}