import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import routes, { CONTACT, HOME_PAGE, LANDING } from "../../routes";
import { defaultHours, modifiedDebounce } from "../../utils";
import NavItems, { NavItem } from "./NavItems";
import { Assets } from "../../App";

import NavbarLogo from "../../assets/images/logo_simple.png";

//src\assets\scss\_variables.scss
const NAVBAR_HEIGHT = 105;

const VIEWPORT_HEIGHT = Math.max(
  document.documentElement.clientHeight,
  window.innerHeight || 0
);

const ADJUSTED_VIEWPORT_HEIGHT = VIEWPORT_HEIGHT - NAVBAR_HEIGHT;

class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      shrink: false,
    };

    this.updateNavShrinkState = modifiedDebounce((e) => {
      const scrollPos =
        document.documentElement.scrollTop || document.body.scrollTop;

      if (!this.state.shrink) {
        if (scrollPos > ADJUSTED_VIEWPORT_HEIGHT) {
          this.setState({ shrink: true });
        }
      } else {
        if (scrollPos < ADJUSTED_VIEWPORT_HEIGHT) {
          this.setState({ shrink: false });
        }
      }
    }, 200);

    this.today = props.hours[new Date().getDay()];
  }

  componentDidMount() {
    window.addEventListener("scroll", this.updateNavShrinkState);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.updateNavShrinkState);
  }

  render() {
    const today = this.today;
    return (
      <div
        id="navbar"
        className={`elevation-level-3${this.state.shrink ? " shrink" : ""}`}
      >
        <div id="navbar-main">
          <Link smooth id="navbar-logo-link" to={`${HOME_PAGE}#${LANDING}`}>
            <img id="navbar-logo" src={NavbarLogo} alt="Osso City Lighting" />
          </Link>
          <hr />
          <NavItems subroutes={routes[HOME_PAGE]} route={HOME_PAGE} />
        </div>
        <div id="navbar-extra-info">
          <p>
            <NavItem
              route={CONTACT}
              parentRoute={HOME_PAGE}
              text={`${today.day}: ${
                today.isClosed ? "Closed" : `${today.open} - ${today.close}`
              }`}
            />
          </p>
          <p>
            <a href="mailto:info@ossolighting.ca">info@ossolighting.ca</a>
          </p>
          <p>
            <a href="tel:905-404-6776">905-404-6776</a>
          </p>
        </div>
      </div>
    );
  }
}

export default () => (
  <Assets.Consumer>
    {(config) => {
      return <Navbar hours={config.hours || defaultHours} />;
    }}
  </Assets.Consumer>
);
