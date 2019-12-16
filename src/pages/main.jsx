import React from "react";

import Landing from "../components/sections/Landing";
import Suppliers from "../components/sections/Suppliers";
import About from "../components/sections/About";
import Contact from "../components/sections/Contact";

import Footer from "../components/shared/Footer";
import Divider from "../components/shared/Divider";

function Main() {
    return (
        <div id="main">
            <Landing />
            <div id="main-content">
                <Suppliers />
                <Divider />
                <About />
                <Divider />
                <Contact />
            </div>
            <Footer />
        </div>
    );
}

export default Main;
