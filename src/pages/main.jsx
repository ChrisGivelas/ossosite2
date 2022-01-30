import React from "react";

import Landing from "../components/sections/Landing";
import Suppliers from "../components/sections/Suppliers";
import About from "../components/sections/About";
import Contact from "../components/sections/Contact";
import Info from "../components/sections/Info";
import Memorial from "../components/sections/Memorial";

import Footer from "../components/shared/Footer";

function Main() {
  return (
    <div id="main">
      <Landing />
      <div id="main-content">
        <Memorial />
        <Info />
        <Suppliers />
        <About />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default Main;
