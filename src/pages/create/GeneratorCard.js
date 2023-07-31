import React from "react";

import './GeneratorCard.css';

const GeneratorCard = ({
  title,
  description
}) => {
  return (
    <div className='generator-card'>
      <div className='generator-card__thumbnail'>
        <img src='' width="120px" height="120px" />
      </div>
        <div className='generator-card__contents'>
          <span className='generator-card__title'>{title}</span>
          <hr />
          <span className='generator-card__description'>{description}</span>
        </div>
    </div>
  )
};

export default GeneratorCard;