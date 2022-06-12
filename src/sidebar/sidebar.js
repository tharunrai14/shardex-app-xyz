import "./sb.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

function Sidebar() {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
    return (
      <nav className={sidebar ? "sidebar active" : "sidebar"}>
       <MenuOpenIcon  fontSize="large" className="hamburger" type="button" onClick={showSidebar}>
          
        </MenuOpenIcon>
        
        <ul onClick={showSidebar}>
        
        
        </ul>

        <span id="bspan">
         <li><span id="s1">
                <a href="/">Exchange</a>
                </span></li>    
    
          <li><span id="s2">
                    <a>History</a></span></li>
                     <li><span id="s3"><a>Farms</a>
                     </span> </li>
        </span>
          
      </nav>
    );
  }
  
  export default Sidebar;