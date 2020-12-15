import React from "react";

import Landing from "../components/sections/Landing";
import Suppliers from "../components/sections/Suppliers";
import About from "../components/sections/About";
import Contact from "../components/sections/Contact";
import Coronavirus from "../components/sections/Coronavirus";

import Christmas2020 from "../assets/images/Holiday Hours - Christmas 2020.jpg";

import Footer from "../components/shared/Footer";

function Main() {
  return (
    <div id="main">
      <Landing />
      <div id="main-content">
        <img className="christmas2020" alt="christmas-hours" src={Christmas2020} />
        <Coronavirus />
        <Suppliers />
        <About />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default Main;
