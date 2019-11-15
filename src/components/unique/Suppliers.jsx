import React, {useEffect, useRef} from "react";
import ScrollableAnchor from "react-scrollable-anchor";
import {getImageURL} from "../../utils";
import {Shared} from "../";

import Artcraft0 from "../../assets/images/supplier_products/Artcraft/0.jpg";
import Artcraft1 from "../../assets/images/supplier_products/Artcraft/1.jpg";
import Artcraft2 from "../../assets/images/supplier_products/Artcraft/2.jpg";
import Artcraft3 from "../../assets/images/supplier_products/Artcraft/3.jpg";
import Artcraft4 from "../../assets/images/supplier_products/Artcraft/4.jpg";
import Artcraft5 from "../../assets/images/supplier_products/Artcraft/5.jpg";
import Artcraft6 from "../../assets/images/supplier_products/Artcraft/6.jpg";
import Artcraft7 from "../../assets/images/supplier_products/Artcraft/7.jpg";

const {Carousel, ProductImage} = Shared;

const suppliers = require("../../suppliers.json");

// var supplierProducts = (function() {
//     const numbOfProducts = 8;

//     var products = [];

//     for (var i = 0; i < numbOfProducts; i++) {
//         products.push(<ProductImage src={getImageURL(`${i}.jpg`, "images/supplier_products/Artcraft")} />);
//     }

//     return products;
// })();

//Temporarily do it this way just so that we can deploy to github pages
var supplierProducts = [
    <ProductImage src={Artcraft0} />,
    <ProductImage src={Artcraft1} />,
    <ProductImage src={Artcraft2} />,
    <ProductImage src={Artcraft3} />,
    <ProductImage src={Artcraft4} />,
    <ProductImage src={Artcraft5} />,
    <ProductImage src={Artcraft6} />,
    <ProductImage src={Artcraft7} />
];

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
