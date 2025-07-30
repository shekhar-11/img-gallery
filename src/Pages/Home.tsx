import Gallery from "../Components/Gallery"
import Navbar from "../Components/Navbar"
import Upload from "../Components/Upload"
import { useAuth } from "../Hooks/useAuth.ts";




export const Home = ()=>{
    const {user} = useAuth();
    console.log(user);

    return (

      
        <div className="flex flex-col justify-center max-w-4xl  mx-auto mt-5 gap-10" >
        
        <Navbar/>
        <Upload/>
        <Gallery/>
        </div>

      
    )
}