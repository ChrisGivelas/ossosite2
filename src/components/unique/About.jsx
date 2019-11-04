import React from "react";
import ScrollableAnchor from "react-scrollable-anchor";

function About() {
    return (
        <ScrollableAnchor id="about">
            <section id="about-section">
                <h3 className="section-title">Our Story</h3>
                <p className="section-description">Description goes here</p>
            </section>
        </ScrollableAnchor>
    );
}

export default About;
