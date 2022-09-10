import React from 'react';

export const QuestionCard = ({
  currentQuestion,
  selectAnswers,
  setSelectAnswers,
}) => {
  console.log(selectAnswers);
  const selectAnswer = (identificador, optionValue) => {
    const otherAnswers = selectAnswers.filter(
      (answer) => answer.id !== identificador
    );
    console.log(otherAnswers);
    setSelectAnswers([...selectAnswers, { id: identificador, optionValue }]);
  };

  return (
    <div className="card shadow mb-5 bg-body rounded">
      <span className="card-header ">
        <h6 className="card-title">
          <span className="badge rounded-pill bg-secondary">
            {currentQuestion.id}
          </span>
          <span className="ps-1">{currentQuestion.question}</span>
        </h6>
      </span>
      <div className="card-body">
        {currentQuestion.answers.map((option) => (
          <div
            key={option.id}
            onChange={() => selectAnswer(currentQuestion.id, option.is_correct)}
          >
            <input
              type="radio"
              id={`${option.id}`}
              value={option.answer}
            ></input>
            <label className="ps-1" htmlFor={`${option.id}`}>
              {option.answer}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};
