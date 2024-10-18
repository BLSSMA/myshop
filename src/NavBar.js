import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "./images/logo.png";
import NavbarHamburger from "./NavbarHamburger";


const Navbar = () => {
 return (
   <header className="Navbar d-sm-md-none">
     <nav className="nav ">
         <ul className="nav__list">
          <li><NavbarHamburger /></li>
          <li>
       <NavLink to="/" className="nav__logo">
        <img src={logo} alt="logo"/>
       </NavLink></li>
       <span
         className={"nav__menu"}
         id="nav-menu"
       >
           <li className="nav__item">
             <NavLink to="/" className="nav__link">
               Home
             </NavLink>
           </li>
           <li className="nav__item">
             <NavLink to="/Shop" className="nav__link">
               Shop
             </NavLink>
           </li>
       </span>
        </ul>  
     </nav>
   </header>
);}

export default Navbar;