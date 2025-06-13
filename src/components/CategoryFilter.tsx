import React, { useState } from "react";
import "./CategoryFilter.css";

export interface CategoryFilterProps {
  categories?: string[];
  initialCategory?: string;
  onChange?: (category: string) => void;
  className?: string;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories = ["all items", "breads", "pastries", "cakes"],
  initialCategory = "all items",
  onChange,
  className = "",
}) => {
  const [selected, setSelected] = useState<string>(initialCategory);

  const handleClick = (category: string) => {
    setSelected(category);
    onChange?.(category);
  };

  return (
    <div className={`category-filter ${className}`}>
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => handleClick(cat)}
          className={`filter-button ${selected === cat ? "selected" : ""}`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};
