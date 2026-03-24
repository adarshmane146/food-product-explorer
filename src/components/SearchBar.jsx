import { useState } from "react";

function SearchBar({ onSearch, onBarcodeSearch }) {

  const [query, setQuery] = useState("");
  const [barcode, setBarcode] = useState("");

  const handleSearch = () => {
    onSearch(query);
  };

  const handleBarcodeSearch = () => {
    onBarcodeSearch(barcode);
  };

  return (
    <div>

      {/* Product Name Search */}
      <input
        type="text"
        placeholder="Search product name"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <button onClick={handleSearch}>
        Search
      </button>

      <br /><br />

      {/* Barcode Search */}
      <input
        type="text"
        placeholder="Search by barcode"
        value={barcode}
        onChange={(e) => setBarcode(e.target.value)}
      />

      <button onClick={handleBarcodeSearch}>
        Search Barcode
      </button>

    </div>
  );
}

export default SearchBar;