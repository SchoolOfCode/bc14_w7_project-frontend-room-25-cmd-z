import React, { useState } from 'react';
import './hamburgerMenu.css'
import { slide as Menu } from 'react-burger-menu'

//import 'schoolCode.png' from '../../../public'; // import your logo image file 
// Have a nav bar to show about us and learn more, this needs to be a link
// if we have time have a back and next button

function Hamburger() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  }

  return (
    <div>
      <button onClick={ handleMenuClick }>
        <span className="hamburger-icon"></span>
      </button>
      <Menu
        width={ '60%' }
        isOpen={ menuOpen }
        onClose={ handleMenuClick }
      >
        <a href="#">About Us</a>
        <a href="#">Learn More</a>
      </Menu>
    </div>
  );
}

export default Hamburger;