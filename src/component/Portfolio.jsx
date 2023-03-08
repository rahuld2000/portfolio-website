import React from "react";

import "./portfolio.css"
const Project = (props) => {
    function handlegit() {
        window.open(props.item.git)
    }
    function handlelive() {
        window.open(props.item.live)
    }
    return (

        <section>
            <div className="proj_tile" id="portfolio">
                <img className="proj_img" src={props.item.imgUrl} width="300px" alt="error"/>
                <h3>{props.item.title}</h3>
                <div className="project_git">
                    <button onClick={handlegit} className="project_btn">GIT HUB</button>
                    <button onClick={handlelive} className="project_btn">LIVE</button>
                </div>
                <p className="proj_des">{props.item.descrip}</p>
            </div>
        </section>
        
    )
}
export default Project;