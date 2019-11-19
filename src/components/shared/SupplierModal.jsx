import React from "react";
import Modal from "react-bootstrap/Modal";

import Carousel from "./Carousel";

export default function SupplierModal({show, title, handleHide, supplierInfo}) {
    const {name, items, productTypes, description} = supplierInfo;

    return (
        <Modal show={show} onHide={handleHide}>
            {title ? (
                <Modal.Header closeButton>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
            ) : name ? (
                <Modal.Header closeButton>
                    <Modal.Title>{name}</Modal.Title>
                </Modal.Header>
            ) : (
                <Modal.Header closeButton />
            )}
            <Modal.Body>
                <div className="supplier-info-modal-content">
                    <div className="supplier-info-modal-left-panel">
                        <p className="supplier-description">{description}</p>
                        {productTypes && productTypes.length > 0 && (
                            <ul className="supplier-product-types">
                                {productTypes.map((type, index) => (
                                    <li key={`${index}_${type}`} className="supplier-product-type">
                                        {type}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                    <div className="supplier-info-modal-right-panel">
                        <Carousel
                            settings={{
                                dots: false,
                                infinite: true,
                                speed: 2000,
                                autoplay: true,
                                autoplaySpeed: 1000,
                                pauseOnHover: false,
                                draggable: false,
                                arrows: false
                            }}
                        >
                            {items}
                        </Carousel>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
}
