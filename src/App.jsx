import { useState } from 'react'
import Header from "./component/Header/Header";
import Hero from "./component/Hero/Hero";
import Summary from "./component/Summary/Summary";
import Skill from "./component/Skill/Skill";
import Project from "./component/Project/Project";
import Contact from "./component/Contact/Contact";
import Footer from "./component/Footer/Footer";
import Tools from "./component/Skill/Tools";

import './App.css'

function App() {
  return (
    <>
       <Header/>
       <Hero/>
       <Summary/>
       <Skill/>
       <Tools/>
       <Project/>
       <Contact/>
       <Footer/>

    </>
  )
}

export default App
