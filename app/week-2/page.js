import StudentInfo from "./student-info.js";
import Link from "next/link";

export default function Page() {
    return (
      <main>
        <h1>Shopping List</h1>
        <StudentInfo/>
        <p>
            <Link href="https://github.com/">https://github.com/</Link>
        </p>
      </main>
    );
  }