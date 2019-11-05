import React from "react";
import ReactDOM from "react-dom";
import {HashRouter} from "react-router-dom";
import App from "./App";
import "./assets/scss/index.scss";

import { configureAnchors } from 'react-scrollable-anchor'

configureAnchors({offset: -40, scrollDuration: 1000})

ReactDOM.render(
    <HashRouter hashType="noslash">
        <App />
    </HashRouter>,
    document.getElementById("root")
);
