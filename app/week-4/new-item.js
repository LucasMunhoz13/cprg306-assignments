"use client";

import {useState} from "react";

export default function NewItem() {
    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 1);

    const decrement = () => setCount(count - 1);


    return (
        <div>
            <p className="flex">Count: {count}</p>
                <button onClick={decrement} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 m-1 rounded">-</button>
                <button onClick={increment} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 m-1 rounded">+</button>
        </div>
    )
}