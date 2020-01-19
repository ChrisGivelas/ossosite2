import React from "react";
import {NavLink} from "react-router-dom";
import routes from "../../routes";

function Navbar() {
    return (
        <React.Fragment>
            <div className="sticky-container">
                <div id="nav-items-background" className="sticky"></div>
            </div>
            <div className="sticky-container">
                <div id="nav-items" className="sticky">
                    {Object.keys(routes).map(route => (
                        <NavLink
                            key={route}
                            activeClassName="selected"
                            to={route}
                            className="scaleUp"
                        >{`${route}.`}</NavLink>
                    ))}
                </div>
            </div>
        </React.Fragment>
    );
}

export default Navbar;
