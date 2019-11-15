import React from "react";
import {Unique, Shared} from "../components";
import ParallaxDivider from "../assets/images/dividers/2.jpg";

const {Landing, Suppliers, About, Contact} = Unique;
const {Divider, Footer} = Shared;

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
