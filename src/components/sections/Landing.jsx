import React from "react";
import TouchEnabledContext from "../../touchEnabledContext";

import Carousel from "../shared/Carousel";
import Navbar from "../shared/WebNavbar";
import MobileNav from "../shared/MobileNav";

import * as Logo from "../../assets/images/[H] Osso Lighting 2019 Logo (no stroke).png";

import * as Landing1 from "../../assets/images/Landing Page Images/1.jpg";
import * as Landing2 from "../../assets/images/Landing Page Images/2.jpg";
import * as Landing3 from "../../assets/images/Landing Page Images/3.jpg";
import * as Landing4 from "../../assets/images/Landing Page Images/4.jpg";
import * as Landing5 from "../../assets/images/Landing Page Images/5.jpg";
import * as Landing6 from "../../assets/images/Landing Page Images/6.jpg";
import * as Landing7 from "../../assets/images/Landing Page Images/7.jpg";
import * as Landing8 from "../../assets/images/Landing Page Images/8.jpg";
import * as Landing9 from "../../assets/images/Landing Page Images/9.jpg";
import * as Landing10 from "../../assets/images/Landing Page Images/10.jpg";
import * as Landing11 from "../../assets/images/Landing Page Images/11.jpg";
import * as Landing12 from "../../assets/images/Landing Page Images/12.jpg";
import * as Landing13 from "../../assets/images/Landing Page Images/13.jpg";
import * as Landing14 from "../../assets/images/Landing Page Images/14.jpg";
import * as Landing15 from "../../assets/images/Landing Page Images/15.jpg";
import * as Landing16 from "../../assets/images/Landing Page Images/16.jpg";

const LandingPageImages = [
    <img key="Landing1" src={Landing1} alt="Landing1" />,
    <img key="Landing2" src={Landing2} alt="Landing2" />,
    <img key="Landing3" src={Landing3} alt="Landing3" />,
    <img key="Landing4" src={Landing4} alt="Landing4" />,
    <img key="Landing5" src={Landing5} alt="Landing5" />,
    <img key="Landing6" src={Landing6} alt="Landing6" />,
    <img key="Landing7" src={Landing7} alt="Landing7" />,
    <img key="Landing8" src={Landing8} alt="Landing8" />,
    <img key="Landing9" src={Landing9} alt="Landing9" />,
    <img key="Landing10" src={Landing10} alt="Landing10" />,
    <img key="Landing11" src={Landing11} alt="Landing11" />,
    <img key="Landing12" src={Landing12} alt="Landing12" />,
    <img key="Landing13" src={Landing13} alt="Landing13" />,
    <img key="Landing14" src={Landing14} alt="Landing14" />,
    <img key="Landing15" src={Landing15} alt="Landing15" />,
    <img key="Landing16" src={Landing16} alt="Landing16" />
];

function LandingWeb() {
    return (
        <React.Fragment>
            <Navbar />
            <section id="landing">
                <div id="landing-background">
                    <div id="landing-background-content">
                        <Carousel>{LandingPageImages}</Carousel>
                    </div>
                    <div id="landing-background-overlay"></div>
                </div>
                <div id="landing-content-container">
                    <img id="logo" src={Logo} alt="Osso City Lighting" />
                    <h1 style={{color: "white", padding: 30}}>Fine Lighting and Décor since 1984.</h1>
                </div>
            </section>
        </React.Fragment>
    );
}

function LandingMobile() {
    return (
        <section id="landing" className="mobile">
            <div id="landing-background">
                <div id="landing-background-content">
                    <Carousel>{LandingPageImages}</Carousel>
                </div>
                <div id="landing-background-overlay"></div>
            </div>
            <div id="landing-content-container">
                <img id="logo" src={Logo} alt="Osso City Lighting" />
                <MobileNav />
                <h1 style={{color: "white", padding: "0px 15px 0px 15px"}}>Fine Lighting and Décor since 1984.</h1>
            </div>
        </section>
    );
}

export default () => (
    <TouchEnabledContext.Consumer>
        {value => (value === true ? <LandingMobile /> : <LandingWeb />)}
    </TouchEnabledContext.Consumer>
);
