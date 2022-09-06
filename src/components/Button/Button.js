import React from 'react';
import './styles.scss';

export const Button = ({ text, onClick }) => {
  return (
    <>
      <button onClick={onClick} className="button">
        {text}
      </button>
    </>
  );
};
