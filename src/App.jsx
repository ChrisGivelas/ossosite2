import React from "react";
import {Switch, Route} from "react-router-dom";
import Main from "./pages/main";

function App() {
    return (
        <div id="app">
            <Switch>
                <Route path="/" component={Main}></Route>
            </Switch>
        </div>
    );
}

export default App;
