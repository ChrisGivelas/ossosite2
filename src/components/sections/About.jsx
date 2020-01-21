import React, {useEffect, useState} from "react";
import Carousel from "../shared/Carousel";
import MarinoOsso from "../../assets/images/Marino Osso.jpg";

// var aboutText = [
//     `Since its inception in 1984, Osso City Lighting has proudly been one of the Durham Region’s largest
//     purveyors of fine lighting. Over a quarter of a century later, Osso City Lighting has expanded its
//     horizons to include home accents and accent furniture. We work closely with suppliers to provide you`,
//     `with only the highest quality items to satisfy all of your lighting and décor needs. Marino Osso,
//     long-time owner of Osso City Lighting, first arrived in Canada 1966, at the age of nineteen. Being
//     raised by two hardworking farmers inspired Marino to make an honest living, so he decided to take up`,
//     `a trade. After obtaining his license in Electrical Construction Maintenance from George Brown
//     College in 1972, Marino opened a contracting operation called Osso Electric Limited. For the next 12
//     years, Marino worked on perfecting his craft, as well as gaining knowledge of the lighting and décor`,
//     `world. Developing his skills as a lighting expert and businessman gave him the confidence to sell
//     Osso Electric in 1984, and begin a new venture known as Osso City Lighting. Thanks to the support
//     that we have received from the community, Osso City Lighting is now celebrating 30+ years of`,
//     `customer satisfaction. Our goal for the future is to continue to provide the same level of
//     excellence that we have shown since our beginning. Whether its traditional, contemporary, or
//     anything in between, Osso City Lighting has what you need.`
// ];

var aboutImages = [
    <img key="about-image-1" className="about-image" alt="about" src={MarinoOsso} />,
    <img key="about-image-2" className="about-image" alt="about" src={MarinoOsso} />,
    <img key="about-image-3" className="about-image" alt="about" src={MarinoOsso} />,
    <img key="about-image-4" className="about-image" alt="about" src={MarinoOsso} />,
    <img key="about-image-5" className="about-image" alt="about" src={MarinoOsso} />
];

function About() {
    const [verticalMode, setVerticalMode] = useState(null);

    useEffect(() => {
        const updateMode = _ => {
            if (verticalMode === null) {
                setVerticalMode(window.innerWidth < 650);
            } else {
                if (verticalMode && window.innerWidth >= 650) {
                    setVerticalMode(false);
                } else if (!verticalMode && window.innerWidth < 650) {
                    setVerticalMode(true);
                }
            }
        };

        if (!window.onresize) {
            updateMode();
            window.onresize = function() {
                updateMode();
            };
        }

        return _ => {
            window.onresize = undefined;
        };
    }, [verticalMode]);

    return (
        <section id="about">
            <h1 className="section-title">Our Story</h1>
            <h4 className="section-description">Description goes here</h4>
            <div id="about-slider">
                <div id="background-strip-container">
                    <hr />
                </div>
                <div id="about-content-container">
                    <Carousel
                        speed={1000}
                        variableWidth={!verticalMode}
                        autoplay={false}
                        centerMode
                        arrows
                        vertical={verticalMode}
                        blockInfinite
                    >
                        {aboutImages}
                    </Carousel>
                </div>
            </div>
        </section>
    );
}

export default About;
