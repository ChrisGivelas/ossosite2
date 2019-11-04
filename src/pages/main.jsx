import React from "react";
import {Unique} from "../components";

const {Landing, Suppliers, About, Contact} = Unique;

function Main() {
    return (
        <div id="main">
            <Landing />
            <hr />
            <Suppliers />
            <hr />
            <About />
            <hr />
            <Contact />
        </div>
    );
}

export default Main;
