import React from "react";
import Supplier from "./_supplier";
import { wrapGrid } from "animate-css-grid";
import { Assets } from "../../../App";

class Suppliers extends React.Component {
  static defaultProps = {
    suppliers: [],
    transitioning: false,
  };

  constructor(props) {
    super(props);

    this.state = { transitioning: false, filteredSuppliers: {} };
  }

  componentDidMount() {
    const that = this;
    const grid = document.querySelector("#suppliers-container");
    wrapGrid(grid, {
      duration: 500,
      onStart: (_) => that.setState({ transitioning: true }),
      onEnd: (_) => that.setState({ transitioning: false }),
    });
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.productTypes === undefined &&
      this.props.productTypes instanceof Set
    ) {
      let filteredSuppliers = Array.from(this.props.productTypes).reduce(
        (agg, curr) => {
          agg[curr] = false;
          return agg;
        },
        {}
      );

      this.setState({ filteredSuppliers });
    }
  }

  handleFilterSupplier = (e) => {
    let { value } = e.target;

    let currentState = this.state.filteredSuppliers[value];

    this.setState({
      filteredSuppliers: {
        ...this.state.filteredSuppliers,
        [value]: !currentState,
      },
    });
  };

  getFilteredAndSortedSuppliers = () => {
    var activatedFilters = Object.entries(this.state.filteredSuppliers).reduce(
      (activatedFilters, [key, value]) => {
        if (value) {
          return activatedFilters.concat(key);
        } else {
          return activatedFilters;
        }
      },
      []
    );

    if (activatedFilters.length === 0) {
      activatedFilters = Array.from(this.props.productTypes || new Set());
    }

    let filteredSuppliers = this.props.suppliers.filter((supplier) =>
      supplier.productTypes.some((pt) => activatedFilters.includes(pt))
    );
    let sortedSuppliers = filteredSuppliers.sort((a, b) =>
      a.name.localeCompare(b.name)
    );

    return sortedSuppliers;
  };

  render() {
    let suppliers = this.getFilteredAndSortedSuppliers();
    return (
      <section id="brands">
        <h1 className="section-title">Our Suppliers</h1>
        <h4 className="section-description">
          We work closely with suppliers to provide you with the best selection
          at the best prices.
        </h4>
        <h5 style={{ marginBottom: 0 }}>
          Use the filters provided to narrow your search.
        </h5>

        <fieldset id="supplier-filter-form">
          {Object.entries(this.state.filteredSuppliers).map(([key, value]) => {
            return (
              <div key={`productType["${key}"]`}>
                <input
                  className={`product-type-filter${value ? " clicked" : ""}`}
                  type="button"
                  onClick={this.handleFilterSupplier}
                  value={key}
                />
              </div>
            );
          })}
        </fieldset>

        <div id="suppliers-container">
          {suppliers.map((supplierInfo) => (
            <Supplier
              {...supplierInfo}
              key={`${supplierInfo.id}_${supplierInfo.name}`}
              transitioning={this.state.transitioning}
            />
          ))}
        </div>
      </section>
    );
  }
}
export default () => (
  <Assets.Consumer>
    {(config) => (
      <Suppliers
        suppliers={config.suppliers}
        productTypes={config.productTypes}
      />
    )}
  </Assets.Consumer>
);
