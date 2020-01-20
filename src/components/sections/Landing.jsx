import React from "react";
import * as Logo from "../../assets/images/[H] Osso Lighting Logo 2018 (blue).png";

function Landing() {
    return (
        <section id="landing">
            <div id="landing-content-background">
                <div id="landing-content-container">
                    <img id="logo" src={Logo} alt="Osso City Lighting" />
                </div>
            </div>
        </section>
    );
}

export default Landing;
