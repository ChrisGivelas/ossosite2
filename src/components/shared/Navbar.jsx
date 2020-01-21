import React from "react";
import {withRouter} from "react-router-dom";
import {NavHashLink as NavLink, HashLink as Link} from "react-router-hash-link";
import {HOME_PAGE, LANDING} from "../../routes";
import NavbarLogo from "../../assets/images/2020 LOGO (SIMPLE).png";

function Navbar(props) {
    const parent_route = props.route;
    const sub_routes = props.subroutes;

    const isActive = r => props.location.hash.substr(1) === r;

    return (
        <div id="navbar" className="elevation-level-3">
            <div id="navbar-main">
                <Link smooth id="navbar-logo-link" to={`${HOME_PAGE}#${LANDING}`}>
                    <img id="navbar-logo" src={NavbarLogo} alt="Osso City Lighting" />
                </Link>
                <hr />
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
            </div>
            <div id="navbar-extra-info">
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

export default withRouter(Navbar);
