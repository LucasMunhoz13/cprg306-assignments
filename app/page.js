import Link from "next/link";

export default function Page () {
  return (
    <div>
      <h1 className="text-4xl pl-32 mt-32">CPRG 306: Web Development 2 - Assignments</h1>
      <p className="text-lg hover:text-green-500 pl-32 mt-4">
        <Link href="week-2"> Week 2 Assignment</Link>
      </p>
      <p className="text-lg hover:text-green-500 pl-32">
        <Link href="week-3"> Week 3 Assignment</Link>
      </p>
      <p className="text-lg hover:text-green-500 pl-32">
        <Link href="week-4"> Week 4 Assignment</Link>
      </p>
      <p className="text-lg hover:text-green-500 pl-32">
        <Link href="week-5"> Week 5 Assignment</Link>
      </p>
      <p className="text-lg hover:text-green-500 pl-32">
        <Link href="week-6"> Week 6 Assignment</Link>
      </p>
      <p className="text-lg hover:text-green-500 pl-32">
        <Link href="week-7"> Week 7 Assignment</Link>
      </p>
      <p className="text-lg hover:text-green-500 pl-32">
        <Link href="week-8"> Week 8 Assignment</Link>
      </p>
      <p className="text-lg hover:text-green-500 pl-32">
        <Link href="week-9"> Week 9 Assignment</Link>
      </p>
      <p className="text-lg hover:text-green-500 pl-32">
        <Link href="week-10"> Week 10 Assignment</Link>
      </p>
    </div>
  );
}