import { useEffect, useState } from "react";
import { Question } from "./Quiz";

const AnsweredQs = ({ answeredQs }: { answeredQs: Question[] }) => {
    const [numOfAnswered, setNumOfAnswered] = useState(0);
    useEffect(() => {
        if (Array.isArray(answeredQs)) {
            setNumOfAnswered(answeredQs.filter((q) => q.selected !== -1).length);  
        }
        
    }, [answeredQs]);
    return (
    <div className="row p-1">
        Answered Questions {numOfAnswered} / {answeredQs.length}
    </div>
  );
};

export default AnsweredQs;