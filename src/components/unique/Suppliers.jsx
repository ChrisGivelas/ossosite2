import React from "react";
import ScrollableAnchor from "react-scrollable-anchor";

function Supplier({id, name, description, image}) {
    return (
        <div className="supplier">
            <img className="supplier-image" src={image} alt={name} />
            <p className="supplier-name">{name}</p>
            <p className="supplier-description">{description}</p>
            <div className="snackbar">
                <p>View</p>
            </div>
        </div>
    );
}

function Suppliers({suppliers}) {
    return (
        <ScrollableAnchor id="suppliers">
            <section id="suppliers-section">
                <h3 id="suppliers-title">Our Suppliers</h3>
                <p id="suppliers-description">Description goes here</p>
                <hr />
                <div id="suppliers-container">
                    {suppliers && suppliers.map(supplierInfo => <Supplier {...supplierInfo} />)}
                </div>
            </section>
        </ScrollableAnchor>
    );
}

export default Suppliers;
