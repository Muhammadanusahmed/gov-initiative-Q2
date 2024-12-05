import Link from "next/link";

export default function Navbar() {
    return (
        <ul className="flex justify-between items-center p-2 px-8 text-gray-50 text-xl italic uppercase bg-blue-900">
            <p className="text-4xl pl-6 pr-56">Muhammad Anus Ahmed</p>
            <Link className="p-2 rounded-lg hover:bg-black hover:text-white" href={"/"}>
                HOME
            </Link>
            <Link className="p-2 rounded-lg hover:bg-black hover:text-white" href={"/cities"}>
                CITIES
            </Link>
            <Link className="p-2 rounded-lg hover:bg-black hover:text-white" href={"/about"}>
                ABOUT
            </Link>
        </ul>
    );
}
