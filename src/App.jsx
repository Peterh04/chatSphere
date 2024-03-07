
import { useContext } from "react"
import Chat from "./components/Chat"
import Chats from "./components/Chats"
import Input from "./components/Input"
import Messages from "./components/Message"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import {
  BrowserRouter,
  createBrowserRouter,
  Navigate,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import { AuthContext } from "./context/AuthContext"


function App() {

  const {currentUser} = useContext(AuthContext)
  

  const ProtectedRoute = ({children}) =>{
    if(!currentUser){
      return <Navigate to = "/login"/>
    }
    return children
  }
 
  return (
  <BrowserRouter>
  <Routes>
    <Route path="/">
<Route index element = {
<ProtectedRoute>
  <Home />
  </ProtectedRoute>
}
/>
<Route path="login" index element = {<Login />}/>
<Route path="register" index element = {<Register />}/>
    </Route>
  </Routes>
  </BrowserRouter>
  )
}

export default App