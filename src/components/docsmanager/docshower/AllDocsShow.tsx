import { FocusString } from "@/script/common/FocusString";
import { docInterface } from "../add/AdderElement"
import DocElement from "./DocElement";
import Display from "./Display";
import { useEffect, useState } from "react";
import DeleteDoc from "./DeleteDoc";
import { toast } from "react-toastify";

export default function AllDocsShow({ searchQuery } : {searchQuery: string}) {

    const [docs, setDocs] = useState<docInterface[]>([]),
    filteredDocs = docs.filter(doc => 
        doc.name.toLowerCase().includes(searchQuery)
    );
    useEffect(() => {
        const docs = JSON.parse(localStorage.getItem("docs") || "[]");
        setDocs(docs);
    },[]);
    const [docToShow, setDocToShow] = useState<docInterface | null>(null);
    const [docToDelete, setDocToDelete] = useState<docInterface | null>(null);
    const showDoc = (doc: docInterface) => setDocToShow(doc);
    const closeDisplay = () => setDocToShow(null);
    const showDeleteDoc = (doc: docInterface) => setDocToDelete(doc);
    const closeDelete = () => setDocToDelete(null);
    const deleteDoc = (doc: docInterface) => {
        const remainingDocs = docs.filter(d => d.id !== doc.id);
        localStorage.setItem("docs",JSON.stringify(remainingDocs));
        setDocs(remainingDocs);
        toast.success(`Document ${doc.name} deleted successfully!`);
        closeDelete();
    }
    return <> 
        <div className="row border-bottom text-center font-weight-bold p-2">
            <div className="col font-weight-bold">Id</div>
            <div className="col-4 font-weight-bold">Name</div>
            <div className="col-3 font-weight-bold">Created date</div>
            <div className="col-4 font-weight-bold">Action</div>
        </div>
        <DocElement docs={filteredDocs} showDoc={showDoc} deleteDoc={showDeleteDoc}/>
        {docToShow && <Display document={docToShow} closeDisplay={closeDisplay}/>}
        {docToDelete && <DeleteDoc document={docToDelete} closeDelete={closeDelete} deleteDoc={deleteDoc}/>}
    </>
}