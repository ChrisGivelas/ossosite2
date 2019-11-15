import React from "react";

export default function Divider({imgLocation}) {
    return (
        <div className="divider-wrapper">
            <div className="divider" style={{backgroundImage: `url(${imgLocation})`}} />
        </div>
    );
}
