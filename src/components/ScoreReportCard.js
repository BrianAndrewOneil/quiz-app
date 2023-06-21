import React from 'react';

export default function ScoreReportCard (props){
    
    const domainList = () => {
        const domainNumbers = new Set();
        props.questions.forEach((question) => domainNumbers.add(question.domain));
        return Array.from(domainNumbers);
    };
    
    return (
        <div className='mx-0 mx-sm-auto'>
            <div className='row'>
                <div className='col-md-6 offset-md-3'>
                    
                    <div className='card shadow p-3 mb-5 bg-body-tertiary rounded'>
                        <div className='card-header'>
                            <h2 className='card-title text-primary-emphasis text-center'>
                                Results Report
                            </h2>
                            <h3 className='card-title text-primary-emphasis text-center'>
                                Your Total Score: <strong>{Math.round(props.score/props.quizLength*100)}%</strong>
                            </h3>
                            <h4 className='card-title text-primary-emphasis text-center  pb-3'>
                                {props.score} of {props.quizLength} Correct
                            </h4>
                            <ul class="nav nav-tabs card-header-tabs" data-bs-tabs="tabs">
                                <li className="nav-item">
                                    <a class="nav-link active" aria-current="true" data-bs-toggle="tab" href="#overall">Your Overall Results</a>
                                </li>
                                <li class="nav-item">
                                    <a className="nav-link" data-bs-toggle="tab" href="#items">Review Your Answers</a>
                                </li>
                            </ul>
                        </div>
                        <div className='card-body tab-content'>
                            <div class="tab-pane active" id="overall">
                                <h4 className='card-title'>
                                    Results by Domain
                                </h4>
                                <hr />
                                <div className='px-4' action=''>
                                    <div className='d-grid gap-2 col-11'>
                                        {domainList().map((domain) => {
                                            const domainScore = props.domainScore(domain);
                                            const progressWidth = `${domainScore}%`;

                                            return (
                                                <div key={domain}>
                                                    <h5>{domain}</h5>
                                                    <div className="progress" role="progressbar" aria-label="progress bar" aria-valuenow="{domainScore}" aria-valuemin="0" aria-valuemax="100">
                                                        <div className="progress-bar bg-success" style={{ width: progressWidth }}>{progressWidth}</div>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane" id="items">
                                <h4 className='card-title'>
                                    Question {props.question.id} of {props.quizLength}
                                </h4>
                                <hr />
                                <div className='px-4' action=''>
                                    <p>{props.question.questionText}</p>
                                    <div className='d-grid gap-2 col-11'>
                                        {props.question.answerOptions.map((answerOption) => (
                                            <button
                                            key={answerOption.answerID}
                                            onClick={() => props.handleAnswerOptionClick(answerOption.answerID)}
                                            className={
                                                props.selectedAnswerID === answerOption.answerID ? 
                                                'btn btn-dark text-start disabled'
                                                : 
                                                answerOption.answerID === props.question.correctResponse ?
                                                'btn btn-success text-start disabled'
                                                :
                                                'btn btn-outline-dark text-start disabled'
                                            }
                                            >
                                            {answerOption.answerText}
                                            </button>
                                        ))}

                                        <div className='d-grid gap-3 pt-3 d-md-flex  justify-content-md-center'>
                                            <button
                                            onClick={props.handlePrevQuestion}
                                            type='button'
                                            className='btn btn-primary btn-sm'
                                            >
                                            Prev
                                            </button>
                                            <button
                                            onClick={props.handleNextQuestion}
                                            type='button'
                                            className='btn btn-primary btn-sm'
                                            >
                                            Next
                                            </button>
                                        </div>
                                    </div>

                                    <hr />
                                    {props.selectedAnswerID === props.question.correctResponse 
                                    ? <p className="text-success">You answered this question correctly.</p>
                                    : <p className="text-danger">You answered this question incorrectly.</p>
                                    }
                                    
                                    <p><strong>Explanation</strong><br/>
                                    {props.question.questionRationale}</p>

                                </div>
                            </div>
                        </div>

                        <div className='card-footer pt-3 d-grid gap-4 d-md-flex'>
                            <button onClick={props.handleRetakeQuiz} type='button' className='btn btn-danger'>
                                Retake This Quiz
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

