import React from "react";
import {withRouter} from "react-router-dom";
import {NavHashLink as NavLink} from "react-router-hash-link";

function NavItems(props) {
    const parent_route = props.route;
    const sub_routes = props.subroutes;

    const isActive = r => props.location.hash.substr(1) === r;

    return (
        <div id="nav-items">
            {Object.keys(sub_routes).map(route => {
                return (
                    <NavLink
                        isActive={isActive}
                        smooth
                        scroll={() => {
                            var element = document.getElementById(route);
                            var headerOffset = 75;
                            var elementPosition = element.offsetTop;
                            var offsetPosition = elementPosition - headerOffset;

                            window.scrollTo({
                                top: offsetPosition,
                                behavior: "smooth"
                            });
                        }}
                        key={route}
                        className="navlink"
                        activeClassName="selected"
                        to={`${parent_route}#${route}`}
                    >{`${route}.`}</NavLink>
                );
            })}
        </div>
    );
}

export default withRouter(NavItems);
