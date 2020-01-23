import React from "react";
import {withRouter} from "react-router-dom";
import {getImageURL} from "../../../utils/resourceUtils";
import {NavHashLink as NavLink, HashLink as Link} from "react-router-hash-link";

function SupplierContent({name, description, website}) {
    return (
        <div className="supplier-content">
            <img
                className="supplier-image"
                src={getImageURL(`${name}-logo.jpg`, "Supplier_Logos", "http://ossolighting.ca")}
                alt={name}
            />
            <a className="supplier-website backgroundChange" href={website} target="_blank" rel="noopener noreferrer">
                View Website
            </a>
            <p className="supplier-description">"{description}"</p>
        </div>
    );
}

function ViewSupplier({name}) {
    return (
        <div className="view-supplier">
            <img
                className="supplier-image"
                src={getImageURL(`${name}-logo.jpg`, "Supplier_Logos", "http://ossolighting.ca")}
                alt={name}
            />
            <div className="view-supplier-overlay">
                <h2>View</h2>
            </div>
        </div>
    );
}

class Supplier extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            expanded: false
        };
    }

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

    handleCollapse = () => this.setState({expanded: false});

    isActive = r => this.props.location.hash.substr(1) === r;

    render() {
        return (
            <div
                id={`shop-${this.props.name}`}
                className={`supplier elevation-level-2${this.state.expanded ? " expanded" : " collapsed"}`}
                onClick={this.toggleExpand}
            >
                <div>
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
                        to={`#shop-${this.props.name}`}
                    >
                        {this.state.expanded ? <SupplierContent {...this.props} /> : <ViewSupplier {...this.props} />}
                    </NavLink>
                </div>
            </div>
        );
    }
}

export default withRouter(Supplier);
