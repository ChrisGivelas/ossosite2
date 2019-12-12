import React from "react";

import Landing from "../components/sections/Landing";
import Suppliers from "../components/sections/Suppliers";
import About from "../components/sections/About";
import Footer from "../components/shared/Footer";

function Main() {
    return (
        <div id="main">
            <Landing />
            <div id="main-content">
                <Suppliers />
                <About />
            </div>
            <Footer />
        </div>
    );
}

export default Main;
