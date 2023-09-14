import React from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";
import burger from "./images/menu-line.png"
const Nav = () => {
    const[theme,setheme]=React.useState("light-theme")
    React.useEffect(()=>{
        document.body.className=theme;
    },[theme])
    function darkmode(){
        if(theme==="light-theme")
        setheme("dark-theme")
        else
        setheme("light-theme")
    }
let handle_nav2=()=>{
    document.getElementById("nav").style.display="block"
}
let handle_nav=()=>{
    document.getElementById("nav").style.display="none"
}


    return (
    <div className="main_nav">
    <div className="nav_mb">
    <NavLink className="nav_logo" to="/">rahul</NavLink>
    <img className="nav_img" onClick={handle_nav2} src={burger} alt="error" width="40px" height="35px" />
    </div>
    
        <div className="header" id="nav">
            <nav>
                
                <div className="nav_menu">
                    <ul className="nav_list">
                        <p className="nav_close" onClick={handle_nav} >Close</p>
                        <li className="nav_item"><NavLink to="/about">ABOUT</NavLink></li>
                        <li className="nav_item"><NavLink to="/skills">SKILLS</NavLink></li>
                        <li className="nav_item"><NavLink to="/portfolio">PORTFOLIO</NavLink></li>
                        <li className="nav_item"><NavLink to="/contact">CONTACT</NavLink></li>
                        <li><div className="main_toggle">
                            <input className="toggle_1" onClick={darkmode} type="checkbox" id="toggle-btn-1" />
                            <label className="toggle_2" htmlFor="toggle-btn-1"></label>
                            NEON MODE
                        </div></li>
                    </ul>

                </div>
            </nav>
        </div>
        </div>
    )
}
export default Nav