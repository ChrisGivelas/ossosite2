import React from "react";
import ParallaxDivider from "../assets/images/dividers/2.jpg";

import Landing from "../components/unique/Landing";
import Suppliers from "../components/unique/Suppliers";
import About from "../components/unique/About";
import Contact from "../components/unique/Contact";

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
