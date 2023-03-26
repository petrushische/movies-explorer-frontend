import React from 'react';
import './MoviesCard.css'
import ok from '../../../images/ok.svg'
function MoviesCard({ card }) {
  const [button, setButton] = React.useState(false)
  function click() {
    setButton(!button)
  }
  return (
    <li className='card-list__card'>
      <div className='card-list__wrapper-img'>
        <img className='card-list__img' src={'https://api.nomoreparties.co' + card.image.url
        } alt={card.nameRU} />
      </div>
      {
        button ?
          <button className='card-list__button-save card-list__button-save_type_ok' type='button' onClick={click}>
            <img src={ok} alt='Галочка' />
          </button>
          : <button className='card-list__button-save' type='button' onClick={click}>Сохранить</button>
      }
      <div className='card-list__wrapper'>
        <h2 className='card-list__title'>{card.nameRU}</h2>
        <div className='card-list__wrapper-time'>
          <p className='card-list__time'>{card.duration}</p>
        </div>
      </div>
    </li>
  );
}

export default MoviesCard;