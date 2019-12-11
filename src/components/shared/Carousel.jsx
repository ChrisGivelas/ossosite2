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
        speed: 2000,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: false,
        draggable: false,
        accessibility: true,
        slickRef: undefined
    };

    render() {
        const {slickRef, children, ...settings} = this.props;
        console.log("rerender with props:", this.props);

        return (
            <Slider ref={slickRef} {...settings}>
                {children}
            </Slider>
        );
    }
}
