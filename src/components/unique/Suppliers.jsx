import React, {useEffect, useRef} from "react";
import ScrollableAnchor from "react-scrollable-anchor";
import {getImageURL} from "../../utils";
import {Shared} from "../";

const {Carousel, ProductImage} = Shared;

const suppliers = require("../../suppliers.json");

function Supplier({id, name, website, description, productTypes, items}) {
    const selfRef = useRef();
    const slickRef = React.createRef();
    var pauseTimeout = undefined;

    useEffect(() => {
        slickRef.current && slickRef.current.slickPause();
        selfRef.current.onmouseover = function(e) {
            clearTimeout(pauseTimeout);
            slickRef.current && slickRef.current.slickPlay();
            e.stopPropagation();
        };

        selfRef.current.onmouseout = function(e) {
            pauseTimeout = setTimeout(() => {
                slickRef.current && slickRef.current.slickPause();
            }, 1000);
            e.stopPropagation();
        };
    });

    return (
        <div className="supplier" ref={selfRef}>
            <img
                className="supplier-image"
                src={getImageURL(`${name}-logo.jpg`, "Supplier_Logos", "http://ossolighting.ca")}
                alt={name}
            />
            <div className="view-supplier-overlay">
                <Carousel
                    settings={{
                        dots: false,
                        infinite: true,
                        speed: 2000,
                        autoplay: true,
                        autoplaySpeed: 2000,
                        pauseOnHover: false,
                        draggable: false
                    }}
                    slickRef={slickRef}
                >
                    {items}
                </Carousel>
            </div>
            <div className="view-supplier-button-container">
                <span>View</span>
            </div>
        </div>
    );
}

const supplierProducts = (function() {
    const numbOfProducts = 8;

    var products = [];

    for (var i = 0; i < numbOfProducts; i++) {
        products.push(<ProductImage src={getImageURL(`${i}.jpg`, "images/supplier_products/Artcraft")} />);
    }

    return products;
})();

function Suppliers() {
    return (
        <ScrollableAnchor id="suppliers">
            <section id="suppliers-section">
                <h3 id="section-title">Our Suppliers</h3>
                <p id="section-description">Description goes here</p>
                <hr />
                <div id="suppliers-container">
                    {suppliers &&
                        suppliers.map(supplierInfo => (
                            <Supplier
                                key={`${supplierInfo.id}_${supplierInfo.name}`}
                                {...supplierInfo}
                                items={supplierProducts}
                            />
                        ))}
                </div>
            </section>
        </ScrollableAnchor>
    );
}

export default Suppliers;
