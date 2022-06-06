import React, { Component } from "react";
import { Link } from "react-router-dom";
import { MenuItems } from "./MenuItems";
import "./NavBar.css";
import  Image  from "../logowt80.svg";
class NavBar extends Component {
  state = { clicked: false };

  render() {
    return (
      <nav >
        <img src={Image} alt='logo'/>
        
        <div className="NavbarItes">
          <ul className={`nav-menu`}>
           
            <li> <Link to={'/Swap'} >Swap</Link> </li>
            <li> <Link to={'/Liquidity'} >Pool</Link> </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
