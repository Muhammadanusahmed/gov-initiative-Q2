import Link from "next/link";

export default function City() {
  return (
    <div className="inline-block bg-blue-700/50 m-8 p-4 rounded-lg">
      <h1 className="pb-8 pl-4 mr-24 text-2xl font-bold">ON CITIES PAGE</h1>
      <ul className="list-none text-lg">
        <li>
          <Link
            className="block p-2 pl-4 my-4 rounded-lg border-4 border-black hover:bg-blue-950"
            href={"/cities/karachi"}
          >
            Karachi
          </Link>
        </li>
        <li>
          <Link
            className="block p-2 pl-4 my-4 rounded-lg border-4 border-black hover:bg-blue-950"
            href={"/cities/islamabad"}
          >
            Islamabad
          </Link>
        </li>
        <li>
          <Link
            className="block p-2 pl-4 my-4 rounded-lg border-4 border-black hover:bg-blue-950"
            href={"/cities/multan"}
          >
            Multan
          </Link>
        </li>
        <li>
          <Link
            className="block p-2 pl-4 my-4 rounded-lg border-4 border-black hover:bg-blue-950"
            href={"/cities/peshawar"}
          >
            Peshawar
          </Link>
        </li>
        <li>
          <Link
            className="block p-2 pl-4 my-4 rounded-lg border-4 border-black hover:bg-blue-950"
            href={"/cities/lahore"}
          >
            Lahore
          </Link>
        </li>
      </ul>
    </div>
  );
}
