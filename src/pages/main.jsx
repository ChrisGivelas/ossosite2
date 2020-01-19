import React from "react";

import Landing from "../components/sections/Landing";
import Suppliers from "../components/sections/Suppliers";
import About from "../components/sections/About";
import Contact from "../components/sections/Contact";

import Footer from "../components/shared/Footer";
import Divider from "../components/shared/Divider";
import Navbar from "../components/shared/Navbar";

function Main() {
    return (
        <div id="main">
            <Navbar />
            <Landing />
            <div id="main-content">
                <About />
                <Suppliers />
                <Divider />
                <Contact />
            </div>
            <Footer />
        </div>
    );
}

export default Main;
