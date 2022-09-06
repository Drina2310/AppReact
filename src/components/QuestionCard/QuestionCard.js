import React from 'react';

export const QuestionCard = ({ currentQuestion }) => {
  return (
    <div>
      <span>{currentQuestion.question}</span>
      <br />
      {currentQuestion.answers.map((option) => (
        <div key={option.id}>
          <input type="radio" id={`${option.id}`} value={option.answer}></input>
          <label htmlFor={`${option.id}`}>{option.answer}</label>
          <br />
        </div>
      ))}
      <br />
    </div>
  );
};
