import ColorElement from "./ColorElement";
import PNavbar from "../navbar/PNavbar";
import PFooter from "../PFooter";
import Head from "next/head";

export default function PLayout({title,children}:{title: string , children?}) {
    return <div className="col-12 no-padding color-gray">
       <Head>
            <title>{title}</title>
            <link rel="icon" href="/favicon.ico" />
       </Head>
       <PNavbar/>
        {children}
        <PFooter/>
       <ColorElement/>
    </div>
}