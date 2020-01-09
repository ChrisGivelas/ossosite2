import React from "react";
import * as P from "prop-types";

import Slider from "react-slick";

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
        slickRef: undefined
    };

    constructor(props) {
        super(props);

        this.state = {
            currentSlide: 0
        };
    }

    setCurrentSlide = index => this.setState({currentSlide: index});

    render() {
        const {slickRef, children, ...settings} = this.props;

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
