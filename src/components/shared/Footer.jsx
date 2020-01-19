import React from "react";
import Tippy from "@tippy.js/react";

export default function Footer() {
    return (
        <div id="footer">
            <p id="footer-content">&copy;2019 by Osso City Lighting. All Rights Reserved.</p>
            <div id="social-media">
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.facebook.com/OssoCityLighting/"
                    className="fab fa-facebook-f"
                >
                    <React.Fragment />
                </a>
                <Tippy content="Coming soon!">
                    <span className="fab fa-instagram"></span>
                </Tippy>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.youtube.com/channel/UCni1-Y1rMqU4lHdy0eoJj4g"
                    className="fab fa-youtube"
                >
                    <React.Fragment />
                </a>
            </div>
        </div>
    );
}
