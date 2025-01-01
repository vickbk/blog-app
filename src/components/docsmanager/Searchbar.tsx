import { useState } from "react";

const SearchBar = ({getSearch}: {getSearch: (a: string) => any}) => {
    const [search, setSeach] = useState(""),
    searchFor = (q: string) => {
        setSeach(q);
        getSearch(q);
    };
    return <div className="row p-2">
        <div className="col">
            <input type="text" value={search} onChange={e=> searchFor(e.target.value)} placeholder="Search document" className="form-control" />
        </div>
    </div>;
}

export default SearchBar;