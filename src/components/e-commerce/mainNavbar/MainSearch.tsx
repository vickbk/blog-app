import React, { useState } from 'react';
import BxIconx from '@/components/common/BxIcon';

const MainSearch: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const handleSearch = () => {
        console.log('Searching for:', searchTerm);
        // Add your search logic here
    };

    return (
        <div className="main-search input-group">
            <input
            type="text"
            className="form-control rounded-pill rounded-end"
            value={searchTerm}
            onChange={handleInputChange}
            placeholder="Search products..."
            />
            <button className="btn btn-success text-light rounded-pill rounded-start" onClick={handleSearch} style={{ fontSize: '1.25rem' }}>
            <BxIconx name='search' solid={false}/>
            </button>
        </div>
    );
};

export default MainSearch;