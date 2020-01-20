import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import "./assets/scss/index.scss";

window.isTouchEnabled = (function() {
    try {
        if ("ontouchstart" in window || (window.DocumentTouch && document instanceof window.DocumentTouch)) {
            console.log("Touch enabled: ", "true");
            return true;
        } else {
            var prefixes = " -webkit- -moz- -o- -ms- ".split(" ");
            var query = ["(", prefixes.join("touch-enabled),("), "heartz", ")"].join("");
            var touchEnabled = window.matchMedia(query).matches;
            console.log("Touch enabled: ", touchEnabled);
        }
    } catch (e) {
        console.log(
            "Error trying to check if this device is touch enabled. Please send us an email at info@ossolighting.ca with your device name, and we will fix this as soon as possible."
        );
        return undefined;
    }
})();

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById("root")
);
