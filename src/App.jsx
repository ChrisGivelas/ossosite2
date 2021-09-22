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
      let state = { ...config };

      state["productTypes"] = config.suppliers.reduce(
        (productTypeSet, supplier) => {
          for (let el of supplier.productTypes) {
            productTypeSet.add(el);
          }
          return productTypeSet;
        },
        new Set()
      );

      this.setState({ assetsConfig: state });
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
