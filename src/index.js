import React from "react";
import ReactDOM from "react-dom";
import {HashRouter} from "react-router-dom";
import App from "./App";
import "./assets/scss/index.scss";

ReactDOM.render(
    <HashRouter hashType="noslash">
        <App />
    </HashRouter>,
    document.getElementById("root")
);
