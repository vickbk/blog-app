import SideNavbar from "@/components/e-commerce/sideNavbar/SideNavbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
    return <>
        <div className="container-fluid bg-light">
            <div className="row">
                <div className="col bg-white">
                    <SideNavbar />
                </div>
                <div className="col-12 col-md-10 col-lg-9 p-0">
                    <div className="container-fluid">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Layout;