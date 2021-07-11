import React from "react";
import { TouchEnabled } from "../../App";

import Carousel from "../shared/Carousel";
import Navbar from "../shared/WebNavbar";
import MobileNav from "../shared/MobileNav";

import * as Logo from "../../assets/images/logo_main_light.png";

import {
    modifiedDebounce,
    elementIsHidden,
    fetchAllImagesInDir,
} from "../../utils";

function LandingWeb({ landingImgs, slickRef, landingRef }) {
    return (
        <React.Fragment>
            <Navbar />
            <section id="landing">
                <div id="landing-background">
                    <div id="landing-background-content" ref={landingRef}>
                        <Carousel speed={3000} slickRef={slickRef}>
                            {landingImgs.map((src, i) => (
                                <img
                                    key={`landing_${i}`}
                                    src={src}
                                    alt={`landing_${i}`}
                                />
                            ))}
                        </Carousel>
                    </div>
                    <div id="landing-background-overlay"></div>
                </div>
                <div id="landing-content-container">
                    <h1>Fine Lighting and Décor since 1984.</h1>
                </div>
            </section>
        </React.Fragment>
    );
}

function LandingMobile({ landingImgs, slickRef, landingRef }) {
    return (
        <section id="landing" className="mobile">
            <div id="landing-background">
                <div id="landing-background-content" ref={landingRef}>
                    <Carousel speed={3000} slickRef={slickRef}>
                        {landingImgs.map((src, i) => (
                            <img
                                key={`landing_${i}`}
                                src={src}
                                alt={`landing_${i}`}
                            />
                        ))}
                    </Carousel>
                </div>
                <div id="landing-background-overlay"></div>
            </div>
            <div id="landing-content-container">
                <img id="logo" src={Logo} alt="Osso City Lighting" />
                <MobileNav />
                <h1 style={{ padding: 15 }}>
                    Fine Lighting and Décor since 1984.
                </h1>
            </div>
        </section>
    );
}

class LandingWrapper extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            landingImgs: [],
        };

        this.slickRef = React.createRef();
        this.landingRef = React.createRef();
        this.isPaused = false;
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.startStopCarousel);
    }

    async componentDidMount() {
        var imgs = await fetchAllImagesInDir({
            dir: `${origin}/images/landing/`,
            batchSize: 20,
            errorLimit: 5,
        });

        this.setState({ landingImgs: imgs });

        this.startStopCarousel = modifiedDebounce((_) => {
            if (elementIsHidden(this.landingRef.current)) {
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
    }

    render() {
        return (
            <TouchEnabled.Consumer>
                {(isTouchEnabled) =>
                    isTouchEnabled === true ? (
                        <LandingMobile
                            landingImgs={this.state.landingImgs}
                            landingRef={this.landingRef}
                            slickRef={this.slickRef}
                        />
                    ) : (
                        <LandingWeb
                            landingImgs={this.state.landingImgs}
                            landingRef={this.landingRef}
                            slickRef={this.slickRef}
                        />
                    )
                }
            </TouchEnabled.Consumer>
        );
    }
}

export default LandingWrapper;
