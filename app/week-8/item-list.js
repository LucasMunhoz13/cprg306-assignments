"use client";

import { useState } from "react";
import Item from "./item";

export default function ItemList({ items }) {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  return (
    <div className="w-full max-w-4xl">
      <div className="flex justify-center mb-4">
        <button
          onClick={() => setSortBy("name")}
          className={`px-4 py-2 font-bold rounded ${
            sortBy === "name" ? "bg-orange-500 text-white" : "bg-gray-700 text-white"
          }`}
        >
          Name
        </button>
        <button
          onClick={() => setSortBy("category")}
          className={`px-4 py-2 font-bold rounded ${
            sortBy === "category" ? "bg-orange-500 text-white" : "bg-gray-700 text-white"
          }`}
        >
          Category
        </button>
      </div>
      <ul className="space-y-2">
        {sortedItems.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </ul>
    </div>
  );
}