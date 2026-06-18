import React from "react";

import Landing from "../components/sections/Landing";
import Suppliers from "../components/sections/Suppliers";
import About from "../components/sections/About";
import Contact from "../components/sections/Contact";
import Memorial from "../components/sections/Memorial";

import * as SummerHours2026 from "../assets/images/Summer_Hours_2026.png";

import Footer from "../components/shared/Footer";

function Main() {
  return (
    <div id="main">
      <Landing />
      <div id="main-content">
        <section id="summer-hours-2026" style={{display: 'flex', justifyContent: 'center', padding: "5vw 5vw 0px 5vw"}}>
          <img src={SummerHours2026} alt="Summer Hours" style={{maxWidth: "50%"}}/>
        </section>
        <Memorial />
        <Suppliers />
        <About />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default Main;
