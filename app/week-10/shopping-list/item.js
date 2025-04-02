const Item = ({ name, quantity, category, onSelect }) => {
  return (
    <li
      className="p-2 bg-[#0F172A] rounded text-left w-96 h-20 cursor-pointer"
      onClick={onSelect}
    >
      <p className="text-xl font-bold pt-1">{name}</p>
      <p>Buy {quantity} in {category}</p>
    </li>
  );
};

export default Item;