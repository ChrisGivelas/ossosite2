import React from "react";
import {withRouter} from "react-router-dom";
import {NavHashLink as NavLink} from "react-router-hash-link";
import Carousel from "../../shared/Carousel";

class SupplierContent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            productImages: null
        };
    }

    componentDidMount() {
        import(`../../../assets/images/supplier_products/${this.props.name.toUpperCase()}`).then(products => {
            this.setState({
                productImages: Object.entries(products).map(([key, src], index) => {
                    return (
                        <img
                            key={`${this.props.name}-${key}-${index}`}
                            className="supplier-product-image"
                            src={src}
                            alt="Supplier Product"
                        />
                    );
                })
            });
        });
    }

    render() {
        const {name, description, website, handleClick, logo} = this.props;

        return (
            <div className="supplier-content" onClick={handleClick}>
                <div className="supplier-content-header">
                    <div className="supplier-content-header-logo">
                        <img className="supplier-image" src={logo} alt={name} />
                    </div>
                    <a className="supplier-website" href={website} target="_blank" rel="noopener noreferrer">
                        View Website
                    </a>
                </div>
                <div className="supplier-content-main">
                    <p className="supplier-description">"{description}"</p>
                    <div className="supplier-product-carousel-container">
                        <Carousel>{this.state.productImages || []}</Carousel>
                    </div>
                </div>
            </div>
        );
    }
}

class ViewSupplier extends React.Component {
    isActive = r => this.props.location.hash.substr(1) === r;

    render() {
        const {name, handleClick, logo} = this.props;
        return (
            <NavLink
                isActive={this.isActive}
                smooth
                scroll={element => {
                    var headerOffset = 175;
                    var elementPosition = element.offsetTop;
                    var offsetPosition = elementPosition - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth"
                    });
                }}
                className="navlink"
                activeClassName="selected"
                to={`#brands-${this.props.name}`}
            >
                <div className="view-supplier" onClick={handleClick}>
                    <img className="supplier-image" src={logo} alt={name} />
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
            logo: null
        };
    }

    componentDidMount() {
        import(`../../../assets/images/supplier_logos/${this.props.name}-logo.png`).then(imag => {
            this.setState({logo: imag.default});
        });
    }

    handleCollapse = () => this.setState({expanded: false});

    toggleExpand = () => {
        if (this.state.expanded) {
            this.setState({expanded: false});
            this.props.supplierCurrentlyExpanded.current = undefined;
        } else {
            if (this.props.supplierCurrentlyExpanded.current) {
                this.props.supplierCurrentlyExpanded.current.handleCollapse();
                this.props.supplierCurrentlyExpanded.current = this;
            } else {
                this.props.supplierCurrentlyExpanded.current = this;
            }
            this.setState({expanded: true});
        }
    };

    render() {
        return (
            <div
                id={`brands-${this.props.name}`}
                className={`supplier elevation-level-2${this.state.expanded ? " expanded" : " collapsed"}`}
            >
                <div>
                    {this.state.expanded ? (
                        <SupplierContent handleClick={this.toggleExpand} {...this.props} logo={this.state.logo} />
                    ) : (
                        <ViewSupplier handleClick={this.toggleExpand} {...this.props} logo={this.state.logo} />
                    )}
                </div>
            </div>
        );
    }
}

export default withRouter(Supplier);
