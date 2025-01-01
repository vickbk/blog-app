import { useState } from "react";

const UpdateItem = ({content, updateText}: {content: string, updateText: (text: string) => void}) => {
    const [newContent, setNewContent] = useState(content);

    return <div className="row" style={{padding: "1rem"}}>
        <div className="row">
            <div className="col-9">
                <input type="text" value={newContent} onChange={(e => setNewContent(e.target.value))} className="form-control" />
            </div>
            <div className="col">
                <button className="form-control btn btn-sm btn-info" onClick={()=>updateText(newContent)}>Update</button>
            </div>
        </div>
    </div>
}

export default UpdateItem;