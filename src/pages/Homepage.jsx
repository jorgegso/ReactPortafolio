import React from 'react'
// import "./App.css";
import Home from "../components/Home";
import NavBar from "../components/NavBar";
import About from "../components/About";
import Skill from "../components/Skill";
import Work from "../components/Work";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Homepage = () => {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Skill />
      <Work />
      <Contact />
      <Footer />
    </div>
  )
}

export default Homepage




