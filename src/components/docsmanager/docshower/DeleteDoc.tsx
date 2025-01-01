import { docInterface } from "../add/AdderElement";

const DeleteDoc = ({ document, closeDelete, deleteDoc }: { document: docInterface, closeDelete: () => void , deleteDoc: (doc: docInterface) => any})=>{
    
    return <div className="modal fade show" style={{ display: 'block' }} tabIndex={-1} role="dialog">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Are you sure you want to delete "{document.name}" document ?</h5>
                        
                    </div>
                    <div className="modal-body text-center">
                        <img src={document.file as string} alt={document.name} className="img-fluid" style={{height: "15rem"}} />
                        <div className="row text-center">
                            <div className="col">{document.description}</div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-info" onClick={closeDelete} data-dismiss="modal">Cancel</button>
                        <button type="button" className="btn btn-danger" onClick={()=>deleteDoc(document)} data-dismiss="modal">Delete</button>
                    </div>
                </div>
            </div>
        </div>
}

export default DeleteDoc;