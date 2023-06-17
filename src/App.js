import React, { useState, useEffect } from 'react';
import questions from './questionsData';
import Navbar from './components/Navbar';
import QuestionCard from './components/QuestionCard';
import ResultsCard from './components/ResultsCard';
import Footer from './components/Footer';

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
	// Wipe all localStorage completely,
	localStorage.clear();
	// and then reset the current selected-answer state to null.
	setSelectedAnswerID(null);
  };

  const handleRetakeQuiz = () => {
	localStorage.clear();
	setSelectedAnswerID(null);
	setShowScore(false);
	setCurrentQuestion(0);
  };

  const handleScoreQuiz = () => {
    let finalScore = 0;
    questions.forEach((question) => {
      const storedAnswer = localStorage.getItem(`question_${question.id}`);
      if (storedAnswer === question.correctResponse) {
        finalScore += 1;
      }
    });
    setScore(finalScore);
    setShowScore(true);
	setCurrentQuestion(0);
  };

  return (
    <div>
      <Navbar />
      <main className="container mt-5  min-vh-100">
        <div className="p-3 mt-10">
          {showScore ? (
			<ResultsCard
				score={score}	
				quizLength={questions.length}
				question={questions[currentQuestion]}
              	selectedAnswerID={selectedAnswerID}
              	handleAnswerOptionClick={handleAnswerOptionClick}
              	handleNextQuestion={handleNextQuestion}
              	handlePrevQuestion={handlePrevQuestion}
				handleRetakeQuiz={handleRetakeQuiz}
            />
          	) : (
            <QuestionCard
				quizLength={questions.length}
				question={questions[currentQuestion]}
              	selectedAnswerID={selectedAnswerID}
              	handleAnswerOptionClick={handleAnswerOptionClick}
              	handleNextQuestion={handleNextQuestion}
              	handlePrevQuestion={handlePrevQuestion}
              	handleScoreQuiz={handleScoreQuiz}
              	handleClearAnswers={handleClearAnswers}
            />
          )}
        </div>
      <Footer />
	  </main>
	  
    </div>
  );
}
