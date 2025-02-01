export default function Item({ name, quantity, category }) {
    return (
      <li className="border-2 border-black bg-sky-600 p-4 m-4">
        <h2 className="font-bold text-lg">{name}</h2>
        <p className="ml-1">Quantity: {quantity}</p>
        <p className="ml-1">Category: {category}</p>
      </li>
    );
  }