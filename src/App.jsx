import React from "react";
import {Switch, Route} from "react-router-dom";
import Main from "./pages/main";
import TouchEnabledContext, {isTouchEnabled, initialValue} from "./touchEnabledContext";
import {modifiedDebounce} from "./utils";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isTouchEnabled: initialValue
        };

        this.updateIsTouchEnabled = modifiedDebounce(e => {
            this.setState({isTouchEnabled: isTouchEnabled()});
        }, 200);
    }

    componentDidMount() {
        window.addEventListener("resize", this.updateIsTouchEnabled);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateIsTouchEnabled);
    }

    render() {
        return (
            <TouchEnabledContext.Provider value={this.state.isTouchEnabled}>
                <div id="app">
                    <Switch>
                        <Route path="/" component={Main}></Route>
                    </Switch>
                </div>
            </TouchEnabledContext.Provider>
        );
    }
}

export default App;
