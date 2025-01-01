import { docInterface } from "../add/AdderElement";

export default function DocElement({docs, showDoc, deleteDoc}: {docs: docInterface[], showDoc: (doc: docInterface) => any, deleteDoc: (doc: docInterface) => any}) {
    return <>
    {
        docs.map((doc, key) => 
            <div className="row border-bottom text-center font-weight-bold p-2" key={key}>
                <div className="col text-truncate">{doc.id}</div>
                <div className="col-4">{doc.name}</div>
                <div className="col-3">{doc.date}</div>
                <div className="col-4">
                    <div className="row">
                        <div className="col">
                            <button className="btn btn-primary form-control" onClick={()=>showDoc(doc)}>View</button>
                        </div>
                        <div className="col">
                            <button className="btn btn-danger form-control" onClick={()=>deleteDoc(doc)}>Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    </>
}