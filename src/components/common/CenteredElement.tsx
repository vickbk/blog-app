import React from "react";
import { foreach } from "../../script/object/Iterator";

interface CenteredElementSizes{
    "" ? : string | number,
    sm ? : string | number,
    xs ? : string | number,
    md ? : string | number,
    lg ? : string | number,
    xl ? : string | number 
}
const CenteredElement = ({size, children, smHide = false}: {size: string | CenteredElementSizes, children: React.ReactNode, smHide ?: boolean})=>{
    let sideClass : string = "", mainClass: string = "";
    if (typeof size === "object") {
        foreach (size, function(sz : string, screen : string | number = ""){
            mainClass += " col-"+screen+(screen===""?"":"-")+sz;
            sideClass += " col-"+screen+(screen===""?"":"-")+(12-parseInt(sz))/2;
            return "";
        });
    }
    else {
        sideClass = " col-"+((12-(typeof size === "string"?parseInt(size):size))/2)+(smHide?"sm-hide":"");
        mainClass = " col-"+size.toString().split(".")[0];
    }
    return <div className="row">
        <div className={sideClass.trim()}></div>
        <div className={mainClass.trim()+" rel"}>{children}</div>
    </div>
    ;
}

export default CenteredElement;