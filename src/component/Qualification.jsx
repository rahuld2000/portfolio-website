import React from "react";
import "./qualification.css"
const Qualification = () => {
    return (
        <div className="qual_main skill_main">
            <div className="qual_head skill_head"><h2>Qualification</h2>
                <p>My Personal Journey</p>
            </div>
            <div className="qual_content skill_boxes">
               <ul>
                <li className="qual_item">
                    <h3>10th CBSE</h3>
                    <p>D.A.V Public school</p>
                    <p>2016-2017</p>
                </li>
                <li className="qual_item">
                    <h3>12th PSEB</h3>
                    <p>Triple Public M</p>
                    <p>2018-2019</p>
                </li>
                <li className="qual_item">
                    <h3>B.Tech CSE</h3>
                    <p>Chandigarh University</p>
                    <p>2019-Present</p>
                </li>
               </ul>

            </div>
            
        </div>
    )
}
export default Qualification