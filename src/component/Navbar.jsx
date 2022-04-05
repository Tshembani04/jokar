import React from "react";
import "../styles/Navbar.css";
// This is a React Router v6 app
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import { GiTireIronCross } from "react-icons/gi";

const Navbar = () => {
  const [Mobile, setMobile] = useState(false)

  return (
    <>
    <nav className='navbar'>
      <h3 className='logo'>The Dealers</h3>
      {/*
      if large screen ma xa bhane Mobile add huxa
      if mobile screen ma xa bhane nav-links-mobile add huxa
      */}
      <ul className={Mobile ? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false)}>
        <Link to='/' className='home'>
          <li>Home</li>
        </Link>
        <Link to='/about' className='about'>
          <li>About</li>
        </Link>
        <Link to='/drops' className='services'>
          <li>Drops</li>
        </Link>
        <Link to='/marketplace' className='skills'>
          <li>Market-Place</li>
        </Link>
        <Link to='/community' className='home'>
          <li>Community</li>
        </Link>
      </ul>
      {/* 
      whenever we click on button = setMobile(!Mobile) ==  is mobile oppsite to setMobile 
      */}
      <button className='mobile-menu-icon' onClick={() => setMobile(!Mobile)}>
        {Mobile ? <GiTireIronCross /> : <FaBars />}
      </button>
    </nav>
  </>
  );
};

export default Navbar;


