import { useState } from "react";
import AllDocsShow from "./docshower/AllDocsShow";
import SearchBar from "./Searchbar";
import Layout from "@/pages/docsmanager/layout";

const MainPage = () => {
    const [search, setSeach] = useState(''),
    handleSearch = (searched: string) => {
        setSeach(searched);
    };
    return <Layout>
        <div className="row">
            <div className="col h1">Document Manager</div>
        </div>
        <SearchBar getSearch={handleSearch} />
        <AllDocsShow searchQuery={search}/>
    </Layout>
}

export default MainPage;