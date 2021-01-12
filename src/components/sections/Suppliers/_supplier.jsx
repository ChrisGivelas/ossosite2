import React from "react";
import { withRouter } from "react-router-dom";
import { NavHashLink as NavLink } from "react-router-hash-link";
import ImageFetcher from "../../shared/ImageFetcher";
import MultiImageFetcher from "../../shared/MultiImageFetcher";

class SupplierContent extends React.Component {
  render() {
    const { name, description, website, handleClick } = this.props;

    return (
      <div className="supplier-content" onClick={handleClick}>
        <div className="supplier-content-header">
          <div className="supplier-content-header-logo">
            <ImageFetcher
              classes="supplier-image"
              url={`${origin}/images/supplier_logos/${name}-logo.png`}
              alt={name}
            />
          </div>
          <a
            className="supplier-website"
            href={website}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Website
          </a>
        </div>
        <div className="supplier-content-main">
          <p className="supplier-description">"{description}"</p>
          <div className="supplier-product-carousel-container">
            <MultiImageFetcher
              classes="supplier-product-image"
              dir={`${origin}/images/supplier_products/${name.toLowerCase()}/`}
              alt={name}
              withCarousel
            />
          </div>
        </div>
      </div>
    );
  }
}

class ViewSupplier extends React.Component {
  isActive = (r) => this.props.location.hash.substr(1) === r;

  render() {
    const { name, handleClick } = this.props;
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
        className="navlink"
        activeClassName="selected"
        to={`#brands-${name}`}
      >
        <div className="view-supplier" onClick={handleClick}>
          <ImageFetcher
            classes="supplier-image"
            url={`${origin}/images/supplier_logos/${name}-logo.png`}
            alt={name}
          />
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

  render() {
    return (
      <div
        id={`brands-${this.props.name}`}
        className={`supplier elevation-level-2${
          this.state.expanded ? " expanded" : " collapsed"
        }`}
      >
        <div>
          {this.state.expanded ? (
            <SupplierContent handleClick={this.toggleExpand} {...this.props} />
          ) : (
            <ViewSupplier handleClick={this.toggleExpand} {...this.props} />
          )}
        </div>
      </div>
    );
  }
}

export default withRouter(Supplier);
