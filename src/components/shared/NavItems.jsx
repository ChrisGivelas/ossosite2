import React from "react";
import { withRouter } from "react-router-dom";
import { NavHashLink as NavLink } from "react-router-hash-link";

export const NavItem = ({ route, parentRoute, text, ...extraProps }) => {
  return (
    <NavLink
      {...extraProps}
      smooth
      scroll={() => {
        var element = document.getElementById(route);
        var headerOffset = 75;
        var elementPosition = element.offsetTop;
        var offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }}
      to={`${parentRoute}#${route}`}
    >
      {text}
    </NavLink>
  );
};

function NavItems(props) {
  const parentRoute = props.route;
  const sub_routes = props.subroutes;

  const isActive = (r) => props.location.hash.substr(1) === r;

  return (
    <div id="nav-items">
      {Object.keys(sub_routes).map((route) => {
        return (
          <NavItem
            isActive={isActive}
            key={route}
            className="navlink"
            activeClassName="selected"
            to={`${parentRoute}#${route}`}
            route={route}
            parentRoute={parentRoute}
            text={`${route}.`}
          />
        );
      })}
    </div>
  );
}

export default withRouter(NavItems);
