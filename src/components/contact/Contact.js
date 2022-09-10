import React from 'react';
import { Social } from '../Social/Social';
import profileImage from '../../images/foto1.jpg';
import './styles.scss';
import { Breadcrumb } from '../Breadcrumb/Breadcrumb';

const data = [
  {
    title: 'Edad:',
    info: '32 años',
  },
  {
    title: 'Dirección:',
    info: 'Córdoba, Argentina.',
  },
  {
    title: 'Email:',
    info: 'drinarincon@gmail.com',
  },
  {
    title: 'Telefono',
    info: '+54 9 3513298661.',
  },
];

export const Contact = () => {
  return (
    <div className="profile">
      <div className="wallpaper" />
      <div className="dark" />
      <div className="container box">
        <div className="row info">
          <div className="col-xs-12 col-md-6 col-lg-4 d-flex justify-content-center">
            <img src={profileImage} alt="profile310" />
          </div>
          <div className="col-xs-12 col-md-6 col-lg-8 info__data">
            <Breadcrumb isActive="contacto" />
            <p>Drina Rincón</p>
            <p>Frontend Developer</p>
            <hr />
            <div className="more-info">
              {data.map((item, index) => (
                <div key={index} className="item">
                  <p>{item.title} </p>
                  <p>{item.info}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Social />
      </div>
    </div>
  );
};
