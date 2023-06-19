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
                        <h4 className='card-title text-primary-emphasis text-center'>
                            {props.score} of {props.quizLength} Correct
                        </h4>
                    </div>
                    <div className='card-body'>
                        <h4 className='card-title'>
                            Results by Domain
                            {/* Question {props.question.id} of {props.quizLength} */}
                        </h4>
                        <hr />
                        <div className='px-4' action=''>
                            <div className='d-grid gap-2 col-11'>

                                {domainList().map((domain) => {
                                    const domainScore = props.domainScore(domain);
                                    const progressWidth = `${domainScore}%`;

                                    return (
                                        <div key={domain} className="py-3">
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

                    <div className='card-footer pt-3 d-grid gap-4 d-md-flex'>
                        <button onClick={props.handleScoreReportToggle} type='button' className='btn btn-primary'>
                            View Your Results by Question
                        </button>
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

