const CategoryDropdown = ({ currentCategory, onChange }) => {
  const categories = [
    "Food",
    "Travel",
    "Salary",
    "Miscellaneous",
  ];

  return (
    <select
      className="category-dropdown"
      value={currentCategory}
      onChange={(e) => onChange(e.target.value)}
    >
      {categories.map((category) => (
        <option
          key={category}
          value={category}
        >
          {category}
        </option>
      ))}
    </select>
  );
};

export default CategoryDropdown;