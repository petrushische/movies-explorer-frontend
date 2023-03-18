import React from 'react';
import './MoviesCard.css'
import ok from '../../../images/ok.svg'
function MoviesCard({ card, visible }) {
 const [button, setButton] = React.useState(false)
 function click() {
  setButton(!button)
 }
 return (
  <li className={`card-list__card ${visible ? 'card-list__card_type_visible' : ''}`}>
   <img className='card-list__img' src={card.src} alt={card.text} />
   {
    button ?
     <button className='card-list__button-save card-list__button-save_type_ok' type='button' onClick={click}>
      <img src={ok} alt='Галочка' />
     </button>
     : <button className='card-list__button-save' type='button' onClick={click}>Сохранить</button>
   }
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