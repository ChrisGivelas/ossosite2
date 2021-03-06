import React from "react";
import { Switch, Route } from "react-router-dom";
import Main from "./pages/main";
import {
  modifiedDebounce,
  fetchAssetsConfig,
  isTouchEnabled,
  updateHours,
} from "./utils";

export const TouchEnabled = React.createContext();
export const Assets = React.createContext();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isTouchEnabled: isTouchEnabled(),
      assetsConfig: {},
    };

    this.updateIsTouchEnabled = modifiedDebounce((e) => {
      this.setState({ isTouchEnabled: isTouchEnabled() });
    }, 200);
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateIsTouchEnabled);

    fetchAssetsConfig().then((config) => {
      this.setState({ assetsConfig: config });
      updateHours(config.hours);
    });
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateIsTouchEnabled);
  }

  render() {
    return (
      <Assets.Provider value={this.state.assetsConfig}>
        <TouchEnabled.Provider value={this.state.isTouchEnabled}>
          <div id="app">
            <Switch>
              <Route path="/" component={Main}></Route>
            </Switch>
          </div>
        </TouchEnabled.Provider>
      </Assets.Provider>
    );
  }
}

export default App;
