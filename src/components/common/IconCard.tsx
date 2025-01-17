import BxIconx, { boxIcons } from "./BxIcon";
export type bootstrapColor = "" | "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark" | "white" | "muted" | "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark" | "white" | "muted";

export interface IconCardIf { 
    icon: {
        name: boxIcons, 
        color?: bootstrapColor, 
        bg?: bootstrapColor
    }, 
    title: string, 
    description: string 
}

const IconCard = ({ icon: {name, color = '', bg = ''}, title, description }: IconCardIf) => {
  return (
    <div className={`col-12 col-md-6 col-lg-4 p-2`}>
        <div className={`container-fluid p-4 bg-white rounded-4 border border-white`}>
            <div className="row m-0">
                <div className={`col-4${bg!==""?" bg-"+bg:""}${color!==""?" text-"+color:""} p-3 text-center rounded-4 align-items-center`}>
                    <BxIconx name={name} size='md' />
                </div>
                <div className="col p-1">
                    <div className="row m-0">
                        <div className="h3 fw-bold">{title}</div>
                    </div>
                    <div className="row m-0">
                        <div className="text-muted">{description}</div>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
  );
};

export default IconCard;