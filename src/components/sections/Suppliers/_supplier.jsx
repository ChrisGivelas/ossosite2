import React from "react";
import {withRouter} from "react-router-dom";
import {getImageURL} from "../../../utils";
import {NavHashLink as NavLink} from "react-router-hash-link";

function SupplierContent({name, description, website, handleClick, productTypes}) {
    return (
        <div className="supplier-content" onClick={handleClick}>
            <img className="supplier-image" src={getImageURL(`${name}-logo.png`, "images/supplier_logos")} alt={name} />
            {productTypes instanceof Array && productTypes.length > 0 && (
                <ul>
                    {productTypes.map(type => (
                        <li>{type}</li>
                    ))}
                </ul>
            )}
            <a className="supplier-website" href={website} target="_blank" rel="noopener noreferrer">
                View Website
            </a>
            <p className="supplier-description">"{description}"</p>
        </div>
    );
}

class ViewSupplier extends React.Component {
    isActive = r => this.props.location.hash.substr(1) === r;

    render() {
        const {name, handleClick} = this.props;
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
                    <img
                        className="supplier-image"
                        src={getImageURL(`${name}-logo.png`, "images/supplier_logos")}
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

    render() {
        return (
            <div
                id={`brands-${this.props.name}`}
                className={`supplier elevation-level-2${this.state.expanded ? " expanded" : " collapsed"}`}
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
