"use client";

import { useState } from "react";

export default function NewItem() {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce");

    const increment = () => setQuantity(prevQuantity => Math.min(prevQuantity + 1, 20));
    const decrement = () => setQuantity(prevQuantity => Math.max(prevQuantity - 1, 1));

    const handleSubmit = (event) => {
        event.preventDefault();
        const item = { name, quantity, category };
        console.log(item);
        alert(`Name: ${name}\nQuantity: ${quantity}\nCategory: ${category}`);
        setName("");
        setQuantity(1);
        setCategory("produce");
    };

    return (
        <div className="flex flex-col justify-center items-center  bg-gray-100">
            <h1 className="text-3xl font-bold text-gray-700">Add New Item</h1>
            <form onSubmit={handleSubmit} className="p-4 bg-white rounded shadow-md max-w-sm w-full">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-4">
                    <p className="text-gray-700 text-sm font-bold mb-2">Quantity: {quantity}</p>
                    <button
                        type="button"
                        onClick={decrement}
                        className={`font-bold py-1 px-3 m-1 rounded ${quantity === 1 ? 'bg-gray-500 text-gray-300' : 'bg-blue-500 hover:bg-blue-700 text-white'}`}
                        disabled={quantity === 1}
                    >
                        -
                    </button>
                    <button
                        type="button"
                        onClick={increment}
                        className={`font-bold py-1 px-3 m-1 rounded ${quantity === 20 ? 'bg-gray-500 text-gray-300' : 'bg-blue-500 hover:bg-blue-700 text-white'}`}
                        disabled={quantity === 20}
                    >
                        +
                    </button>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category">
                        Category
                    </label>
                    <select
                        id="category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                <div className="mb-4">
                    <button
                        type="submit"
                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                    >
                        Add Item
                    </button>
                </div>
            </form>
        </div>
    );
}