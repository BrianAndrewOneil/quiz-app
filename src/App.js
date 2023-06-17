import React, { useState, useEffect } from 'react';
import questions from './questionsData';
import Navbar from './components/Navbar';

export default function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswerID, setSelectedAnswerID] = useState(null);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (selectedAnswerID) => {
	localStorage.setItem(`question_${questions[currentQuestion].id}`, selectedAnswerID);
	setSelectedAnswerID(selectedAnswerID);
  };
  
  const handleNextQuestion = () => {
	const nextQuestion = currentQuestion + 1;
	if (nextQuestion < questions.length) {
	  setCurrentQuestion(nextQuestion);
	  setSelectedAnswerID(localStorage.getItem(`question_${questions[nextQuestion].id}`) || null);
	  }
  };
  
  const handlePrevQuestion = () => {
	const prevQuestion = currentQuestion - 1;
	if (prevQuestion >= 0) {
	  setCurrentQuestion(prevQuestion);
	  setSelectedAnswerID(localStorage.getItem(`question_${questions[prevQuestion].id}`) || null);
	}
  };

  const handleClearAnswers = () => {
	// To set the values in localStorage to "null" we can do this:
	// Object.keys(localStorage).forEach((key) => {
	//   localStorage.setItem(key, null);
	// });
	// Or, we can wipe all localStorage completely:
	localStorage.clear();
  
	// Reset the selected answer state to null
	setSelectedAnswerID(null);
  };

  const handleScoreQuiz = () => {
    let finalScore = 0;
    questions.forEach((question) => {
      const storedAnswer = localStorage.getItem(`question_${question.id}`);
      //const correctAnswer = question.answerID;
      if (storedAnswer === question.correctResponse) {
        finalScore += 1;
      }
    });
    setScore(finalScore);
    setShowScore(true);
  };

  return (
    <div>
      <Navbar />
      <main className="container mt-5">
        <div className="p-3 mt-10">
          {showScore ? (
            <div>
              You scored {score} out of {questions.length}
            </div>
          ) : (
            <>
            <div className='mx-0 mx-sm-auto'>
				<div className="row">
    			<div className="col-md-6 offset-md-3">

					<div className='card shadow p-3 mb-5 bg-body-tertiary rounded'>
						<div className="card-body">
							<h5 className="card-title">
								Question {currentQuestion + 1} of {questions.length}
							</h5>
							<hr />
							<div className="px-4" action="">
								<p>{questions[currentQuestion].questionText}</p>

								<div className="d-grid gap-2 col-9">
									{questions[currentQuestion].answerOptions.map((answerOption) => (
										<button
											key={answerOption.id}
											onClick={() => handleAnswerOptionClick(answerOption.answerID)}
											className={selectedAnswerID === answerOption.answerID ? 'btn btn-dark text-start' : 'btn btn-outline-dark text-start'}
										>
											{answerOption.answerText}
										</button>
									))}
								
									<div className="d-grid gap-3 pt-3 d-md-flex  justify-content-md-end">
										<button onClick={handlePrevQuestion} type="button" className="btn btn-primary btn-sm">Prev</button>
										<button onClick={handleNextQuestion} type="button" className="btn btn-primary btn-sm">Next</button>
									</div>
								</div>
							</div>
						</div>

						<div className="card-footer pt-3 d-grid gap-4 d-md-flex">
							<button onClick={handleScoreQuiz} type="button" className="btn btn-success">Score My Quiz</button>
							<button onClick={handleClearAnswers} type="button" className="btn btn-danger">Clear My Answers</button>
						</div>
					</div>
                </div></div>
			</div>
              
            </>
          )}
        </div>
      </main>
    </div>
  );
}
