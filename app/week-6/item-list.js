"use client";

import { useState } from "react";
import Item from "./item";
import itemsData from "./items.json";

export default function ItemList() {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...itemsData].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  const groupedItems = itemsData.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {});

  const renderItems = () => {
    if (sortBy === "group") {
      return Object.keys(groupedItems).sort().map(category => (
        <div key={category}>
          <h2 className="text-2xl font-bold capitalize mt-4">{category}</h2>
          <ul>
            {groupedItems[category].sort((a, b) => a.name.localeCompare(b.name)).map(item => (
              <Item key={item.id} {...item} />
            ))}
          </ul>
        </div>
      ));
    } else {
      return sortedItems.map(item => (
        <Item key={item.id} {...item} />
      ));
    }
  };

  return (
    <div>
      <div className="flex justify-center mb-4">
        <button
          onClick={() => setSortBy("name")}
          className={`font-bold py-2 px-4 m-1 rounded ${sortBy === "name" ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
        >
          Sort by Name
        </button>
        <button
          onClick={() => setSortBy("category")}
          className={`font-bold py-2 px-4 m-1 rounded ${sortBy === "category" ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
        >
          Sort by Category
        </button>
        <button
          onClick={() => setSortBy("group")}
          className={`font-bold py-2 px-4 m-1 rounded ${sortBy === "group" ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
        >
          Group by Category
        </button>
      </div>
      {renderItems()}
    </div>
  );
}