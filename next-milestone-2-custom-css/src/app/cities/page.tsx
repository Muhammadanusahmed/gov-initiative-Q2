import Link from "next/link";
import Style from "./cities.module.css"

export default function city() {
 
  return (
    <div className={Style.container}>
      <h1 className={Style.main}>ON CITIES PAGE</h1>
      <ul className={Style.Uitag}>
        <li><Link className={Style.LinkTag} href={"/cities/karachi"}>Karachi</Link></li>
        <li><Link className={Style.LinkTag} href={"/cities/islamabad"}>Islamabad</Link></li>
        <li><Link className={Style.LinkTag} href={"/cities/multan"}>Multan</Link></li>
        <li><Link className={Style.LinkTag} href={"/cities/peshawar"}>Peshawar</Link></li>
        <li><Link className={Style.LinkTag} href={"/cities/lahore"}>Lahore</Link></li>
      </ul>
    </div>
  );
}
