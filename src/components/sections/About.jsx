import React, {useState} from "react";
import ScrollableAnchor from "react-scrollable-anchor";
import Modal from "react-bootstrap/Modal";
import Carousel from "../shared/Carousel";

import MarinoOsso from "../../assets/images/Marino Osso.jpg";

var aboutImages = [
    <img className="about-image" alt="about" src={MarinoOsso} />,
    <img className="about-image" alt="about" src={MarinoOsso} />,
    <img className="about-image" alt="about" src={MarinoOsso} />,
    <img className="about-image" alt="about" src={MarinoOsso} />,
    <img className="about-image" alt="about" src={MarinoOsso} />
];

function AboutModal({show, handleHide}) {
    return (
        <Modal show={show} onHide={handleHide}>
            <Modal.Header closeButton>
                <Modal.Title>Our Story</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p id="about-content" className="section-content">
                    Since its inception in 1984, Osso City Lighting has proudly been one of the Durham Region’s largest
                    purveyors of fine lighting. Over a quarter of a century later, Osso City Lighting has expanded its
                    horizons to include home accents and accent furniture. We work closely with suppliers to provide you
                    with only the highest quality items to satisfy all of your lighting and décor needs. Marino Osso,
                    long-time owner of Osso City Lighting, first arrived in Canada 1966, at the age of nineteen. Being
                    raised by two hardworking farmers inspired Marino to make an honest living, so he decided to take up
                    a trade. After obtaining his license in Electrical Construction Maintenance from George Brown
                    College in 1972, Marino opened a contracting operation called Osso Electric Limited. For the next 12
                    years, Marino worked on perfecting his craft, as well as gaining knowledge of the lighting and décor
                    world. Developing his skills as a lighting expert and businessman gave him the confidence to sell
                    Osso Electric in 1984, and begin a new venture known as Osso City Lighting. Thanks to the support
                    that we have received from the community, Osso City Lighting is now celebrating 30+ years of
                    customer satisfaction. Our goal for the future is to continue to provide the same level of
                    excellence that we have shown since our beginning. Whether its traditional, contemporary, or
                    anything in between, Osso City Lighting has what you need.
                </p>
            </Modal.Body>
        </Modal>
    );
}

function About() {
    const [showModal, setShowModal] = useState(false);

    const handleShowModal = () => setShowModal(true);
    const handleHideModal = () => setShowModal(false);

    return (
        <React.Fragment>
            <ScrollableAnchor id="about">
                <section id="about-section" onClick={handleShowModal}>
                    <div id="view-about-overlay">
                        <Carousel>{aboutImages}</Carousel>
                    </div>
                    <div id="view-about-button-container">
                        <p>Our Story</p>
                    </div>
                </section>
            </ScrollableAnchor>
            <AboutModal show={showModal} handleHide={handleHideModal} />
        </React.Fragment>
    );
}

export default About;
