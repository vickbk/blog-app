import BxIconx from "@/components/common/BxIcon";
import CenteredElement from "@/components/common/CenteredElement";

const DashHeader = () => {
  return (
    <>
        <div className="row p-0 align-items-center">
            <div className="col-8 p-1">
                <h1 className="fw-bold pt-3 pb-2">Dashboard</h1>
                <div className="pb-3 text-muted">
                    Path {`>`} e-commerce {`>`} main content
                </div>
            </div>
            <div className="col content-justify-center">
                <CenteredElement size={{'': 8}}>
                    <button className="btn btn-success rounded-pill">
                        <BxIconx name='cloud-download' solid={true}/>
                        {" "} Download Report
                    </button>
                </CenteredElement>
            </div>
        </div>
    
    </>
  );
};
export default DashHeader;