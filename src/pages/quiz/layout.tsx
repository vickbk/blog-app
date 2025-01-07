import Navbar from "@/components/Navbar";

export default function Layout({children}: {children: React.ReactNode}){

    return <>
    <Navbar pagetitle="Quiz App"/>
    <div className="container" style={{paddingTop: "5rem"}}>
        <div className="row">
            <div className="col">
                let see first
            </div>
            <div className="col-12 col-md-10 col-lg-9">
                <div className="row">
                    <div className="col"></div>
                    <div className="col-12 col-md-10">
                    {children}
                    </div>
                    <div className="col"></div>
                </div>               
            </div>
        </div>
    </div>
    </>
}