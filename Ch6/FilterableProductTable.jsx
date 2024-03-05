import PropTypes from "prop-types";

import SearchBar from "./SearchBar";
import ProductTabel from "./ProdutcTable";

export default function FilterableProductTable(
    {Product, filterData, filterAction, inStockOnlyData, inStockOnlyActino }) {
        return (
            <div>
                <SearchBar
                    filterText={filterData}
                    inStockOnly={inStockOnlyData}
                    onFilterTextChange={filterAction}
                    onInStockOnlyChange={inStockOnlyActino}
                />
                <ProductTabel
                    Product={product}
                    filterText={filterData}
                    onInStockOnlyChange={inStockOnlyData}
                />
            </div>
        );
    }

    FilterableProductTable.prototype = {
        product: PropTypes.object.isRequired,
        filterData: PropTypes.string.isRequired,
        filterAction: PropTypes.func.isRequired,
        inStockOnlyData: PropTypes.func.isRequired
    };