import React from "react";
import TouchEnabledContext from "../../touchEnabledContext";

import Carousel from "../shared/Carousel";
import Navbar from "../shared/WebNavbar";
import MobileNav from "../shared/MobileNav";

import * as Logo from "../../assets/images/logo_main.png";

import { modifiedDebounce, elementIsHidden } from "../../utils";

function LandingWeb({ landingImgs, slickRef, landingRef }) {
  return (
    <React.Fragment>
      <Navbar />
      <section id="landing">
        <div id="landing-background">
          <div id="landing-background-content" ref={landingRef}>
            <Carousel speed={3000} slickRef={slickRef}>
              {landingImgs}
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
            {landingImgs}
          </Carousel>
        </div>
        <div id="landing-background-overlay"></div>
      </div>
      <div id="landing-content-container">
        <img id="logo" src={Logo} alt="Osso City Lighting" />
        <MobileNav />
        <h1 style={{ color: "white", padding: 30 }}>
          Fine Lighting and Décor since 1984.
        </h1>
      </div>
    </section>
  );
}

const LANDING_IMAGES_COUNT = 16;

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

  componentDidMount() {
    new Promise((resolve) => {
      const fetchLandingImagePromises = [
        ...Array(LANDING_IMAGES_COUNT).keys(),
      ].map((_, index) => {
        return import(`../../assets/images/landing/${index + 1}.jpg`);
      });

      Promise.all(fetchLandingImagePromises).then((imgs) => {
        this.setState(
          {
            landingImgs: imgs.map((img, index) => {
              return (
                <img key={`Landing${index}`} src={img.default} alt="Landing" />
              );
            }),
          },
          resolve
        );
      });
    }).then(() => {
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
    });
  }

  render() {
    return (
      <TouchEnabledContext.Consumer>
        {(value) =>
          value === true ? (
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
      </TouchEnabledContext.Consumer>
    );
  }
}

export default LandingWrapper;
