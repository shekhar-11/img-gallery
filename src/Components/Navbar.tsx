
import { signOut } from "firebase/auth";
import { auth } from "../firebase/fbconfig";



const Navbar = () => {
  const handleLogout = async () => {
    
    await signOut(auth).then(()=>
    console.log("User signed out successfully")
  
  ); 
  }
   
  return (
    // <div className="sm:w-3/5 ml-auto mr-auto flex ">
        
   <div className="navbar bg-base-100 shadow-sm justify-center">
  <div className="navbar-start">
    <div className="dropdown">
    </div>
    <a className="font-bold underline text-xl">Img-Gallery</a>
  </div>
 
  <div className="navbar-end">
    <button onClick={handleLogout} className="btn btn-ghost">LogOut</button>
  </div>
</div>
    // </div>
  )
}

export default Navbar