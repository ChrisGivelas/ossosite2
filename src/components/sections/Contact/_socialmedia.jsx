import React from "react";
import Tippy from "@tippy.js/react";

function SocialMedia() {
    return (
        <div id="social-media">
            <h2>Follow us on Social Media!</h2>
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
    );
}

export default SocialMedia;
