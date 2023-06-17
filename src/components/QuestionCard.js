import React from 'react';

const QuestionCard = ({
    quizLength,
    question,
    selectedAnswerID,
    handleAnswerOptionClick,
    handleNextQuestion,
    handlePrevQuestion,
    handleScoreQuiz,
    handleClearAnswers,
}) => {
  return (
    <div className='mx-0 mx-sm-auto'>
      <div className='row'>
        <div className='col-md-6 offset-md-3'>
          <div className='card shadow p-3 mb-5 bg-body-tertiary rounded'>
            <div className='card-body'>
              <h5 className='card-title'>
                Question {question.id} of {quizLength}
              </h5>
              <hr />
              <div className='px-4' action=''>
                <p>{question.questionText}</p>

                <div className='d-grid gap-2 col-9'>
                  {question.answerOptions.map((answerOption) => (
                    <button
                      key={answerOption.answerID}
                      onClick={() => handleAnswerOptionClick(answerOption.answerID)}
                      className={
                        selectedAnswerID === answerOption.answerID
                          ? 'btn btn-dark text-start'
                          : 'btn btn-outline-dark text-start'
                      }
                    >
                      {answerOption.answerText}
                    </button>
                  ))}

                  <div className='d-grid gap-3 pt-3 d-md-flex  justify-content-md-center'>
                    <button
                      onClick={handlePrevQuestion}
                      type='button'
                      className='btn btn-primary btn-sm'
                    >
                      Prev
                    </button>
                    <button
                      onClick={handleNextQuestion}
                      type='button'
                      className='btn btn-primary btn-sm'
                    >
                      Next
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className='card-footer pt-3 d-grid gap-4 d-md-flex'>
              <button onClick={handleScoreQuiz} type='button' className='btn btn-success'>
                Score My Quiz
              </button>
              <button onClick={handleClearAnswers} type='button' className='btn btn-danger'>
                Clear My Answers
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
