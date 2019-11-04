import React from "react";
import {NavLink} from "react-router-dom";
import {routes} from "..";
import ScrollableAnchor from "react-scrollable-anchor";

import * as Logo from "../../assets/images/[H] Osso Lighting Logo 2018 (blue).jpg";

function Landing() {
    return (
        <ScrollableAnchor id="landing">
            <section id="landing-section">
                <div id="landing-content-container">
                    <img id="logo" src={Logo} alt="Osso City Lighting" />
                    <div id="nav-items">
                        {Object.keys(routes.mapping).map(route => (
                            <NavLink key={route} activeClassName="selected" to={route}>{`${route}.`}</NavLink>
                        ))}
                    </div>
                </div>
            </section>
        </ScrollableAnchor>
    );
}

export default Landing;
