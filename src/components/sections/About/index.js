import React from "react";
import Carousel from "../../shared/Carousel";

import Img1 from "../../../assets/images/historical/1.jpg";
import Img2 from "../../../assets/images/historical/2.jpg";
import Img3 from "../../../assets/images/historical/3.jpg";
import Img4 from "../../../assets/images/historical/4.jpg";
import Img5 from "../../../assets/images/historical/5.jpg";
import Img6 from "../../../assets/images/historical/6.jpg";
import Img7 from "../../../assets/images/historical/7.jpg";

var aboutImages = [
    <img key="about-image-1" className="about-image" alt="about" src={Img1} />,
    <img key="about-image-2" className="about-image" alt="about" src={Img2} />,
    <img key="about-image-3" className="about-image" alt="about" src={Img3} />,
    <img key="about-image-4" className="about-image" alt="about" src={Img4} />,
    <img key="about-image-5" className="about-image" alt="about" src={Img5} />,
    <img key="about-image-1" className="about-image" alt="about" src={Img6} />,
    <img key="about-image-2" className="about-image" alt="about" src={Img7} />
];

class About extends React.Component {
    render() {
        return (
            <section id="about">
                <h1 className="section-title">Our Story</h1>
                <p className="section-description">
                    In 1966, owner Marino Osso arrived in Canada at the age of nineteen from Calabria, Italy. Being
                    raised by two hardworking farmers, he knew the value of making an honest living and was inspired to
                    pursue a trade. Determined to succeed, he obtained his license in Electrical Construction
                    Maintenance from George Brown College in 1972. Marino then opened a contracting operation called
                    Osso Electric Limited, where he dedicated twelve years to perfecting his craft. In 1984, he sold
                    Osso Electric and began a new venture through the knowledge he developed as an expert businessman in
                    the lighting field. Thanks to the support that we have received from the community, Osso City
                    Lighting is now celebrating 30+ years of customer satisfaction.
                </p>
                <p className="section-description">
                    Since its inception in 1984, Osso City Lighting has proudly been one of the Durham Region’s largest
                    purveyors of fine lighting. Our goal is to continuously provide you the same level of excellence
                    that we have shown for over a quarter century. Whether it's traditional, contemporary, or anything
                    in between, Osso City Lighting has exactly what you need. Come visit our family and see the light in
                    what we love.
                </p>
                <div id="about-content-container">
                    <Carousel speed={1000} centerMode>
                        {aboutImages}
                    </Carousel>
                </div>
            </section>
        );
    }
}

export default About;
