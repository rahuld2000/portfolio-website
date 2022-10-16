import React from "react";
import "./skill.css"
const Skill = () => {
  function handleleet(){
    window.open("https://leetcode.com/RahulDhiman/")
  }
  function handlehash(){
    window.open("https://hashnode.com/@rahul2000")
  }
function handlegit(){
    window.open("https://github.com/rahuld2000")
}

    return (
        <div id="skills" className="skill_main">
            <div className="skill_head">
                <h2>Skills</h2>
                <p>My technical level</p>
            </div>
            <div className="skill_boxes">
               <table className="social_box">
                <thead>
                    <tr>
                        <th><h1>Platform.</h1></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><button onClick={handleleet} className="skill_btn" ><i className="fa-solid fa-code"></i> LeetCode</button> </td>
                    </tr>
                    <tr>
                        <td><button onClick={handlehash} className="skill_btn" ><i className="fa-brands fa-hashnode"></i> HashNode</button> </td>
                    </tr>
                    <tr>
                        <td><button onClick={handlegit} className="skill_btn" ><i className="fa-brands fa-github"></i> GitHub</button> </td>
                    </tr>
                </tbody>
               </table>
                <table className="box_one">
                    <thead>
                    <tr>
                        <th>front-end Development</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td><i className="fa-regular fa-circle-check"></i> HTML</td>
                        <td><i className="fa-regular fa-circle-check"></i> CSS</td>
                    </tr>
                    <tr>
                        <td><i className="fa-regular fa-circle-check"></i> JavaScript</td>
                        <td><i className="fa-regular fa-circle-check"></i> React.js</td>
                    </tr>
                    <tr>
                        <td><i className="fa-regular fa-circle-check"></i> Git</td>
                        <td><i className="fa-regular fa-circle-check"></i> SaSS</td>
                    </tr>
                    <tr>
                        <td><i className="fa-regular fa-circle-check"></i> Material UI</td>
                    </tr>
                    </tbody>
                </table>
                <table className="box_one">
                    <thead>
                    <tr>
                        <th>Other Skills</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td><i className="fa-regular fa-circle-check"></i> Java</td>
                        <td><i className="fa-regular fa-circle-check"></i> DSA</td>
                    </tr>
                    <tr>
                        <td><i className="fa-regular fa-circle-check"></i> OOPS</td>
                        <td><i className="fa-regular fa-circle-check"></i> Operating System</td>
                    </tr>
                    <tr>
                        <td><i className="fa-regular fa-circle-check"></i> SQL</td>
                        <td><i className="fa-regular fa-circle-check"></i> DBMS</td>
                    </tr>
                    <tr>
                        <td><i className="fa-regular fa-circle-check"></i> computer network</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>


    )
}
export default Skill