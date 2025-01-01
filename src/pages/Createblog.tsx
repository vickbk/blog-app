// Createblog.js

'use client'
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';

const Createblog = () => {
    const [author, setAuthor] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const initialBlogs =
        typeof window !== 'undefined' ?
            JSON.parse(localStorage.getItem('myData')??'[]') || [] : [];
    const [data, setData] = useState(initialBlogs);

    useEffect(() => {
        // Save habits to localStorage whenever they change
        localStorage.setItem('myData', JSON.stringify(data));
    }, [data]);

    const addData = () => {
        const currentDate = new Date().toLocaleDateString();
        const newData =
        {
            id: data.length + 1,
            author: author,
            date: currentDate,
            title: title,
            description: description,
            imageUrl: imageUrl
        };
        const updatedData = [...data, newData];
        setData(updatedData);
        setAuthor('');
        setTitle('');
        setDescription('');
        setImageUrl('');
    };

    return (
        <div>
            <Navbar />
            <div className="container" 
                 style={{ marginTop: '5rem' }}>
                <div className="row">
                    <div className="col">
                        <input
                            type="text"
                            className="form-control mb-2"
                            placeholder="Author"
                            value={author}
                            onChange={(e) => setAuthor(e.target.value)}
                        />
                        <input
                            type="text"
                            className="form-control mb-2"
                            placeholder="Title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <textarea
                            className="form-control mb-2"
                            placeholder="Description"
                            value={description}
                            onChange={(e) => setDescription(e.target
                                                             .value)}
                        />
                        <input
                            type="text"
                            className="form-control mb-2"
                            placeholder="Image URL"
                            value={imageUrl}
                            onChange={(e) =>setImageUrl(e.target.value)}
                        />
                        <button onClick={addData} 
                                className="btn btn-primary mb-2">
                            Add Data
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Createblog;