import React from "react";
import "./app.css";
import Nav from "./component/Navbar";
import Main from "./component/Home";
import About from "./component/About";
import Skill from "./component/Skill";
import Cont from "./component/Contact";
import Qualification from "./component/Qualification";
import Project from "./component/Portfolio";
import ProjectHead from "./component/portfolioHead";
import projects from "./component/Data";
import Footers from "./component/Footer";
const App=()=>{
 const cards=projects.map(item=>{
  return(
    <Project
    key={item.id}
    item={item}
    />
  )
 })
    return(
     <div>
        <Nav/>
        <Main/>
        <About/>
        <Skill/>
        <Qualification/>
        <ProjectHead/>
         {cards}
        <Cont/>
        <Footers/>
       
     </div>
    )
}
export default App;