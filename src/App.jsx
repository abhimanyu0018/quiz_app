import React, { useState } from "react";

export default function App() {
  const questions = [
    {
      questionText: "What is the capital of India?",
      answerOptions: [
        { answerText: "Bhopal", isCorrect: false },
        { answerText: "New Delhi", isCorrect: true },
        { answerText: "Mumbai", isCorrect: false },
        { answerText: "Chennai", isCorrect: false },
      ],
    },
    {
      questionText: "Who is CEO of Tesla?",
      answerOptions: [
        { answerText: "Jeff Bezos", isCorrect: false },
        { answerText: "Elon Musk", isCorrect: true },
        { answerText: "Bill Gates", isCorrect: false },
        { answerText: "Tony Stark", isCorrect: false },
      ],
    },
    {
      questionText: "The iPhone was created by which company?",
      answerOptions: [
        { answerText: "Apple", isCorrect: true },
        { answerText: "Intel", isCorrect: false },
        { answerText: "Amazon", isCorrect: false },
        { answerText: "Microsoft", isCorrect: false },
      ],
    },
    {
      questionText: "How many mins are in a hour ?",
      answerOptions: [
        { answerText: "10", isCorrect: false },
        { answerText: "40", isCorrect: false },
        { answerText: "60", isCorrect: true },
        { answerText: "70", isCorrect: false },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [score, setScore] = useState(0);

  const handlerQuestuions = (isCorrect) => {
    setCurrentQuestion(currentQuestion + 1);

    if (isCorrect === true) {
      setScore((score) => score + 1);
    }
  };

  return (
    <div className="app">
      {currentQuestion >= questions.length ? (
        <div className="score-section">
          You scored {score} out of {questions.length}
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text">
              {questions[currentQuestion].questionText}
            </div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map((val) => {
              return (
                <button key={val.answerText} onClick={() => handlerQuestuions(val.isCorrect)}>
                  {val.answerText}
                </button>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}
