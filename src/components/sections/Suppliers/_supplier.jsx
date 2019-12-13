import React from "react";
import {getImageURL} from "../../../utils/resourceUtils";

function Supplier({id, name, website, description, productTypes, items, onClick, expanded}) {
    const toggleExpanded = () => onClick(id);

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
