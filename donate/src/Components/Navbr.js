import React, { useState } from "react";
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router-dom';

import { Link, Redirect } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./navbar.css";
import { FaBars } from 'react-icons/fa'
import { ImCross } from 'react-icons/im'
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";
import HomePage from "../Pages/HomePage";
import { BiDonateBlood } from "react-icons/bi";
import { TbLogout } from "react-icons/tb";
import { PiSignInBold } from "react-icons/pi";

function Nvbar() {
  const [mobile, setMobile] = useState(false);
  const navigate = useNavigate()
  const { logout } = useLogout()
  const { user } = useAuthContext()

  const logoutFrom = () => {
    logout();
    navigate('/login')
  }

  const HomeP = () => {
    navigate('/')

  }

  return (
    <nav className="nvbr ">
      <div className="container1">
        <h3 className="logo h2" onClick={HomeP}><BiDonateBlood /> Purnota</h3>

        <ul className={mobile ? "nv-links-mobile " : "nv-links"} >
          <Link to='/'><li>Home</li></Link>
          <Link to='/aboutus'><li>About Us</li></Link>
          <Link to='/help'><li>Need Help</li></Link>
          <Link to='/donate'><li>Donate</li></Link>
          <Link to='/signuporg'><li>signuporg</li></Link>


        
          </ul>

          <div className="pb-3">
            {user && (
              <li>
                {/* <span style={{color:'red',fontSize:'4px'}}>{user.email}</span> */}
                <button onClick={logoutFrom} className="ml-6 h5" style={{ left: '88px', color: 'white' }} >log out <TbLogout />
                </button>
              </li>
            )}
            {!user && (
              <li >
                <button onClick={logoutFrom} className="ml-6 h5" style={{ left: '88px', color: 'white' }}>Sign in <PiSignInBold />
                
                </button>
              </li>
            )}
          </div>
          


        





        <button className="mobile-menu-icon" onClick={() => setMobile(!mobile)} >
          {mobile ? <ImCross /> : <FaBars />}
        </button>
      </div>

    </nav>

  );
}
export default Nvbar