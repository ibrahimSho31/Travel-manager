import styles from "../home/navbar.css"
import { Link, useLocation } from "react-router-dom"
import { useState } from "react";
function NavBar({ onMenuClick }){
    const location = useLocation();

    return(
        <body >
        <div className="navbar">
        <div>
          <i className="bx bx-menu" id="nav-menu" onClick={onMenuClick}></i>
        </div>

        <div>
            <i class='bx bx-bell' ></i>
            <p>Kelin</p>
            <img src="images/profile.png"/>
        </div>
        </div>

        
        </body>
    )
}

export default NavBar