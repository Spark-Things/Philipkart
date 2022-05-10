import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Navbar() {
       const navigate =  useNavigate();
    const jwt = localStorage.getItem('jwt');

    const logout = () =>{

      localStorage.removeItem('jwt');
      navigate("/login");
    }
  return (
    <nav>
    <div class="nav-wrapper #002c44 light-blue lighten-5 navbar">
      <Link to="/" class="brand-logo left">Philpcart</Link>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
      <div className='rightNav'>
       <li>
                <Link to="/cart"><i className='material-icons medium cart'>add_shopping_cart</i></Link>
              </li>
        {
          jwt ?
              <li className='logoutbtn' style={{cursor: "pointer",padding:"0 20px"}}><i className='material-icons medium ' onClick={logout}>logout</i></li>
              :
          <>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/signUp">Sign Up</Link></li>
          </>
        }
        </div>
      </ul>
    </div>
  </nav>
  )
}

export default Navbar