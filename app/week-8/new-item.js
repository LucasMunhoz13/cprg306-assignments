"use client";

import { useState } from "react";

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  const increment = () => setQuantity((prev) => Math.min(prev + 1, 20));
  const decrement = () => setQuantity((prev) => Math.max(prev - 1, 1));

  const handleSubmit = (event) => {
    event.preventDefault();
    const newItem = {
      id: crypto.randomUUID(),
      name,
      quantity,
      category,
    };
    onAddItem(newItem);
    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-800 p-4 rounded shadow-md w-full max-w-md mb-6">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Item name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full p-2 rounded bg-gray-700 text-white placeholder-gray-400"
        />
      </div>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <button
            type="button"
            onClick={decrement}
            className="bg-gray-700 text-white px-3 py-1 rounded-l"
            disabled={quantity === 1}
          >
            -
          </button>
          <span className="bg-gray-700 text-white px-4 py-1">{quantity}</span>
          <button
            type="button"
            onClick={increment}
            className="bg-gray-700 text-white px-3 py-1 rounded-r"
            disabled={quantity === 20}
          >
            +
          </button>
        </div>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="bg-gray-700 text-white p-2 rounded"
        >
          <option value="produce">Produce</option>
          <option value="dairy">Dairy</option>
          <option value="bakery">Bakery</option>
          <option value="meat">Meat</option>
          <option value="frozen">Frozen Foods</option>
          <option value="canned">Canned Goods</option>
          <option value="dry">Dry Goods</option>
          <option value="beverages">Beverages</option>
          <option value="snacks">Snacks</option>
          <option value="household">Household</option>
          <option value="other">Other</option>
        </select>
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-full"
      >
        +
      </button>
    </form>
  );
}