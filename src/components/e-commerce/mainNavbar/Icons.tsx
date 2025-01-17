import BxIconx from "@/components/common/BxIcon";
import ThemeSwitch from "../../common/ThemeSwitch";
import Image from 'next/image';

const NavIcons = () => {
    return (<div className="row h-1 align-items-center">
        <ThemeSwitch/>
        <div className="col-auto">
            <BxIconx name='bell' size='sm' />
        </div>
        <div className="col-auto border rounded-circle p-0">
            <Image src="https://media.geeksforgeeks.org/gfg-gg-logo.svg" alt="avatar" width={50} height={50} />
        </div>

    </div>);
}


export default NavIcons;