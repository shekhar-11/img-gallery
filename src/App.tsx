import { Route, Routes } from "react-router-dom"
import { Signup } from "./Pages/Signup.tsx"
import { Home } from "./Pages/Home.tsx"

function App() {
  

  return (
    <>
    <Routes>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/" element= {<Home/>}/>
      <Route path="/home" element= {<Home/>}/>
    </Routes>

    
      
    </>
  )
}

export default App
