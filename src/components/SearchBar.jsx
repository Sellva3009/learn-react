import React from 'react';

const SearchBar = ({
  filterText,
  inStockOnly,
  onFilterTextChange,
  onStockOnlyChange
}) => {
    const handleCheckboxChange = () => {
      onStockOnlyChange(!inStockOnly);
    };
  return (
    <form>
      <input
        type="text"
        value={filterText}
        placeholder="Search..."
        onChange={(e) => onFilterTextChange(e.target.value)}
      />
      <label>
        <input
          type="checkbox"
          checked={inStockOnly}
          onChange={handleCheckboxChange}
        />{" "}
        Only show products in stock
      </label>
    </form>
  );
};

export default SearchBar;
