import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Navbar() {
       const navigate =  useNavigate();
    const jwt = localStorage.getItem('jwt');

    const logout = () =>{

      localStorage.removeItem('jwt');
      navigate("/login");
    }


    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.sidenav');
      // var instances = M.Sidenav.init(elems, options);
    });
  
  return (
  //   <nav>
  //  <div class="nav-wrapper #1976d2 blue darken-2 navbar">
  //     <Link to="/" class="brand-logo left">Philpcart</Link>
  //     <ul id="nav-mobile" class="right hide-on-med-and-down">
  //     <div className='rightNav'>
  //      <li>
  //               <Link to="/cart"><i className='material-icons medium cart'>add_shopping_cart</i></Link>
  //             </li>
  //       {
  //         jwt ?
  //             <li className='logoutbtn' style={{cursor: "pointer",padding:"0 20px"}}><i className='material-icons medium ' onClick={logout}>logout</i></li>
  //             :
  //         <>
  //         <li><Link to="/login">Login</Link></li>
  //         <li><Link to="/signUp">Sign Up</Link></li>
  //         </>
  //       }
  //       </div>
  //     </ul>
  //   </div>
  //   </nav>
     <nav>
    <div class="nav-wrapper  #1976d2 blue darken-2 navbar">
    <Link to="/" class="brand-logo">PhilipKart</Link>
      {/* <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a> */}
      <ul id="nav-mobile" class="right ">
              <li className='sleft'>
                <Link to="/cart"><i className='material-icons medium cart'>add_shopping_cart</i></Link>
              </li>
      <div className='rightNav'>
        {
          jwt ?
              <li className='logoutbtn sright'style={{cursor: "pointer",padding:"0 20px"}}><i className='material-icons medium ' onClick={logout}>logout</i></li>
              :
          <>
          <li className='login'><Link to="/login"><span className='fontsixe'>Login</span></Link></li>
          <li className='sright'><Link to="/signUp"><span className='fontsixe'>Sign Up</span></Link></li>
          </>
        }
        </div>
      </ul>
    </div>
  {/* <ul  class="right hide-on-med-and-down sidenav"id="mobile-demo">
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
      </ul> */}
      </nav>
  )
}

export default Navbar