import { Link } from "react-router-dom"
import Button from '@mui/material/Button';
import ButtonGroup from "@mui/material/ButtonGroup";

const Navbar = () => {
  return (
    <nav>
        <div className="container flex justify-between items-center box-shadow m-auto m-4">
          <div><Link to="/"><img className=" size-30 h-15" src="logo.svg" /></Link></div>
          <div >
            <ul className="flex justify-center items-center">
              <li className="hover:bg-gray-200 active:bg-gray-300  py-1 px-4 rounded"><Link to="/">Home</Link></li>
               <li className="hover:bg-gray-200 py-1 px-4 rounded active:bg-gray-300"><Link to="doctors">All Doctors</Link></li>
                 <li className="hover:bg-gray-200 py-1 px-4 rounded active:bg-gray-300"><Link to="about">About</Link></li>
                <li className="hover:bg-gray-200 py-1 px-4 rounded active:bg-gray-300"><Link to="contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <Link to="login"> <ButtonGroup
      disableElevation
      variant="contained"
      aria-label="Disabled button group"
    >
      <Button >Create Abbount</Button>


    </ButtonGroup></Link>
    
          </div>
        </div>
        </nav>
  )
}

export default Navbar
