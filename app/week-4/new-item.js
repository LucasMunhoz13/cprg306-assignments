"use client";

import { useState } from "react";

export default function NewItem() {
    const [quantity, setQuantity] = useState(1);

    const increment = () => setQuantity(prevQuantity => Math.min(prevQuantity + 1, 20));

    const decrement = () => setQuantity(prevQuantity => Math.max(prevQuantity - 1, 1));

    return (
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
    );
}