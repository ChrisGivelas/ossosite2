import React from "react";
import { fetchAllImagesInDir } from "../../utils";
import Carousel from "./Carousel";

class MultiImageFetcher extends React.Component {
  static defaultProps = {
    batchSize: 3,
    errorLimit: 3,
    withCarousel: false,
  };

  constructor(props) {
    super(props);

    this.state = {
      imgs: [],
    };
  }

  async componentDidMount() {
    const imgs = await fetchAllImagesInDir(this.props);

    this.setState({ imgs });
  }

  render() {
    const { alt, classes, withCarousel } = this.props;
    var { imgs } = this.state;
    const imgTags = imgs.map((src, i) => (
      <img
        key={`${alt}_${i}`}
        src={src}
        className={classes}
        alt={`${alt}_${i}`}
      />
    ));

    return withCarousel ? <Carousel>{imgTags}</Carousel> : imgTags;
  }
}

export default MultiImageFetcher;
