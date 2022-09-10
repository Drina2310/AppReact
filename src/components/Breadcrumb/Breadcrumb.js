import React from 'react';
import { Link } from 'react-router-dom';

export const Breadcrumb = ({ isActive }) => {
  const ActiveItem = ({ title }) => (
    <li className="breadcrumb-item active">{title}</li>
  );

  const InactiveItem = ({ title, url }) => (
    <li className="breadcrumb-item">
      <Link to={url}>{title}</Link>
    </li>
  );

  return (
    <div className="my-5 ms-1">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Inicio</Link>
          </li>

          {isActive === 'game' ? (
            <ActiveItem title="Game" />
          ) : (
            <InactiveItem title="Game" url="/game" />
          )}
          {isActive === 'contacto' ? (
            <ActiveItem title="Contacto" />
          ) : (
            <InactiveItem title="Contacto" url="/profile" />
          )}
        </ol>
      </nav>
    </div>
  );
};
