import React from "react";
import ScrollableAnchor from "react-scrollable-anchor";
import Supplier from "./_supplier";
import {wrapGrid} from "animate-css-grid";
import {SUPPLIERS} from "../../../routes";

class Suppliers extends React.Component {
    static defaultProps = {
        suppliers: [],
        transitioning: false
    };

    constructor(props) {
        super(props);

        this.state = {supplierExpanded: null};
    }

    componentDidMount() {
        const that = this;
        const grid = document.querySelector("#suppliers-container");
        wrapGrid(grid, {
            duration: 200,
            delay: 25,
            onStart: _ => that.setState({transitioning: true}),
            onEnd: _ => that.setState({transitioning: false})
        });
    }

    toggleSupplierExpansion = id => {
        if (this.state.supplierExpanded === null || this.state.supplierExpanded !== id)
            this.setState({supplierExpanded: id});
        else this.setState({supplierExpanded: null});
    };

    render() {
        return (
            <ScrollableAnchor id={SUPPLIERS}>
                <section id="suppliers-section">
                    <h1 className="section-title">Our Suppliers</h1>
                    <h3 className="section-description">Description goes here</h3>
                    <div id="suppliers-container">
                        {this.props.suppliers.map(supplierInfo => (
                            <Supplier
                                key={`${supplierInfo.id}_${supplierInfo.name}`}
                                {...supplierInfo}
                                onClick={this.toggleSupplierExpansion}
                                expanded={this.state.supplierExpanded === supplierInfo.id}
                                transitioning={this.state.transitioning}
                            />
                        ))}
                    </div>
                </section>
            </ScrollableAnchor>
        );
    }
}

const defaultSuppliers = require("../../../suppliers.json");
export default ({suppliers}) =>
    suppliers instanceof Array ? <Suppliers suppliers={suppliers} /> : <Suppliers suppliers={defaultSuppliers} />;
