import React from "react";
import {Unique, Shared} from "../components";
import {getImageURL} from "../utils";

const {Landing, Suppliers, About, Contact} = Unique;
const {Divider, Footer} = Shared;

function Main() {
    return (
        <div id="main">
            <Landing />
            <div id="main-content">
                <Divider imgLocation={getImageURL(`homepage_header_petra.jpg`, "images/dividers")} />
                <Suppliers />
                <Divider imgLocation={getImageURL(`homepage_header_petra.jpg`, "images/dividers")} />
                <About />
                <Divider imgLocation={getImageURL(`homepage_header_petra.jpg`, "images/dividers")} />
                <Contact />
            </div>
            <Footer />
        </div>
    );
}

export default Main;
