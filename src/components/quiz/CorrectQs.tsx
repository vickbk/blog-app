import React, { use, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Question } from './Quiz';

const CorrectQs = ({ answeredQs } : {answeredQs : Question[]}) => {
    const [correctCount, setCorrectCount] = React.useState(0);
    const totalCount = answeredQs.length;
    const [alertColor, setAlertColor] = React.useState("success");
    const [percentage, setPercentage] = React.useState(0);

    useEffect(() => {
        let correctQs = 0, percent = 0;
        setCorrectCount(correctQs = answeredQs.filter(q => q.selected === q.correctAnswer).length);
        setPercentage(percent = correctQs*100/totalCount);
        if (percent < 50) {
            setAlertColor("danger");
        } else if (percent < 75) {
            setAlertColor("warning");
        } else {
            setAlertColor("success");
        }
    }, [answeredQs]);

    return (
        <div className={"alert alert-"+alertColor} role="alert">
            <h4 className="alert-heading">Quiz Results ({percentage} %)</h4>
            <p>
                You answered <strong>{correctCount}</strong> / <strong>{totalCount}</strong> questions correctly.
            </p>
        </div>
    );
};

export default CorrectQs;