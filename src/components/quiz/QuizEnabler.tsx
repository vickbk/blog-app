import { useState } from "react";
import InputWithLabel from "../form/InputWithLabel";
import Quiz from "./Quiz";

const QuizEnabler = () => {
    const [quizEnabled, setQuizEnabled] = useState(false);
    const [name, setName] = useState("");
    const [reset, setReset] = useState(false);
    const checkName = (value: React.ChangeEvent<HTMLInputElement>) => {
        setName(value.target.value);
        setReset(true);
    }
    const disableQuiz = () => {
        setQuizEnabled(false);
        setReset(false);
    }
  return (
    <>
    {!quizEnabled && <div className="container mt-3">
      <div className="mb-3">
        <InputWithLabel label="Name to use" value={name} name="name" onChange={checkName} />
      </div>
      <button
        className="btn btn-primary" disabled={name === ""}
        onClick={() => {
          setQuizEnabled(true); 
        }}
      >
        Start Quiz
      </button>
      
    </div>}
    {quizEnabled && <Quiz name={name} cancel={disableQuiz} reset={reset}/>}
    </>
  );
};
export default QuizEnabler;
