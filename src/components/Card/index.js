import React from 'react';
import './index.css';

const Card = ({ title, subTitle1, subTitle2 }) => {
  return (
  <div className='card-container'>
    <h2 className='title'>{title}</h2>
    <h4 className='subtitle1'>{subTitle1}</h4>
    <h4 className='subtitle2'>{subTitle2}</h4>
  </div>);
};
export default Card;