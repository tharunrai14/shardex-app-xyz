import React, { Component } from "react";
import { Link } from "react-router-dom";
import { MenuItems } from "./MenuItems";
import "./NavBar.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sidebar from "../sidebar/sidebar";
import { NavLink } from 'react-router-dom';
import Image  from "./logowt80.svg";
import App from '../App.js'
import History from "../history/history";
import NightsStayIcon from '@mui/icons-material/NightsStay';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
class NavBar extends Component {
  state = { clicked: false };

  render() {
    return (

      
     
    

     
      <nav id="navbar" >
        
        <img src={Image} onClick="javascript:history.go(0)" alt='logo'></img>
        <NightsStayIcon id='nicon'></NightsStayIcon>
       
     
        <div className="NavbarItes">
          <ul className={`nav-menu`}>
            
            <li> <NavLink to='/' activeClassName="active" >Swap</NavLink> </li>
            <li> <NavLink to='/Liquidity'  activeClassName="active" >Pool</NavLink> </li>
        </ul>
        </div>
      </nav> 
      
    );
  }
}

export default NavBar;
