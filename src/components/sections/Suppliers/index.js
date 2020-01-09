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

        this.state = {transitioning: false};

        this.supplierCurrentlyExpanded = React.createRef();
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

    render() {
        return (
            <ScrollableAnchor id={SUPPLIERS}>
                <section id="suppliers-section">
                    <h1 className="section-title">Our Suppliers</h1>
                    <h3 className="section-description">Description goes here</h3>
                    <div id="suppliers-container">
                        {this.props.suppliers.map(supplierInfo => (
                            <Supplier
                                {...supplierInfo}
                                key={`${supplierInfo.id}_${supplierInfo.name}`}
                                transitioning={this.state.transitioning}
                                supplierCurrentlyExpanded={this.supplierCurrentlyExpanded}
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
