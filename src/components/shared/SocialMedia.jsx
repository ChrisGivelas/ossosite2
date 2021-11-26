import React from "react";
import { Youtube, Facebook } from "../../assets/images/IconSvgs";

function SocialMedia() {
  return (
    <div id="social-media">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.facebook.com/OssoCityLighting/"
      >
        <Youtube />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.youtube.com/channel/UCni1-Y1rMqU4lHdy0eoJj4g"
      >
        <Facebook />
      </a>
    </div>
  );
}

export default SocialMedia;
