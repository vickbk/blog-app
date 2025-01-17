import NavIcons from "./Icons";
import MainSearch from "./MainSearch";

const MainNavbar = () => {
    return (
    <nav className="row p-0">
        <div className="container-fluid">
            <div className="row">
                <div className="col"></div>
                <div className="col-10 text-success p-2">
                    <h3>Welcome to the e-Commerce dashboard</h3>
                </div>
            </div>
        </div>
        <div className="container-fluid bg-white p-2">
            <div className="row justify-content-between d-flex align-items-center">
                <div className="col-auto">Categories</div>
                <div className="col-5 p-0">
                    <MainSearch/>
                </div>
                <div className="col-3">
                    <NavIcons/>
                </div>
            </div>
        </div>
    </nav>
    );
}

export default MainNavbar;