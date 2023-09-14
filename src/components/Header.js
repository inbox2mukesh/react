import react from "react";
import styled from 'styled-components';
import {
   BrowserRouter as Router,
   Routes,
   Route,
   Redirect, Link
} from "react-router-dom";
import React, {useState} from 'react';
function Header() {
    const openNav = () => {
      document.getElementById("myNav").style.width = "100%";
    };
   const closeNav = () => {
      document.getElementById("myNav").style.width = "0%";
  };
   return (
      <div class="header_section">
         <div class="container">
            <div class="row">
               <div class="col-md-3">
                  <div class="logo"><a href="home"><img src="images/logo.png" /></a></div>
               </div>
               <div class="col-md-9">
                  <div class="menu_text">
                     <ul>
                        <li><a href="/">HOME</a></li>
                        <li><a href="services">SERVICES</a></li>
                        <li><a href="about">ABOUT US</a></li>
                        <li><a href="projects">PROJECTS</a></li>
                        <li><a href="contact">CONTACT US</a></li>
                        <li><a href="clients">CLIENTS</a></li>
                        <li><a href="#"><img src="images/search-icon.png" /></a></li>
                        <div id="myNav" className="overlay">
                           <a href="javascript:void(0)" onClick={closeNav} className="closebtn">&times;</a>
                           <div className="overlay-content">
                              <a href="/">HOME</a>
                              <a href="about">ABOUT</a>
                              <a href="services">SERVICES</a>
                              <a href="projects">PROJECTS</a>
                              <a href="contact">CONTACT US</a>
                              <a href="clients">CLIENTS</a>
                           </div>
                        </div>
                        <span className="header_pointer" onClick={openNav}><img src="images/toggle.png" class="toggle_menu" /></span>
                     </ul>
                  </div>

               </div>
            </div>
         </div>
      </div>
   );
   }

export default Header;