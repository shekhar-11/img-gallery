import { Route, Routes } from "react-router-dom"
import { Signup } from "./Pages/Signup.tsx"
import { Home } from "./Pages/Home.tsx"
import { AuthProvider } from "./context/auth.tsx"

function App() {
  

  return (
    <>
    <AuthProvider>

    <Routes>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/" element= {<Home/>}/>
      <Route path="/home" element= {<Home/>}/>
    </Routes>
    </AuthProvider>

    
      
    </>
  )
}

export default App
