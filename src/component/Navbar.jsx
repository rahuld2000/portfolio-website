import React from "react";
import "./navbar.css";
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
    return (
        <header>
            <nav>
                <a href="#home" className="nav_logo">rahul</a>
                <div className="nav_menu">
                    <ul className="nav_list">
                        <li className="nav_item"><a href="#about">About</a></li>
                        <li className="nav_item"><a href="#skills">Skills</a></li>
                        <li className="nav_item"><a href="#portfolio">Portfolio</a></li>
                        <li className="nav_item"><a href="#contact">Contact</a></li>
                        <li><div className="main_toggle">
                            <input className="toggle_1" onClick={darkmode} type="checkbox" id="toggle-btn-1" />
                            <label className="toggle_2" htmlFor="toggle-btn-1"></label>
                            NEON MODE
                        </div></li>
                    </ul>

                </div>
            </nav>
        </header>
    )
}
export default Nav