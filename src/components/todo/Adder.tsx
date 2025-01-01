'use client';

import { useState } from "react";


const Adder = ({handleAction}: {handleAction: (task: string) => void}) => {

    const [todo, setTodo] = useState('');
    const addTodo = (task: string) => {
        setTodo(task)
    },
    submitTodo = () => {
        if (todo === "") return;
        handleAction(todo)
        setTodo("");
    }
    return <div className="row">
        <div className="col-9">
            <input type="text" name="adder" value={todo} className="form-control" onChange={(e)=>addTodo(e.target.value)} placeholder="Add Item..." />
        </div>
        <div className="col">
            <button className="form-control btn btn-info" onClick={()=>submitTodo()}>Add</button>
        </div>
    </div>
}

export default Adder;