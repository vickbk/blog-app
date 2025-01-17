import Link from "next/link";
import Image from "next/image";
import BxIconx, { boxIcons } from "@/components/common/BxIcon";
import { options } from "../../../objects/e-commerce/sideNav.json";

interface Option {
  name: string;
  link: string;
  icon: boxIcons;
}


const SideNavbar = () => {
  
  return (
    <div className="side-navbar">
        <div className="row p-1" style={{paddingBottom: "10rem"}}>
            <Image className="col-auto" src="https://media.geeksforgeeks.org/gfg-gg-logo.svg" alt="logo" width={30} height={30} />
            <h3 className="col-auto text-success fw-bold">Admin Panel</h3>
        </div>
        <div className="row p-5"></div>
      <ul className="nav flex-column">

        {options.map((option, key: number) => (
          <li key={key} className="nav-item">
            <Link href={"/e-commerce"+option.link} className="nav-link text-dark hover-gray" style={{ fontSize: "1.1rem" }}>
              <BxIconx name={option.icon as boxIcons} /> {option.name}  
            </Link>
          </li>))
        }
        <div className="row p-3"></div>
        <li className="nav-item">
          <Link href="/e-commerce/settings" className="nav-link text-dark">
            <BxIconx name="cog" /> Settings
          </Link>
        </li>
        <li className="nav-item">
            <Link href="/" className="nav-link text-danger">
            <BxIconx name="log-out-circle" /> Logout
            </Link>
        </li>
      </ul>
    </div>
  );
}

export default SideNavbar;