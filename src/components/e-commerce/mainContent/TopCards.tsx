import IconCard, { IconCardIf } from "@/components/common/IconCard";
import { FocusMath } from "@/script/common/FocusMath";
import { FocusString } from "@/script/common/FocusString";

const TopCards = () => {
    const cards: IconCardIf[] = [
        {
            title: FocusMath.randomInt(100,1000).toString(),
            description: FocusString.randomString(10),
            icon: {
                name: "cart",
                bg: "success"
            }
        },
        {
            title: FocusMath.randomInt(100,1000).toString(),
            description: FocusString.randomString(10),
            icon: {
                name: "sun",
                bg: "warning"
            }
        },
        {
            title: "$"+FocusMath.beautifyNumbers(FocusMath.randomInt(1000,10000)),
            description: FocusString.randomString(10),
            icon: {
                name: "dashboard",
                bg: "info"
            }
        }
    ]


    return (
        <div className="row">
            {
                cards.map(({icon,title,description}, index) => 
                    <IconCard key={index} icon={icon} title={title} description={description}/>
                )
            }
        </div>
    );
};

export default TopCards;