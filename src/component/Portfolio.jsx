import React, { useState } from "react";
import Modal from "./modal";
import "./portfolio.css"
import projects from "./Data";
import m_data from "./mobiled"
const Project = () => {
    const[showmodal,setmodal]=useState(false);
 const[modaldata,setmodaldata]=useState([])
    let showmod=()=>{
        setmodal(false);
    }
   function moddata(item){
    setmodaldata(item)
   
   }
   
    return (

        <section className="port about_main" >
        <div className="about_head">
            <h1>Portfolio</h1>
            <p>here are my projects</p>
        </div>
        <div className="port_main">
        <div className="web_proj">
    <h2>web app</h2>
    <div className="tile_main">
        {
            projects.map((item)=>(
                <div onClick={()=>moddata(item)}>
                <div  onClick={()=> 
        setmodal(true)} key={item.id}  className="proj_tile" >
                <img  className="proj_img" src={item.imgUrl} width="300px" alt="error"/>
                <h3>{item.title}</h3>
               
                <p className="proj_des">{item.descrip}</p>
            </div>
            </div>
            ))
        }
        </div>
        </div>
        <div className="web_proj">
            <h2>mobile app</h2>
            <div className="tile_main">
                {
                    m_data.map((item)=>(
                        <div  onClick={()=>moddata(item)}>
                <div onClick={()=> 
                
        setmodal(true)} key={item.id}  className="mob_tile proj_tile" >
        
                <img className="mob_img" src={item.imgUrl} alt="error"/>
                <h3>{item.title}</h3>
               
                <p className="proj_des">{item.descrip}</p>
            </div>
            </div>
            ))
                }
            </div>
        </div>
        </div>
        {  showmodal && (<Modal data={modaldata}  parent={()=>showmod} /> )}
       
        </section>
     
        
    )
}
export default Project;