import React from "react";
import * as P from "prop-types";

import Slider from "react-slick";

export default class Carousel extends React.Component {
    static propTypes = {
        children: P.array.isRequired,
        settings: P.object
    };

    static defaultProps = {
        children: [],
        settings: {},
        slickRef: undefined
    };

    render() {
        return (
            <Slider ref={this.props.slickRef} {...this.props.settings}>
                {this.props.children}
            </Slider>
        );
    }
}
