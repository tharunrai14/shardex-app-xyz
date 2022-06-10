import React, { Component } from "react";
import { Link } from "react-router-dom";
import { MenuItems } from "./MenuItems";
import "./NavBar.css";
import { NavLink } from 'react-router-dom';
import Image  from "./logobt.svg";
import menui from "./menu.svg";
class NavBar extends Component {
  state = { clicked: false };

  render() {
    return (
      
      <nav id="navbar" >
        <div id='wrapper'><img id="menui" src={menui}/></div>
        <img src={Image} alt='logo'/>
     
        <div className="NavbarItes">
          <ul className={`nav-menu`}>
           
            <li> <NavLink to='/' activeClassName="active" >Swap</NavLink> </li>
            <li> <NavLink to='/Liquidity'  activeClassName="active" >Pool</NavLink> </li>
          </ul><span id="bspan"><span id="s1"><a href="/">Exchange</a></span> <span id="s2"><a>History</a></span> <span id="s3"><a>Farms</a></span> </span>
        </div>
      </nav> 
      
    );
  }
}

export default NavBar;
