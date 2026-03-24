import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";
import SortDropdown from "../components/SortDropdown";
import {
  fetchProductsByCategory,
  searchProductsByName,
  getProductByBarcode
} from "../services/api";

function Home() {

  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [category, setCategory] = useState("snacks");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadProducts();
  }, [page, category]);

  const loadProducts = async () => {

    try {

      setLoading(true);

      const data = await fetchProductsByCategory(category, page);

      if (!data || !data.products) return;

      if (page === 1) {
        setProducts(data.products);
      } else {
        setProducts((prev) => [...prev, ...data.products]);
      }

    } catch (error) {

      console.log("API temporary error. Try again later.");

    } finally {

      setLoading(false);

    }
  };

  const handleSearch = async (query) => {

    try {

      const data = await searchProductsByName(query);
      setProducts(data.products || []);

    } catch (error) {

      console.log("Search error");

    }
  };

  const handleCategory = (cat) => {

    setCategory(cat);
    setPage(1);

  };

  const handleBarcodeSearch = async (barcode) => {

    try {

      const data = await getProductByBarcode(barcode);

      if (data.product) {
        setProducts([data.product]);
      }

    } catch (error) {

      console.log("Barcode search error");

    }
  };

  const handleSort = (type) => {

    let sorted = [...products];

    if (type === "name-asc")
      sorted.sort((a, b) =>
        (a.product_name || "").localeCompare(b.product_name || "")
      );

    if (type === "name-desc")
      sorted.sort((a, b) =>
        (b.product_name || "").localeCompare(a.product_name || "")
      );

    if (type === "grade-asc")
      sorted.sort((a, b) =>
        (a.nutrition_grade_fr || "").localeCompare(b.nutrition_grade_fr || "")
      );

    if (type === "grade-desc")
      sorted.sort((a, b) =>
        (b.nutrition_grade_fr || "").localeCompare(a.nutrition_grade_fr || "")
      );

    setProducts(sorted);
  };

  return (

    <div className="container">

      <h1 className="title">Food Product Explorer</h1>

      <div className="controls">

        <SearchBar
          onSearch={handleSearch}
          onBarcodeSearch={handleBarcodeSearch}
        />

        <CategoryFilter onCategory={handleCategory} />

        <SortDropdown onSort={handleSort} />

      </div>

      <div className="grid">

        {products.map((product) => (
          <ProductCard key={product.code} product={product} />
        ))}

      </div>

      <div className="loadMore">

        <button
          onClick={() => setPage((prev) => prev + 1)}
          disabled={loading}
        >
          {loading ? "Loading..." : "Load More"}
        </button>

      </div>

    </div>

  );
}

export default Home;