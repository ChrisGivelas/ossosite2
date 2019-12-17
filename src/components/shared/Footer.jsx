import React from "react";
import Tippy from "@tippy.js/react";

export default function Footer() {
    return (
        <div id="footer">
            <p id="footer-content">&copy;2019 by Osso City Lighting. All Rights Reserved.</p>
            <div id="social-media">
                <ul>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/OssoCityLighting/">
                        <li className="fab fa-facebook-f"></li>
                    </a>
                    <Tippy content="Coming soon!">
                        <a>
                            <li className="fab fa-instagram"></li>
                        </a>
                    </Tippy>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.youtube.com/channel/UCni1-Y1rMqU4lHdy0eoJj4g"
                    >
                        <li className="fab fa-youtube"></li>
                    </a>
                </ul>
            </div>
        </div>
    );
}
