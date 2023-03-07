import React, { useState } from "react";
import logo from "./logo192.png"
import "./Header.scss"

const Header = () => {
   const [showMenu, setShowMenu] = useState(false);
   const [title, setTitle] = useState("Log");
   const handleMenuToggle = () => {
      setShowMenu(!showMenu);
   }

   const changeTitle = () => {
      setTitle("Relog");
   }
   return (
      <div>
         <header className="header">
            <div className="header-container">
               <div className="logo-container">
                  <img src={logo} alt="Logo" className="logo" />
               </div>
               <nav className={showMenu ? "nav nav-show" : "nav"}>
                  <ul className="nav-list">
                     <li className="nav-item">Home</li>
                     <li className="nav-item">Shop</li>
                     <li className="nav-item">Contact</li>
                     <li className="nav-item"><a href="./About">About</a> </li>
                  </ul>
               </nav>
               <div className="login-container">
                  <button className="login-button" onClick={() => changeTitle()}>Login</button>
               </div>
               <div className="burger-container" onClick={handleMenuToggle}>
                  <div className="burger-line"></div>
                  <div className="burger-line"></div>
                  <div className="burger-line"></div>
               </div>
            </div>
         </header>
         <h3>{title}</h3>

      </div>
   )
}
export default Header;