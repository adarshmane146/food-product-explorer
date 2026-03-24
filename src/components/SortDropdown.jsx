function SortDropdown({ onSort }) {
  return (
    <select onChange={(e) => onSort(e.target.value)}>
      <option value="">Sort</option>
      <option value="name-asc">Name A-Z</option>
      <option value="name-desc">Name Z-A</option>
      <option value="grade-asc">Nutrition Grade ↑</option>
      <option value="grade-desc">Nutrition Grade ↓</option>
    </select>
  );
}

export default SortDropdown;