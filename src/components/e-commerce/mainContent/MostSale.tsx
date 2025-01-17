import BxIconx from "@/components/common/BxIcon";
import { FocusMath } from "@/script/common/FocusMath";
import { FocusString } from "@/script/common/FocusString";

const MostSale = () => {
    const sold = [
        {title: FocusString.randomString(FocusMath.randomInt(5,15)), total: FocusMath.randomInt(0,1000)},
        {title: FocusString.randomString(FocusMath.randomInt(5,15)), total: FocusMath.randomInt(0,1000)},
        {title: FocusString.randomString(FocusMath.randomInt(5,15)), total: FocusMath.randomInt(0,1000)},
        {title: FocusString.randomString(FocusMath.randomInt(5,15)), total: FocusMath.randomInt(0,1000)},
        {title: FocusString.randomString(FocusMath.randomInt(5,15)), total: FocusMath.randomInt(0,1000)}
    ];
    const arrangedSold = sold.sort((a,b)=>b.total-a.total);
    return (
        <div className="col bg-white rounded-4 p-3">
            <div className="row align-items-center mb-3">
                <h4 className="col-auto">Most Sold Products</h4>
                <div className="col text-end">
                    <span className="p-2">
                        <BxIconx name="plus" solid={false}/>
                    </span>
                    <span className="p-2">
                        <BxIconx name="filter" solid={false}/>
                    </span>
                </div>
            </div>
            {
                arrangedSold.map((item, key) => (
                <div className="row m-0 mb-2 align-items-center" key={key}>
                    <div className="col-11">
                        <div className="col-12 h6 fw-bold p-0 m-0">{item.title}</div>
                        <div className="col-12 text-secondary p-0 m-0">Total sales: {item.total}</div>
                    </div>
                    <div className="col-1">
                        <BxIconx name="dots-vertical-rounded" solid={false}/>
                    </div>
                </div>
                ))
            }
            
        </div>
    );
};
export default MostSale;