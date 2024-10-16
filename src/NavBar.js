import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "./images/logo.png";
import { CiMenuBurger } from "react-icons/ci";


const Navbar = () => {
 return (
   <header className="Navbar">
     <nav className="nav ">
         <ul className="nav__list">
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
           <li><CiMenuBurger /></li>
       </span>
         </ul>    
     </nav>
   </header>
);}

export default Navbar;