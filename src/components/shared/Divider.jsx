import React, {useRef, useEffect} from "react";
import SimpleParallax from "simple-parallax-js";
import DefaultDividerImage from "../../assets/images/dividers/1.jpg";

export default function Divider({src = DefaultDividerImage, isParallax = true}) {
    const imgRef = useRef();

    useEffect(() => {
        if (imgRef.current) {
            new SimpleParallax(imgRef.current, {});
        }
    });

    return (
        <div className="divider-wrapper">
            <img className={`divider${isParallax ? " parallax" : ""}`} src={src} ref={imgRef} alt="parallax" />
        </div>
    );
}
