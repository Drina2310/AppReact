import React from 'react';
import './styles.scss';

export const Button = ({ text, onClick, disabled }) => {
  return (
    <>
      <button disabled={disabled} onClick={onClick} className="btn btn-gold">
        {text}
      </button>
    </>
  );
};
