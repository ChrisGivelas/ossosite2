import React from "react";

function ProductImage({src, onClick}) {
    return <img className="product-image" src={src} onClick={onClick} />;
}

export default ProductImage;
