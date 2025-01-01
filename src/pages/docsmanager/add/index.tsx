import AdderElement from "@/components/docsmanager/add/AdderElement";
import Layout from "../layout";
import AllDocsShow from "@/components/docsmanager/docshower/AllDocsShow";
import SearchBar from "@/components/docsmanager/Searchbar";

const Index = () => {
    return <Layout>
        <div className="row">
            <div className="col h1">Add a document</div>
            <AdderElement/>
        </div>
    </Layout>
}

export default Index;