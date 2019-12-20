import React, {useEffect, useState} from "react";
import {getImageURL} from "../../../utils/resourceUtils";
import ScrollableAnchor from "react-scrollable-anchor";
import {SUPPLIERS} from "../../../routes";
import {withRouter} from "react-router-dom";

function SupplierContent({description, website}) {
    return (
        <div className="supplier-content">
            <a href={website} target="_blank" rel="noopener noreferrer">
                View Website
            </a>
            <p className="supplier-description">{description}</p>
        </div>
    );
}

function Supplier({id, name, productTypes, onClick, expanded, transitioning, history, description, website}) {
    const [scrolledTo, setScrolledTo] = useState(false);
    const toggleExpanded = () => onClick(id);

    useEffect(() => {
        //If currently not expanded, next re-render will be expanded, so scroll to supplier
        if (expanded && !scrolledTo && !transitioning) {
            setTimeout(() => history.push(`${SUPPLIERS}-${name}`), 200);
            setScrolledTo(true);
        }

        if (!expanded) {
            setScrolledTo(false);
        }
    }, [expanded, scrolledTo, history, name, transitioning]);

    return (
        <ScrollableAnchor id={`${SUPPLIERS}-${name}`}>
            <div
                className={`supplier${expanded ? (transitioning ? " expanded transitioning" : " expanded") : ""}`}
                onClick={toggleExpanded}
            >
                <div>
                    <img
                        className="supplier-image"
                        src={getImageURL(`${name}-logo.jpg`, "Supplier_Logos", "http://ossolighting.ca")}
                        alt={name}
                    />

                    {!expanded && !transitioning && (
                        <div className="view-supplier-overlay">
                            <h2>View</h2>
                        </div>
                    )}

                    {expanded && !transitioning && <SupplierContent website={website} description={description} />}
                </div>
            </div>
        </ScrollableAnchor>
    );
}

export default withRouter(Supplier);
