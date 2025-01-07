import Layout from "@/pages/quiz/layout";
import CenteredElement from "../common/CenteredElement";
import QuizEnabler from "./QuizEnabler";

const MainPage = () => {
    return <Layout>
        <div className="row">
            <CenteredElement size={{'':10, lg: 8}}>
                <div className="h3">Welcome to the quiz app!</div>
                <div className="h5 p-2">This app is a simple quiz app that allows you to create and take quizzes.</div>
                <QuizEnabler />
            </CenteredElement>
            <div className="col-12 p-5"></div>
        </div>
    </Layout>
}

export default MainPage;