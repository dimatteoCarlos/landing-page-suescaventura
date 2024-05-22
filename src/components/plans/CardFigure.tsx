import React from 'react';

export default function CardFigure({ cardFigureNames }) {
  return (
    <>
      {/* <img src='/figures/escalada.png' alt='' /> */}
      
      <div className='card__figure__container'>
        {cardFigureNames.map((figName, ifig) => {
          <img
            src='/figures/scalator.png'
            alt=''
            key={`${figName}-fig-${ifig}`}
          />;
        })}
      </div>
      
    </>
  );
}
