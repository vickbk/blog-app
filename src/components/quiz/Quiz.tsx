import { useEffect, useState } from 'react';
import { questions } from './questions.json';
import { foreach } from '@/script/object/Iterator';
import AnsweredQs from './AnsweredQs';
import { toast } from 'react-toastify';
import CorrectQs from './CorrectQs';

export interface Question {
    question: string;
    options: string[];
    correctAnswer: number;
    selected: number;
}

const Quiz = ({name, cancel, reset}: {name: string, cancel: () => void, reset: boolean}) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [questionAnswered, setQuestionAnswered] = useState(questions);
    const [checkAnswers, setCheckAnswers] = useState(false);
    let q: Question = questionAnswered[currentQuestion];
    
    const chooseAnswer = (index: number) => {
        let qs: Question[] = [];
        foreach(questionAnswered, (qq: Question, i) => {
            qs.push(i === currentQuestion ? 
                {...qq, selected: index === qq.selected ? -1 : index}
                :qq);
        });
        setQuestionAnswered(qs);
        setCheckAnswers(false);
    }
    useEffect(()=>{
        if (reset === true) {
            let qs: Question[] = [];
            foreach(questions, (qq: Question) => {
                qs.push({...qq, selected: -1});
            });
            setQuestionAnswered(qs);
            
        }
    },[reset]);

    const verifyAnsweredQuestions = () =>{
        let numOfAnswered = questionAnswered.filter(q => q.selected !== -1).length;
        if (questionAnswered.length !== numOfAnswered) {
            toast.error("Please answer all the questions");
        }
        else setCheckAnswers(true);
    }

    return (
    <div className="container mt-3">
        <div className="card p-4">
            <div className="card-header">Welcome {name}! You are taking a quiz.</div>
            <div className="card-body">
                <h1>Quiz # {currentQuestion+1}</h1>
                <p>{q.question}</p>
                <div className="row">
                    {q.options.map((answer: string, index: number) => (
                        <div className={"col-6 p-1" + 
                        ((checkAnswers && index === q.correctAnswer) ? " border border-3 border-success" : "")
                        } key={index}>
                            <button className={"btn btn-" + 
                            ((index === q.selected) ? "secondary" : "primary") 
                            + " w-100"} 
                            onClick={()=>chooseAnswer(index)}>{answer}</button>
                        </div>
                    ))}
                </div>
                <AnsweredQs answeredQs={questionAnswered}/>
                {checkAnswers && <CorrectQs answeredQs={questionAnswered}/>}
                <div className="d-flex justify-content-between mt-3">
                    {currentQuestion === 0 && <button 
                    className="btn btn-danger" onClick={()=>cancel()}>
                        Cancel Quiz</button>}
                    {currentQuestion !== 0 && <button 
                        className="btn btn-dark" 
                        onClick={() => setCurrentQuestion(prev => Math.max(prev - 1, 0))}
                        disabled={currentQuestion === 0}
                    >
                        {"<<"} Previous
                    </button>}
                    {(currentQuestion !== questions.length - 1) && <button 
                        className="btn btn-dark" 
                        onClick={() => setCurrentQuestion(prev => Math.min(prev + 1, questions.length - 1))}
                        disabled={currentQuestion === questions.length - 1}
                    >
                        Next {">>"}
                    </button>}
                    
                    {(currentQuestion === questions.length - 1 && !checkAnswers) && <button 
                        className="btn btn-success" 
                        onClick={verifyAnsweredQuestions}
                        disabled={currentQuestion !== questions.length - 1}
                    >
                        Check answers
                    </button>}

                    
                </div>
                
            </div>
        </div>
      
    </div>
  );
};

export default Quiz;