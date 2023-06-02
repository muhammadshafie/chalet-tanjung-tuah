import React, { useState } from "react";
import "../Navbar/navbar.css";
import { AiOutlineClose } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";

import logo from "../../Assets/logo.png"

const Navbar = () => {
  //Toggle navbar function
  const [active, setActive] = useState("navBar");
  const showNav = () => {
    setActive("navBar activeNavbar");
  };

  // Close navbar function
  const closeNav = () => {
    setActive("navBar");
  };

  // Change Navbar Header when Scrolling down
  const [transparent, setTransparent] = useState('header');
  const addBg = () => {
    if (window.scrollY >= 10) {
      setTransparent('header activeHeader')
    }
    else {
      setTransparent('header')
    }
  }

  window.addEventListener('scroll', addBg)


  return (
    <section className="navBarSection">
      <div className={transparent}>
        <div className="logoDiv">
          <a href="/#" className="logo">
            <h1 className="flex">
              {/* <MdHouseSiding className="icon" /> */}
              <img src={logo} alt="" className="icon"/>
              Chalet Tanjung Tuah
            </h1>
          </a>
        </div>

        <div className={active}>
          <ul className="navLists flex">
            <li className="navItem">
              <a href="/" rel="noreferrer" className="navLink">
                Home
              </a>
            </li>

            <li className="navItem">
              <a href="/#" className="navLink">
                Activity
              </a>
            </li>

            <li className="navItem">
              <a href="/#" className="navLink">
                Package
              </a>
            </li>

            <li className="navItem">
              <a href="/#" className="navLink">
                Contacts
              </a>
            </li>

            <div className="headerBtns flex">
              <button className="btn bookBtn">
                <a href="/#">Book Now</a>
              </button>
            </div>
          </ul>

          <div className="closeNavbar" onClick={closeNav}>
            <AiOutlineClose className="icon" />
          </div>
        </div>

        <div className="toggleNavbar" onClick={showNav}>
          <RxHamburgerMenu className="icon" />
        </div>
      </div>
    </section>
  );
};

export default Navbar;
