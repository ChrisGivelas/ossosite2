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
        const sortedSuppliers = this.props.suppliers.sort((a,b) => a.name.localeCompare(b.name));
        return (
            <section id="brands">
                <h1 className="section-title">Our Suppliers</h1>
                <h4 className="section-description">
                    We work closely with suppliers to provide you with the best selection at the best prices.
                </h4>
                <div id="suppliers-container">
                    {sortedSuppliers.map(supplierInfo => (
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
