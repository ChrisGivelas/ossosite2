import React from "react";
import Supplier from "./_supplier";
import {wrapGrid} from "animate-css-grid";

const defaultSuppliers = require("../../../suppliers.json");
class Suppliers extends React.Component {
    static defaultProps = {
        suppliers: defaultSuppliers,
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
            duration: 500,
            onStart: _ => that.setState({transitioning: true}),
            onEnd: _ => that.setState({transitioning: false})
        });
    }

    render() {
        return (
            <section id="shop">
                <h1 className="section-title">Our Suppliers</h1>
                <h4 className="section-description">Description goes here</h4>
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
        );
    }
}
export default Suppliers;
