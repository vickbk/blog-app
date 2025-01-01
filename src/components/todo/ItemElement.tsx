"use client"
import { todoItem } from "@/pages/todo"
import { useState } from "react";
import UpdateItem from "./UpdateItem";

const ItemElement = ({item, setDelete, updateItem}: {item: todoItem, setDelete: (id:number)=> void, updateItem: (item: todoItem) => void}) => {
    const [toDel, setToDel] = useState(item.toDelete),
    [toUpdate, setToUpdate] = useState(false);
    const toDelete = () => {
        item.toDelete = !item.toDelete;
        setToDel(item.toDelete);
        
    },
    confirmDelete = () => {
        setDelete(item.id);
    },
    update = () => {
        setToUpdate(!toUpdate);
    },
    updateText = (text: string) => {
        updateItem({...item, value: text});
        setToUpdate(false);
    };

    return <li
            key={item.id}
            className="list-group-item d-flex justify-content-between align-items-center"
        >
            {/* {item.value} */}
            <div className="container">
                <div className="row">
                    <div className="col-8">{item.value}</div>
                    <div className="col-2">
                        <button
                            className="btn btn-danger btn-sm"
                            onClick={() => toDelete()}
                        >
                            {toDel?"Cancel":"Delete"}
                        </button>
                    </div>
                    <div className="col-2">
                        <button
                            className="btn btn-info btn-sm ml-2"
                            onClick={() => update()}
                        >
                            {toUpdate?"Cancel":"Update"}
                        </button>
                    </div>
                </div>
                {toDel && (
                    <>
                    <div className="row text-center">
                        <div className="col" style={{padding: "1rem"}}>Are you sure you want to delete this item?</div>
                    </div>
                    <div className="row text-center">
                        <div className="col" style={{padding: "1rem"}}></div>
                        <div className="col-2">
                            <button className="btn btn-danger form-control btn-sm" onClick={()=>confirmDelete()}>Yes</button>
                        </div>
                        <div className="col-2">
                            <button className="btn btn-info form-control btn-sm" onClick={() => toDelete()}>No</button>
                        </div>
                        <div className="col"></div>
                    </div>
                    </>
                )}
                {
                    toUpdate && <UpdateItem content={item.value} updateText={updateText}/>
                }
            </div>
            
</li>
}

export default ItemElement;