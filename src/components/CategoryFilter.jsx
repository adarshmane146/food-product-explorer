function CategoryFilter({ onCategory }) {
  const categories = ["beverages", "snacks", "dairy", "chocolates"];

  return (
    <select onChange={(e) => onCategory(e.target.value)}>
      <option value="">Select Category</option>
      {categories.map((cat) => (
        <option key={cat} value={cat}>
          {cat}
        </option>
      ))}
    </select>
  );
}

export default CategoryFilter;