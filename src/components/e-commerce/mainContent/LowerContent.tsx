import MostSale from "./MostSale";
import RecentOrders from "./RecentOrders";

const LowerContent = () => {
    return (
        <div className="row p-0">
            <div className="col-12 col-md-7 p-1">
                <RecentOrders />
            </div>
            <div className="col p-1">
                <MostSale />
            </div>
        </div>
    );
};

export default LowerContent;