import Link from "next/link";
import Style from "@/style/Nav.module.css"

export default function Navbar() {
    return (
   <ul className={Style.container}>
    <p className={Style.mainH1}>Muhammad Anus Ahmed</p>
     <Link className={Style.LinkTag} href={"/"}>HOME</Link>
     <Link className={Style.LinkTag} href={"/cities"}>CITIES</Link>
     <Link className={Style.LinkTag} href={"/about"}>ABOUT</Link>
    </ul>
    )}


