import Navbar from "./Components/Navbar"
import { Route,Routes } from "react-router-dom"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import Login from "./Pages/Login"
import MyApoinment from "./Pages/MyApoinment"
import Appointment from "./Pages/Appointment"
import Doctors from "./Pages/Doctors"
import MyProfile from "./Pages/MyProfile"
import Footer from "./Components/Footer"
import Register from "./Pages/Register"
const App = () => {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/register" element={<Register />}/>
      <Route path="/myapoinment" element={<MyApoinment />}/>
      <Route path="/appointment/:docId" element={<Appointment />}/>
      <Route path="/doctors" element={<Doctors />}/>
      <Route path="/doctors/:speciality" element={<Doctors />}/>
      <Route path="/myprofile" element={<MyProfile />}/>
    </Routes>
      <Footer />
    </>
  )
}

export default App