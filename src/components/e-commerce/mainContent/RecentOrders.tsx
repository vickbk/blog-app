import BxIconx, { boxIcons } from "@/components/common/BxIcon";
import { bootstrapColor } from "@/components/common/IconCard";
import { FocusString } from "@/script/common/FocusString";


const RecentOrders = () => {
    const statusColor : {
        [status in "pending" | "delivered" | "shipped"]: {bg: bootstrapColor, icon: boxIcons}
    } = {
        pending: {bg: "warning", icon: "loader"},
        delivered: {"bg": "success", icon: "check"},
        shipped: {"bg":"info", icon: "mail-send"}
    }
    return (
        <div className="col bg-white rounded-4 p-3">
            <div className="row p-0 m-0 mb-3 align-items-center">
                <h4 className="col-auto fw-bold">Recent Orders</h4>
                <div className="col text-end">
                    <span className="p-2">
                        <BxIconx name="search" solid={false}/>
                    </span>
                    <span className="p-2">
                    <BxIconx name="filter" solid={false}/>
                    </span>
                    
                </div>
            </div>
            <div className="row m-0 p-2">
                <table className="table table-hover">
                    <thead>
                        <tr className="row fw-bold">
                        {["customer","date","status"].map(h => (<td className="col">{FocusString.ucFirst(h)}</td>))}
                        </tr>
                    </thead>
                    <tbody>
                    {
                        [
                            {customer: "John Doe", date: "2021-10-10", status: "pending"},
                            {customer: "Jane Doe", date: "2021-10-11", status: "delivered"},
                            {customer: "John Smith", date: "2021-10-12", status: "shipped"},
                            {customer: "Jane Smith", date: "2021-10-13", status: "delivered"}
                        ].map(({customer,date,status}, key) => (
                            <tr className="row" key={key}>
                                <td className="col"> <BxIconx name="user-circle"/> {customer}</td>
                                <td className="col">{date}</td>
                                <td className="col">
                                    <span className={"ps-3 pe-3 bg-"+statusColor[status as "delivered" | "shipped" | "pending"].bg+" rounded-pill text-center text-bg-color"}>
                                    {FocusString.ucFirst(status)} <BxIconx name={statusColor[status as "delivered" | "shipped" | "pending"].icon} solid={false}/></span>  
                                </td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>
            
        </div>
    );
};

export default RecentOrders;