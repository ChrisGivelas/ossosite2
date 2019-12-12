import React from "react";
import ScrollableAnchor from "react-scrollable-anchor";
import Supplier from "./_supplier";
import {wrapGrid} from "animate-css-grid";

class Suppliers extends React.Component {
    static defaultProps = {
        suppliers: []
    };

    componentDidMount() {
        const grid = document.querySelector("#suppliers-container");
        wrapGrid(grid, {
            stagger: 10,
            duration: 400,
            onEnd: list => console.log(list)
        });
    }
    render() {
        return (
            <ScrollableAnchor id="suppliers">
                <section id="suppliers-section">
                    <h3 className="section-title">Our Suppliers</h3>
                    <p className="section-description">Description goes here</p>
                    <div id="suppliers-container">
                        {this.props.suppliers.map(supplierInfo => (
                            <Supplier key={`${supplierInfo.id}_${supplierInfo.name}`} {...supplierInfo} />
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
