import React from 'react';
import './MoviesCard.css'
import close from '../../../images/close.svg'
import { allMovies } from '../../../utils/MainApi';
function MoviesCard({ card, handleDeleteMovies, setSave }) {

  function deleteSaveMovies() {
    handleDeleteMovies(card._id, localStorage.getItem('jwt'))
      .then((res) => {
        console.log(res)
        allMovies(localStorage.getItem('jwt'))
          .then((res) => {
            setSave(res)
          })
          .catch((err) => {
            console.log(err)
          })
      })
      .catch((err) => {
        console.log(err)
      })
  }
  return (
    <li className='card-list__card' >
      <div className='card-list__wrapper-img'>
        <a href={card.trailer} target="_blank" rel="noopener noreferrer" className='card-list__link'>
          <img className='card-list__img' src={card.image} alt={card.nameRU} />
        </a>
      </div>
      <button className='card-list__button-save card-list__button-save_type_ok' type='button' >
        <img src={close} alt='Галочка' onClick={deleteSaveMovies} />
      </button>
      <div className='card-list__wrapper'>
        <h2 className='card-list__title'>{card.nameRU}</h2>
        <div className='card-list__wrapper-time'>
          <p className='card-list__time'>{card.duration} мин</p>
        </div>
      </div>
    </li>
  );
}

export default MoviesCard;