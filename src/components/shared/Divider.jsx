import React from "react";
import DefaultDividerImage from "../../assets/images/dividers/1.jpg";

export default function Divider({src = DefaultDividerImage, isParallax = true}) {
    return (
        <div className="divider-wrapper">
            <img className={`divider${isParallax ? " parallax" : ""}`} src={src} alt="parallax" />
        </div>
    );
}
