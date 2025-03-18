import ItemList from "./item-list";

export default function Page() {
  return (
    <main className="bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold m-7">Shopping List</h1>
      <ItemList />
    </main>
  );
}