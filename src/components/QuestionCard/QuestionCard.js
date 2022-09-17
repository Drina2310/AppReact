import React from 'react';
import './styles.scss';

export const QuestionCard = ({
  currentQuestion,
  selectAnswers,
  setSelectAnswers,
  showResult,
}) => {
  const selectAnswer = (identificador, optionValue) => {
    const answersNoRepit = selectAnswers.filter(
      (answer) => answer.id !== identificador
    );
    setSelectAnswers([...answersNoRepit, { id: identificador, optionValue }]);
  };

  return (
    <div className="card shadow mb-5 bg-body rounded">
      <span className="card-header">
        <div className="card-title d-flex align-items-center">
          <h6 className="number badge rounded-pill bg-secondary">
            {currentQuestion.id}
          </h6>
          <h6 className="question ps-2">{currentQuestion.question}</h6>
        </div>
      </span>
      <div className="card-body">
        {currentQuestion.answers.map((option) => (
          <div
            className="d-flex"
            key={option.id}
            onChange={() => selectAnswer(currentQuestion.id, option.is_correct)}
          >
            <input
              type="radio"
              id={`${currentQuestion.id}${option.id}`}
              name={currentQuestion.id}
              value={option.answer}
            ></input>
            <label
              className={`ps-1 pb-1 ${
                showResult
                  ? option.is_correct
                    ? 'text-success'
                    : 'text-danger'
                  : ''
              }`}
              htmlFor={`${currentQuestion.id}${option.id}`}
            >
              {option.answer}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};
