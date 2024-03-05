import PropTypes from "prop-types";

import ProductRow from "./ProductRow";
import ProductCategoryRow from "./ProductCategoryRow";

export default function ProductTabel({ produtcs, filterText, inStockOnly }) {
    const rows = [];
    let lastCategory = null;

    produtcs.forEach((produtc) => {
        if (
            produtc.name.toLowerCase().indexOf(
                filterText.toLowerCase()
            ) === -1
        ) {
            return;
        }
        if (inStockOnly && !produtc.stocked) {
            return;
        }
        if (produtc.category !== lastCategory) {
            rows.push(
                <ProductCategoryRow
                    category={produtc.category}
                    key={produtc.category} />
            );
        }
        rows.push(
            <ProductRow
                produtc={produtc}
                key={produtc.name} />
        );
        lastCategory = produtc.category;
    });
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>
    );
}

ProductTabel.prototype = {
    produtc: PropTypes.object.isRequired,
    filterText: PropTypes.string.isRequired,
    inStockOnly: PropTypes.bool.isRequired
};