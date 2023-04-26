
import React from 'react';
import './nav.css'
//import 'schoolCode.png' from '../../../public'; // import your logo image file 
// Have a nav bar to show about us and learn more, this needs to be a link
// if we have time have a back and next button

function NavBar() {
  // nav bar, with link for about us page, learn more, logo and search box //
  return (
    <nav className="nav-bar"> 
      <ul>
        <li>
          <a href="#home">
            <img src="https://www.schoolofcode.co.uk/static/logo-51c754388b198e5bbb0d08a971ebbfa2.png" alt="Your Logo" width="75" height="75"/>
          </a>
        </li>
        <li><a href="#about">About Us</a></li>
        <li><a href="#learn-more">Learn More</a></li>
        <li className='search'>
          {/* <form >
            <input type="text" placeholder="Search..."/>
            <button type="submit">Go</button>
          </form> */}
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;



