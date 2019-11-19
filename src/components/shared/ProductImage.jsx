import React from "react";

function ProductImage({src, onClick}) {
    return (
        <img
            className="product-image"
            alt="Product"
            src={src}
            onClick={onClick && typeof onClick === "function" ? onClick : null}
        />
    );
}

export default ProductImage;
