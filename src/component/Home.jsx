import React from "react";
import "./home.css";
import first from "./img_1.JPG"
import Arrow from "./arrow";
const Main = () => {
    function handleClick(e) {
        e.preventDefault();
        window.location.href = '#contact'
    }
    return (
        <main id="home">
            <div className="m_section">
                <div className="hello">
                    <h1 className="hello_name">Rahul Dhiman</h1>
                    <span className="hello_emoji">🖐️</span>
                </div>
                <h3>Web-Developer</h3>
                <p>hey, i'm front-end developer from India, Creating aesthetic design is my thing. Web3 is lob.</p>
                <button onClick={handleClick} className="home_btn">Say hello!<i className="fa-solid fa-location-arrow"></i></button>
                <h4>scroll down!</h4>
                <Arrow/>
            </div>
            <div>
                <img className="home_img" src={first} width="270px" alt="error" />
            </div>


        </main>

    )
}
export default Main;