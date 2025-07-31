import { useState } from "react";
import { auth } from "../firebase/fbconfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export const Signup = ()=>{

    const [email,setEmail] = useState<string>("");
    const [password,setPassword] = useState<string>("");
    const [error,setError] = useState<string>("");
    const navigate = useNavigate();
    // console.log(email);

    const handleSubmit = async (e:React.FormEvent<HTMLFormElement>)=>{
      e.preventDefault();

        try{
          await createUserWithEmailAndPassword(auth, email, password); 
          navigate("/");
        } 
        catch(err){
          setError(err.message);
          console.log(err.message)
        }
    }

    return (

        <form onSubmit={handleSubmit}>
          {error && error}
        <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col ">
    <div className="text-center ">
      <h1 className="text-5xl font-bold">IMG-Gallery</h1>
      <p className="py-6">
        Sign Up To Enter The Gallery
      </p>
    </div>
    <div className="card bg-base-100 sm:w-[30rem] shadow-2xl">
      <div className="card-body">
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email"  
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />


          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button type="submit" className="btn btn-neutral mt-4">Login</button>
        </fieldset>
      </div>
    </div>
  </div>
</div>
        </form>
    )
}