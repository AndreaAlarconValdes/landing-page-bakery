import { useState } from "react";
import "./Menu.css";
import { CategoryFilter } from "../components/CategoryFilter";
import { menuArray } from "../data/constants";
import Card from "../components/Card";

const Menu = () => {
  const [filter, setFilter] = useState("all items");

  const filteredItems =
    filter === "all items"
      ? menuArray
      : menuArray.filter((item) => item.category === filter);

  return (
    <div>
      <div className="contact-header">
        <h1>
          Our Complete <span>Menu</span>
        </h1>
        <p>
          Discover our full range of artisanal breads, pastries, and desserts
          crafted with love and tradition
        </p>
      </div>

      <div className="complete-menu">
        <CategoryFilter
          categories={["all items", "breads", "pastries", "cakes"]}
          initialCategory="all items"
          onChange={(category) => setFilter(category)}
        />
        <div className="section menu-section">
          {filteredItems.map((item) => (
            <div className="menu-card">
              <img src={item.imageSrc} alt={item.title} />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
