export default function Item({ name, quantity, category }) {
  return (
    <li className="bg-gray-800 p-4 rounded shadow-md">
      <h3 className="font-bold text-lg">{name}</h3>
      <p className="text-gray-400">Buy {quantity} in {category}</p>
    </li>
  );
}