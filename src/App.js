import React from "react";
import {Switch, Route} from "react-router-dom";
import Main from "./pages/main";
import {Shared} from "./components";

function App() {
    return (
        <div id="app">
            <Shared.AuthWidget />
            <Switch>
                <Route path="/" component={Main}></Route>
            </Switch>
        </div>
    );
}

export default App;
