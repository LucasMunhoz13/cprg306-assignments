import NewItem from "./new-item.js";

export default function Page() {
    return (
        <main className="bg-gray-100 min-h-screen">
            <h1 className="text-4xl font-bold m-7">Add New Item</h1>
            <NewItem />
        </main>
    );
}