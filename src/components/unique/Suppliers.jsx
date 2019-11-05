import React from "react";
import ScrollableAnchor from "react-scrollable-anchor";
import {getImageURL} from '../../utils';

const suppliers = require("../../suppliers.json");
console.log(suppliers)

function Supplier({id, name, website, description, productTypes}) {
    return (
        <div className="supplier">
            <img className="supplier-image" src={getImageURL(`${name}-logo.jpg`, "images/supplier_logos")} alt={name} />
            <p className="supplier-name">{name}</p>
            <p className="supplier-description">{description}</p>
            <p className="view-supplier">View</p>
        </div>
    );
}

function Suppliers() {
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
