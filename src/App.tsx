import { Route, Routes } from "react-router-dom"
import { Signup } from "./Pages/Signup.tsx"
import { Home } from "./Pages/Home.tsx"
import { AuthProvider } from "./context/auth.tsx"
import PublicRoutes from "./routes/PublicRoutes.tsx"
import PrivateRoutes from "./routes/PrivateRoutes.tsx"

function App() {
  

  return (
    <>
    <AuthProvider>

    <Routes>
      <Route path="/signup" element={
        <PublicRoutes>
          <Signup/>
        </PublicRoutes>
      }/>
      <Route path="/" element= {
        <PrivateRoutes>
          <Home/>
        </PrivateRoutes>
        
        }/>
      {/* <Route path="/home" element= {<Home/>}/> */}
    </Routes>
    </AuthProvider>

    
      
    </>
  )
}

export default App
