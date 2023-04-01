import React, { useEffect } from 'react'
import './SearchForm.css'
import lupa from '../../../images/Lupa.svg'
import FilterCheckbox from './FilterCheckbox/FilterCheckbox'
import { getMoviesList } from '../../../utils/MoviesApi'
import { validateMovies } from '../../../utils/filterMovies'
function SearchForm({ isLoader, setRequestError }) {
 const [inputValue, setInputValue] = React.useState('')
 const [checkboxValue, setCheckboxValue] = React.useState(false)
 const [valid, setValid] = React.useState('')

 function handleInput(evt) {
  setInputValue(evt.target.value)
 }
 function handleCheckbox(evt) {
  setCheckboxValue(evt.target.checked)
 }



 function handleSubmit(evt) {
  evt.preventDefault();
  if (inputValue.length === 0) {
   setValid('Нужно ввести ключевое слово')
  } else {
   isLoader(true)
   getMoviesList()
    .then((res) => {
     isLoader(false)
     setRequestError('')
     setValid('')
     localStorage.setItem('movies', JSON.stringify(validateMovies(res, inputValue, checkboxValue)))
     localStorage.setItem('input', inputValue)
     localStorage.setItem('checkbox', JSON.stringify(checkboxValue))
    })
    .catch((err) => {
     setRequestError('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз')
     isLoader(false)
    })
  }
 }
 useEffect(() => {
  setInputValue(localStorage.getItem('input') || '')
  setCheckboxValue(JSON.parse(localStorage.getItem('checkbox')) || false)
 }, [])
 return (
  <form className='search-form' name='search-movies' noValidate onSubmit={handleSubmit}>
   <input name='movies' className='search-form__input' type='text' placeholder='Фильм' required value={inputValue} onChange={handleInput}></input>
   <p className='search-form__error'>{valid}</p>
   <button className='search-form__button-search'>
    <img className='search-form__img' src={lupa} alt='Значок поиска' />
   </button>
   <FilterCheckbox handleCheckbox={handleCheckbox} checkboxValue={checkboxValue} />
  </form>
 );
}

export default SearchForm