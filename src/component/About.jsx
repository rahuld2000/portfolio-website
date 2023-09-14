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
                     <h3>B.Tech</h3>
                     <p>Computer Science Eng.</p>
                  </div>
                  <div className="one">
                     <h3>Completed</h3>
                     <p>20+ Project</p>
                  </div>
                  <div className="one">
                     <h3>Blogger</h3>
                     <p>free time = write</p>
                  </div>
                  <div className="one">
                     <h3>Travel</h3>
                     <p>love to explore</p>
                  </div>
                  
               </div>
               <p>I'm a front-end web developer with over 20+ Project experience.
 I'm very familiar with using frameworks, my websites are primarily hand-coded using HTML5, CSS3, JavaScript, React and Nextjs.

With a strong emphasis on "Progressive Enhancement", I look for creative ways to push the boundaries of website front-end code without compromising on browser support and performance.

In a quest for always keeping myself updated, I read books and watch a lots of video to learn new Tech.</p>
               <div className="center">
                  <button onClick={handleCV} className="about_btn">Download CV</button>
               </div>
            </div>
         </div>
      </section>
   )
}
export default About;