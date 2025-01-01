'use client';
import Navbar from '@/components/Navbar';
import React, { useState } from 'react';
import ItemElement from '@/components/todo/ItemElement';
import Adder from '@/components/todo/Adder';

export interface todoItem {
    id: number,
    value: string,
    toDelete: boolean
}
let ids: number[] = [0];

const Page = () => {
    const [list, setList] = useState<todoItem[]>([]);
    

    // Function to delete item from list using id to delete
    const deleteItem = (id: number) => {
        const updatedList = list.filter((item) => item.id !== id);
        setList(updatedList);
    };


    const addItem = (item: string) => {
        const newItem: todoItem = {
            id: getID(),
            value: item,
            toDelete: false
        };
        setList([...list, newItem]);
    };

    const getID = () => {
        const highest = ids.sort((a,b)=>b-a)[0],
        last = highest+1;
        ids.push(last);
        return last;
    }

    const updateItem = (newItem: todoItem) => {
        // Edit existing item
        const updatedList = list.map((item) =>
            item.id === newItem.id ? newItem : item
        );
        setList(updatedList);
    }

    return (
        <>
        <Navbar pagetitle='To-Do Manager'/>

        <div className="container" style={{paddingTop: "5rem"}}>
            <div className="row">
                <div className="col"></div>
                <div className="col-12 col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">To Do List</h5>
                            <Adder handleAction={addItem}/>
                            
                            <ul className="list-group mt-3">
                                {list.length > 0 ? (
                                    list.map((item, index) => (
                                        <ItemElement item={item} key={index} setDelete={deleteItem} updateItem={updateItem}/>
                                    ))

                                ) : (
                                    <li className="list-group-item text-center">
                                        No items in the list
                                    </li>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col"></div>
            </div>
        </div>

        </>
    );
};

export default Page;
