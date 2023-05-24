import React, { useState, useEffect } from "react";

import "./NavbarStyles.css";
import { Link } from "react-router-dom";

import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      setIsVisible(prevScrollPos > currentScrollPos);

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  const navbarStyle = {
    position: 'fixed',
    top: isVisible ? '0' : '-10vh',
    transition: 'top 0.3s ease-in-out',
    width: '100%',
  };

  const [color, setColor] = useState(false);
  const changeBackgroundColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeBackgroundColor);




  return (
    <div style={navbarStyle} className={color ? ("header header-bg") : ("header")}>
      <Link to="/">
        <h1>Kevin's Portfolio.</h1>
      </Link>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/project">Project</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div onClick={handleClick} className="hamburger">
        {click ? <FaTimes /> : <GiHamburgerMenu />}
      </div>
    </div>
  );
};

export default Navbar;
