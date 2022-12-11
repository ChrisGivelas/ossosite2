import React from "react";
import Main from "./pages/main";
import { modifiedDebounce, fetchAssetsConfig, isTouchEnabled } from "./utils";

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
            <Main />
          </div>
        </TouchEnabled.Provider>
      </Assets.Provider>
    );
  }
}

export default App;
