import "./sb.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

function Sidebar() {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
    return (
      <nav className={sidebar ? "sidebar active" : "sidebar"}>
       <MenuOpenIcon fontSize="large" className="hamburger" type="button" onClick={showSidebar}>
          
        </MenuOpenIcon>
        
        <ul onClick={showSidebar}>
        <li><Link to="/Dashboard">Dashboard</Link></li>
        <li><Link to="/Exchange">Exchange</Link></li>
        <li><Link to="/Farms">Pools</Link></li>
        <li><Link to="/history">History</Link></li>

        
        </ul>

        
        
        
          
      </nav>
    );
  }
  
  export default Sidebar;