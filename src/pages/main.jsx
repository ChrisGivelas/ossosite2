import React from "react";
import {Unique} from "../components";
import * as Parallax from "../assets/images/parallax1.jpg";

const {Landing, Suppliers, About, Contact} = Unique;

function Main() {
    return (
        <div id="main">
            <Landing />
            <div className="parallax-divider parallax-img-1" src={Parallax} />
            <Suppliers />
            <div className="parallax-divider parallax-img-2" src={Parallax} />
            <About />
            <div className="parallax-divider parallax-img-3" src={Parallax} />
            <Contact />
        </div>
    );
}

export default Main;
