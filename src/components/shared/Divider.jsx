import React from "react";

export default function Divider({src}) {
    return (
        <div className="divider-wrapper">
            <div className="divider" style={{backgroundImage: `url(${src})`}} />
        </div>
    );
}
