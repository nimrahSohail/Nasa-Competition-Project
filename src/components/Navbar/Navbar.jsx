
import React, { useState } from "react";
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import MarineLogo from '../../assets/marine-logo.png'

function Navbar() {
    const [toggleMenu, setToggleMenu] = useState(false);


  return (
    <nav className="app__navbar fixed-top">
      <div className="app__navbar-logo">
        <img src={MarineLogo} />
      </div>

      <ul className="app__navbar-links">
        <li className="p__opensans">
          <a class="nav-link" href="#home">Home</a>
        </li>
        <li className="p__opensans">
          <a class="nav-link"  href="#destination">
          Destinations
          </a>
        </li>
        <li className="p__opensans">
          <a class="nav-link" href="#funfacts">Fun Facts</a>
        </li>
        <li className="p__opensans">
          <a class="nav-link" href="#contact">Contact</a>
        </li>
      </ul>

      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />

        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu
              fontSize={37}
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
            />

            <ul className="app__navbar-smallscreen_links">
        <li className="p__opensans">
          <a class="nav-link" href="#home">Home</a>
        </li>
        <li className="p__opensans">
          <a class="nav-link" href="#destination">Destinations</a>
        </li>
        <li className="p__opensans">
          <a class="nav-link" href="#funfacts">Fun Facts</a>
        </li>
        <li className="p__opensans">
          <a class="nav-link" href="#contact">Contact</a>
        </li>
      </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
