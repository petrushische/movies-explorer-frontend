import React from 'react';
import './MoviesCard.css'
import ok from '../../../images/ok.svg'
import { allMovies } from '../../../utils/MainApi';

function MoviesCard({ card, handleSAveMovies, handleDeleteMovies, setSave, save }) {

  const saveId = save.find(elem => elem.movieId === card.id)
  const isSaved = save.some((i) => i.movieId === card.id)


  function savedCard() {
    handleSAveMovies(localStorage.getItem('jwt'), card)
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

  function deleteCard() {

    handleDeleteMovies(saveId._id, localStorage.getItem('jwt'))
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
    <li className='card-list__card'>
      <div className='card-list__wrapper-img'>
        <a href={card.trailerLink} target="_blank" rel="noopener noreferrer" className='card-list__link'>
          <img className='card-list__img' src={'https://api.nomoreparties.co' + card.image.url
          } alt={card.nameRU} />
        </a>
      </div>
      {isSaved ? <button className='card-list__button-save card-list__button-save_type_ok' type='button' >
        <img src={ok} alt='Галочка' onClick={deleteCard} />
      </button> : <button className='card-list__button-save' type='button' onClick={savedCard}>Сохранить</button>}




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