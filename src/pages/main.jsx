import React from "react";

import routes, {HOME_PAGE} from "../routes";

import Landing from "../components/sections/Landing";
import Suppliers from "../components/sections/Suppliers";
import About from "../components/sections/About";
import Contact from "../components/sections/Contact";

import Footer from "../components/shared/Footer";
import Navbar from "../components/shared/Navbar";

function Main() {
    return (
        <div id="main">
            <Navbar subroutes={routes[HOME_PAGE]} route={HOME_PAGE} />
            <Landing />
            <div id="main-content">
                <Suppliers />
                <About />
                <Contact />
            </div>
            <Footer />
        </div>
    );
}

export default Main;
