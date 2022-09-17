import React, { useEffect, useState } from 'react';
import { Breadcrumb } from '../../components/Breadcrumb/Breadcrumb';
import { QuestionCard } from '../../components/QuestionCard/QuestionCard';
import { Button } from '../../components/Button/Button';
import './styles.scss';

const API_URL =
  'https://62bb6e36573ca8f83298fbef.mockapi.io/metcampweb22/v1/questions/harry-potter';

const Game = () => {
  const [loading, setLoading] = useState(true);
  const [questions, setQuestions] = useState([]);
  const [selectAnswers, setSelectAnswers] = useState([]);
  const [result, setResult] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const calculateResult = () => {
    console.log(selectAnswers);
    const correctAnswers = selectAnswers.filter(
      (answers) => answers.optionValue === true
    );
    setResult(correctAnswers.length);
    setShowResult(true);
  };

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        setQuestions(data);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="container game">
      <Breadcrumb isActive="game" />
      {loading && <div>Cargando...</div>}

      {!loading && (
        <>
          <form>
            {questions.map((question) => {
              return (
                <QuestionCard
                  key={question.id}
                  currentQuestion={question}
                  selectAnswers={selectAnswers}
                  setSelectAnswers={setSelectAnswers}
                  showResult={showResult}
                />
              );
            })}
          </form>
          <div className="d-flex justify-content-end mb-3">
            {showResult && (
              <p>
                {result}/{questions.length}
              </p>
            )}
            <Button
              text="Validar"
              onClick={() => calculateResult()}
              disabled={
                selectAnswers?.length !== questions?.length || showResult
              }
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Game;

/*  async function fetchData() {
      const resp = await fetch(API_URL);
      const data = await resp.json();

      console.log(setQuestion(data));
    }
    fetchData(); */
