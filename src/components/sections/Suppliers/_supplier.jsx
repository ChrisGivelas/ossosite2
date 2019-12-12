import React, {useState} from "react";
import {getImageURL} from "../../../utils/resourceUtils";

function Supplier({id, name, website, description, productTypes, items}) {
    const [expanded, setExpanded] = useState(false);

    const toggleExpanded = () => setExpanded(!expanded);

    return (
        <div className={`supplier ${expanded ? "expanded" : ""}`} onClick={toggleExpanded}>
            <div>
                <img
                    className="supplier-image"
                    src={getImageURL(`${name}-logo.jpg`, "Supplier_Logos", "http://ossolighting.ca")}
                    alt={name}
                />
            </div>
        </div>
    );
}

export default Supplier;
