import React from "react";
import Carousel from "../../shared/Carousel";
import {modifiedDebounce, elementIsHidden} from "../../../utils";

const ABOUT_IMAGES_COUNT = 7;
class About extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            aboutImgs: []
        };

        this.slickRef = React.createRef();
        this.aboutRef = React.createRef();
        this.isPaused = false;
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.startStopCarousel);
    }

    componentDidMount() {
        new Promise(resolve => {
            const fetchAboutImagePromises = [...Array(ABOUT_IMAGES_COUNT).keys()].map((_, index) => {
                return import(`../../../assets/images/historical/${index + 1}.jpg`);
            });

            Promise.all(fetchAboutImagePromises).then(imgs => {
                this.setState(
                    {
                        aboutImgs: imgs.map((img, index) => {
                            return (
                                <img
                                    key={`about-image-${index}`}
                                    className="about-image"
                                    alt="about"
                                    src={img.default}
                                />
                            );
                        })
                    },
                    resolve
                );
            });
        }).then(() => {
            this.startStopCarousel = modifiedDebounce(_ => {
                if (elementIsHidden(this.aboutRef.current)) {
                    if (!this.isPaused) {
                        this.slickRef.current.slickPause();
                        this.isPaused = true;
                    }
                } else {
                    if (this.isPaused) {
                        this.slickRef.current.slickPlay();
                        this.isPaused = false;
                    }
                }
            }, 200);

            window.addEventListener("scroll", this.startStopCarousel);
        });
    }

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
                <div id="about-content-container" ref={this.aboutRef}>
                    <Carousel speed={3000} centerMode slickRef={this.slickRef}>
                        {this.state.aboutImgs}
                    </Carousel>
                </div>
            </section>
        );
    }
}

export default About;
