import React from "react";
import ParallaxDivider from "../assets/images/dividers/2.jpg";

import Landing from "../components/sections/Landing";
import Suppliers from "../components/sections/Suppliers";
import About from "../components/sections/About";
import Contact from "../components/sections/Contact";

import Divider from "../components/shared/Divider";
import Footer from "../components/shared/Footer";

function Main() {
    return (
        <div id="main">
            <Landing />
            <div id="main-content">
                <Divider src={ParallaxDivider} />
                <Suppliers />
                <Divider src={ParallaxDivider} />
                <About />
                <Divider src={ParallaxDivider} />
                <Contact />
            </div>
            <Footer />
        </div>
    );
}

export default Main;
