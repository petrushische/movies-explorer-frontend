import React from 'react';
import './MoviesCard.css'
import close from '../../../images/close.svg'
function MoviesCard({ card }) {
  return (
    <li className='card-list__card' >
      <img className='card-list__img' src={card.src} alt={card.text} />
      <button className='card-list__button-save card-list__button-save_type_ok' type='button' >
        <img src={close} alt='Галочка' />
      </button>
      <div className='card-list__wrapper'>
        <h2 className='card-list__title'>{card.text}</h2>
        <div className='card-list__wrapper-time'>
          <p className='card-list__time'>{card.time}</p>
        </div>
      </div>
    </li>
  );
}

export default MoviesCard;