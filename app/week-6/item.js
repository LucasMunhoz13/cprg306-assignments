export default function Item({ name, quantity, category }) {
  return (
    <li className="border-2 border-black bg-sky-600 p-2 m-1 max-w-md mx-auto">
      <h2 className="font-bold text-lg">{name}</h2>
      <p className="ml-1">Buy {quantity} in {category}</p>
    </li>
  );
}