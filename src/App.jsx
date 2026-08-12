import Navbar from "./Components/Navbar"
import { Route,Routes } from "react-router-dom"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import Login from "./Pages/Login"
import MyApoinment from "./Pages/MyApoinment"
import Apoinment from "./Pages/Apoinment"
import Doctors from "./Pages/Doctors"
import MyProfile from "./Pages/MyProfile"

const App = () => {
  return (
    <>
    <Navbar />
    <hr className="container m-auto"/>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/myapoinment" element={<MyApoinment />}/>
      <Route path="/apoinment" element={<Apoinment />}/>
      <Route path="/doctors" element={<Doctors />}/>
      <Route path="/myprofile" element={<MyProfile />}/>
    </Routes>
    </>
  )
}

export default App
