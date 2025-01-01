import Link from "next/link";

export default function SideNavbar () {
    return <>
        <div className="col-5 col-md-12 text-large h2 font-weight-bold" style={{paddingTop: "10rem"}}>Docs manager</div>
        <nav className="navbar navbar-expand bg-light">
        <ul className="navbar-nav row text-center">
            <li className="nav-item col-md-12 col-auto">
                <Link href={"/docsmanager"} className="nav-link">Docs to manage</Link>
            </li>
            <li className="nav-item col-md-12 col-auto">
                <Link href={"/docsmanager/add"} className="nav-link">Add documnent</Link>
            </li>
        </ul>
    </nav>
    </>
}