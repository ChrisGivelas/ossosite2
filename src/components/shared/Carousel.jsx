import React from "react";
import * as P from "prop-types";

import Slider from "react-slick";

function NextArrow(props) {
    const {onClick, extraClasses} = props;
    return <div className={`custom-slider-arrow next ${extraClasses ? extraClasses : ""}`} onClick={onClick} />;
}

function PrevArrow(props) {
    const {onClick, extraClasses} = props;
    return <div className={`custom-slider-arrow prev ${extraClasses ? extraClasses : ""}`} onClick={onClick} />;
}

export default class Carousel extends React.Component {
    static propTypes = {
        children: P.array.isRequired
    };

    static defaultProps = {
        children: [],
        dots: false,
        arrows: false,
        infinite: true,
        blockInfinite: false,
        speed: 2000,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: false,
        draggable: false,
        accessibility: true,
        slickRef: undefined,
        customArrows: false,
        vertical: false
    };

    constructor(props) {
        super(props);

        this.state = {
            currentSlide: 0
        };
    }

    setCurrentSlide = index => this.setState({currentSlide: index});

    render() {
        var {slickRef, children, customArrows, ...settings} = this.props;

        if (customArrows === true) {
            settings["nextArrow"] = <NextArrow extraClasses={settings.vertical ? "vertical" : null} />;
            settings["prevArrow"] = <PrevArrow extraClasses={settings.vertical ? "vertical" : null} />;
        }

        let classNames = this.props.blockInfinite
            ? this.state.currentSlide === 0
                ? "beginning"
                : this.state.currentSlide === this.props.children.length - 1
                ? "end"
                : ""
            : "";

        return (
            <Slider ref={slickRef} {...settings} afterChange={this.setCurrentSlide} className={classNames}>
                {children}
            </Slider>
        );
    }
}
