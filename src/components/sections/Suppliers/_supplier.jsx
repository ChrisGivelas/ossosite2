import React from "react";
import { withRouter } from "react-router-dom";
import { NavHashLink as NavLink } from "react-router-hash-link";
import { fetchAllImagesInDir, fetchImage } from "../../../utils";
import Carousel from "../../shared/Carousel";
import { Close } from "../../../assets/images/IconSvgs";

class SupplierContent extends React.Component {
  render() {
    const { name, description, website, handleClick, productImgs, logoImg, expanded } =
      this.props;

    return (
      <div className={`supplier-content${expanded ? " visible" : " invisible"}`}>
        <div className="supplier-content-header">
          <div className="supplier-content-header-logo">
            <img className="supplier-image" src={logoImg} alt={name} />
          </div>
          <div className="supplier-website">
            <a href={website} target="_blank" rel="noopener noreferrer">
              View Website
            </a>
          </div>
        </div>
        <Close onClick={handleClick} />
        <div className="supplier-content-main">
          <p className="supplier-description">"{description}"</p>
          <div className="supplier-product-carousel-container">
            <Carousel waitForAnimate>
              {productImgs.map((src, i) => (
                <img
                  key={`${name}_${i}`}
                  src={src}
                  className="supplier-product-image"
                  alt={`${name}_${i}`}
                />
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    );
  }
}

class ViewSupplier extends React.Component {
  isActive = (r) => this.props.location.hash.substr(1) === r;

  render() {
    const { name, handleClick, logoImg, expanded } = this.props;
    return (
      <NavLink
        isActive={this.isActive}
        smooth
        scroll={(element) => {
          var headerOffset = 175;
          var elementPosition = element.offsetTop;
          var offsetPosition = elementPosition - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }}
        className={`navlink${expanded ? " invisible" : " visible"}`}
        activeClassName="selected"
        to={`#brands-${name}`}
        
      >
        <div className={`view-supplier`} onClick={handleClick}>
          <img className="supplier-image" src={logoImg} alt={name} />
        </div>
      </NavLink>
    );
  }
}

class Supplier extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      expanded: false,
      productImgs: [],
      logoImg: null,
    };
  }

  handleCollapse = () => this.setState({ expanded: false });

  toggleExpand = () => {
    if (this.state.expanded) {
      this.setState({ expanded: false });
    } else {
      this.setState({ expanded: true });
    }
  };

  fetchSupplierAssets() {
    var t = this;
    const productImgsPromise = fetchAllImagesInDir({
      dir: `${origin}/images/supplier_products/${this.props.name.toLowerCase()}/`,
    });

    const logoImgPromise = fetchImage(
      `${origin}/images/supplier_logos/${this.props.name}-logo.png`
    );

    Promise.all([productImgsPromise, logoImgPromise]).then(([productImgs, logoImg]) => {
      t.setState({ productImgs, logoImg });
    })
  }

  componentDidMount() {
    this.fetchSupplierAssets();
  }

  render() {
    return (
      <div
        id={`brands-${this.props.name}`}
        className={`supplier elevation-level-2${
          this.state.expanded ? " expanded" : " collapsed"
        }`}
      >
        <div>
            <SupplierContent
              productImgs={this.state.productImgs}
              logoImg={this.state.logoImg}
              handleClick={this.toggleExpand}
              expanded={this.state.expanded}
              {...this.props}
            />
            <ViewSupplier
              logoImg={this.state.logoImg}
              handleClick={this.toggleExpand}
              expanded={this.state.expanded}
              {...this.props}
            />
        </div>
      </div>
    );
  }
}

export default withRouter(Supplier);
