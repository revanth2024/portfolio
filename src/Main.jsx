import React from "react";
import "./Main.css";

import Blur from "./Common/Blur-bg/Blur";
import Colortheme from "./Common/colortheme/Colortheme";
import Scroll from "./Common/Scrolltop/Scroll";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/Projects/Projects";
import Career from "./Components/Career/Career";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Modalcontact from "./Common/Modalcontact/Modalcontact";

function Main() {
  return (
    <>
      <Blur />
      <Scroll />
      <Colortheme />
      <Header />  
      <Home />
      <About />
      <Skills />
      <Projects />
      <Career />
      <Contact />
      <Footer />
      <Modalcontact/>
    </>
  );
}

export default Main;
