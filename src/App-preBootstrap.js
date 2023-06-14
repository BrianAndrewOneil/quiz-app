import React, { useState, useEffect } from 'react';
import questions from './questionsData';
import Navbar from './components/Navbar';

export default function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const storedAnswer = localStorage.getItem(`question_${questions[currentQuestion].id}`);
    if (storedAnswer) {
      setSelectedAnswer(storedAnswer);
    }
  }, [currentQuestion]);

  const handleAnswerOptionClick = (selectedAnswer) => {
	localStorage.setItem(`question_${questions[currentQuestion].id}`, selectedAnswer);
	setSelectedAnswer(selectedAnswer);
  };
  

  const handleNextQuestion = () => {
	const nextQuestion = currentQuestion + 1;
	if (nextQuestion < questions.length) {
	  setCurrentQuestion(nextQuestion);
	  setSelectedAnswer(localStorage.getItem(`question_${questions[nextQuestion].id}`) || null);
	} else {
	  setShowScore(true);
	}
  };
  
  const handlePrevQuestion = () => {
	const prevQuestion = currentQuestion - 1;
	if (prevQuestion >= 0) {
	  setCurrentQuestion(prevQuestion);
	  setSelectedAnswer(localStorage.getItem(`question_${questions[prevQuestion].id}`) || null);
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
	setSelectedAnswer(null);
  };
  

  return (
    <div className='container'>
      <Navbar />
      <main>
        <div className='app'>
          {showScore ? (
            <div className='score-section'>
              You scored {score} out of {questions.length}
            </div>
          ) : (
            <>
              <div className='question-section'>
                <div className='question-count'>
                  <span>
                    Question {currentQuestion + 1} of {questions.length}
                  </span>
                </div>
                <div className='question-text'>
                  {questions[currentQuestion].questionText}
                </div>
              </div>
              <div className='answer-section'>
			  	{questions[currentQuestion].answerOptions.map((answerOption) => (
					<button
						key={answerOption.id}
						onClick={() => handleAnswerOptionClick(answerOption.answerText)}
						className={selectedAnswer === answerOption.answerText ? 'selected' : ''}
					>
						{answerOption.answerText}
					</button>
				))}

              </div>
              <div className='prev-next-buttons'>
                <button onClick={handlePrevQuestion}>Prev</button>
                <button onClick={handleNextQuestion}>Next</button>
              </div>
			  <div className='score-clear-buttons'>
                <button onClick={handlePrevQuestion}>Score My Quiz</button>
                <button onClick={handleClearAnswers}>Clear My Answers</button>
              </div>
            </>
          )}
        </div>
      </main>
    </div>
  );
}
