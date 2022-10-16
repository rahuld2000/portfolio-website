import React from "react";
import "./about.css"
import second from "./img_2.jpg"
const About = () => {
   function handleCV() {
      window.location.href = "";
   }
   return (
      <section className="about_main">
         <div id="about" className="about_head">
            <h2>About Me</h2>
            <p>My introduction</p>
         </div>
         <div className="about_cont">
            <img className="home_img" src={second} width="250px" alt="error" />
            <div className="about_info">
               <div className="boxes">
                  <div className="one">
                     <h3>Fresher</h3>
                     <p>4th year student</p>
                  </div>
                  <div className="one">
                     <h3>Completed</h3>
                     <p>10+ Project</p>
                  </div>
                  <div className="one">
                     <h3>Blogger</h3>
                     <p>free time= write</p>
                  </div>
                  <div className="one">
                     <h3>Travel</h3>
                     <p>love to explore</p>
                  </div>
                  
               </div>
               <p>I'm fouth year computer science engineering student from Punjab,India. Coding become my best friend when i started my  web development journey. i love to explore and learn new things and i'm sure one day i'm gonna travel whole world and live best of my Life ;p</p>
               <div className="center">
                  <button onClick={handleCV} className="about_btn">Download CV</button>
               </div>
            </div>
         </div>
      </section>
   )
}
export default About;