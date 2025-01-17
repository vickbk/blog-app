import Layout from "@/pages/e-commerce/layout";
import MainNavbar from "./mainNavbar/MainNavbar";
import MainContent from "./MainContent";

const MainPage = () => {
  return (
    <Layout>
        <MainNavbar/>
        <MainContent/>
    </Layout>
  );
}

export default MainPage;