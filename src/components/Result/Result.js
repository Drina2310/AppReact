import React from 'react';
import good from '../../images/bien.png';
import regular from '../../images/medio.png';
import bad from '../../images/mal.png';

export const Result = ({ resultValue, totalQuestion }) => {
  function getImageSource(result) {
    if (result < 4) return bad;
    if (result >= 4 && result < 7) return regular;
    if (result >= 7) return good;
  }

  return (
    <div className="d-flex">
      <h1>
        {resultValue}/{totalQuestion}
      </h1>
      <img src={getImageSource(resultValue)} alt="HarryPotter" />
    </div>
  );
};
