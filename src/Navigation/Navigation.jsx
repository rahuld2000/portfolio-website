import React from 'react'
import Nav from "../component/Navbar";
import Main from "../component/Home";
import About from "../component/About";
import Skills from "../component/Skill"
import Cont from "../component/Contact";
import Qualification from "../component/Qualification";
import Project from "../component/Portfolio";

import { BrowserRouter, Route,  Routes } from 'react-router-dom';
function Navigation
() {
  return (
 <BrowserRouter>
 <Nav/>
    <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/skills' element={<Skills/>}/>
        <Route path='/contact' element={<Cont/>}/>
        <Route path="/Portfolio" element={<Project/>}/>
          </Routes>

 </BrowserRouter>
  )
}

export default Navigation
