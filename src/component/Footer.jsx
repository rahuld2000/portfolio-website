import React from "react";
import "./footer.css"
const Footers=()=>{
    let time = new Date().getFullYear();
    return(
        <div className="footer_main">
            <h3 className="foot">Thank You for visiting!</h3>
            <p>copyright©{time}</p>
        </div>

    )
}
export default Footers;