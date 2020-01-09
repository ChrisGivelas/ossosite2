import React from "react";

export default function Divider({dividerName = "parallax-bg2", isParallax = false}) {
    let baseClassName = isParallax ? "parallax divider" : "divider";

    return (
        <div className={`${baseClassName}-wrapper`}>
            <div className={`${baseClassName} ${dividerName}`} alt="divider" />
        </div>
    );
}
