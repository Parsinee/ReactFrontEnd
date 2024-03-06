import PropTypes from "prop-types";

export default function SearchBar({
    filterText,
    inStockOnly,
    onFilterTextChange,
    onInStockOnlyChange
}) {
    return (
        <form>
            <input
                type="text"
                value={filterText} placeholder="Search..."
                onChange={(e) => onFilterTextChange(e.target.value)} />
            <lable>
                <input
                type="checkbox"
                checked={inStockOnly}
                onChange={(e) => onInStockOnlyChange(e.target.checked)} />
                {' '}
                Only show product in stock
            </lable>
        </form>
    );
}

SearchBar.PropTypes = {
    filterText: PropTypes.string.isRequired,
    inStockOnly: PropTypes.bool.isRequired,
    onFilterTextChange: PropTypes.func.isRequired,
    onInStockOnlyChange: PropTypes.func.isRequired,
};