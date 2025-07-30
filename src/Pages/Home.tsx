import Gallery from "../Components/Gallery"
import Navbar from "../Components/Navbar"
import Upload from "../Components/Upload"




export const Home = ()=>{



    return (

        <div className="flex flex-col justify-center max-w-4xl  mx-auto mt-5 gap-10" >
        
        <Navbar/>
        <Upload/>
        <Gallery/>
        </div>

      
    )
}