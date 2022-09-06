import React, { useEffect, useState } from 'react';
import { Breadcrumb } from '../../components/Breadcrumb/Breadcrumb';
import { QuestionCard } from '../../components/QuestionCard/QuestionCard';

const API_URL =
  'https://62bb6e36573ca8f83298fbef.mockapi.io/metcampweb22/v1/questions/harry-potter';

const Game = () => {
  const [loading, setLoading] = useState(true);
  const [questions, setQuestions] = useState([]);

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
    <div className="container">
      <Breadcrumb />
      {loading && <div>Cargando...</div>}

      {!loading && (
        <form>
          {questions.map((question) => {
            return (
              <QuestionCard key={question.id} currentQuestion={question} />
            );
          })}
        </form>
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
