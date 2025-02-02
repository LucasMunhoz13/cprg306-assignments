import ItemList from "./item-list.js";

export default function Page() {
    return (
      <main>
        <h1 className="text-4xl font-bold m-7">Shopping List</h1>
        <ItemList />
      </main>
    );
}