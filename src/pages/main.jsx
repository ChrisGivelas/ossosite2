import React from "react";
import {Unique, Shared} from "../components";
import {getImageURL} from "../utils";

const {Landing, Suppliers, About, Contact} = Unique;
const {Divider} = Shared;

function Main() {
    return (
        <div id="main">
            <Landing />
            <div id="main-content">
                <Suppliers />
                <Divider imgLocation={getImageURL(`homepage_header_petra.jpg`, "images/dividers")} />
                <About />
                <Divider imgLocation={getImageURL(`homepage_header_petra.jpg`, "images/dividers")} />
                <Contact />
            </div>
        </div>
    );
}

export default Main;
