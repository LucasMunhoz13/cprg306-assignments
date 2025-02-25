"use client";

import { useState } from "react";

export default function NewItem() {
    const [quantity, setQuantity] = useState(1);
    const [name, setName] = useState("");
    const [category, setCategory] = useState("");

    const increment = () => setQuantity(prevQuantity => Math.min(prevQuantity + 1, 20));

    const decrement = () => setQuantity(prevQuantity => Math.max(prevQuantity - 1, 1));

    const handleNameChange = (event) => setName(event.target.value);

    const handleCategoryChange = (event) => setCategory(event.target.value);

    const handleSubmit = (event) => {
        event.preventDefault();
        let item = { name, category, quantity };
        console.log(item);
    }        

    return (

        <form onSubmit={handleSubmit}>

            
            <div className="m-4">
                <label className="block">Name:</label>
                <input 
                    type="text" 
                    value={name} 
                    onChange={handleNameChange} 
                    className="border border-gray-400 rounded p-1"
                    required
                />
            </div>


            <div>
                <p className="">Quantity: {quantity}</p>
                <button 
                    onClick={decrement} 
                    className={`font-bold py-1 px-3 m-1 rounded ${quantity === 1 ? 'bg-gray-500 text-gray-300' : 'bg-blue-500 hover:bg-blue-700 text-white'}`}
                    disabled={quantity === 1}
                >
                    -
                </button>
                <button 
                    onClick={increment} 
                    className={`font-bold py-1 px-3 m-1 rounded ${quantity === 20 ? 'bg-gray-500 text-gray-300' : 'bg-blue-500 hover:bg-blue-700 text-white'}`}
                    disabled={quantity === 20}
                >
                    +
                </button>
            </div>


            <div className="m-4">
                <select
                    value={category}
                    onChange={handleCategoryChange}
                    className="border border-gray-400 rounded p-1"
                    required
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


            <div className="m-4">
                <button 
                    type="submit"
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                >
                    Add Item
                </button>
            </div>


        </form>
    );
}