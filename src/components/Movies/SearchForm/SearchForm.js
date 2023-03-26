import React, { useEffect } from 'react'
import './SearchForm.css'
import lupa from '../../../images/Lupa.svg'
import FilterCheckbox from './FilterCheckbox/FilterCheckbox'
import { getMoviesList } from '../../../utils/MoviesApi'
function SearchForm({ setMovies, isLoader, error }) {
 const inputRef = React.useRef();
 const checkboxRef = React.useRef()

 const [valid, setValid] = React.useState(null)

 function handleSubmit(evt) {
  evt.preventDefault();
  if (inputRef.current.validity.valid === false) {
   setValid(<p className='search-form__error'>Нужно ввести ключевое слово</p>)
  } else {
   isLoader(true)
   getMoviesList()
    .then((res) => {
     isLoader(false)
     setMovies(res)
     localStorage.setItem('movies', JSON.stringify(res))
     localStorage.setItem('input', inputRef.current.value)
     localStorage.setItem('checkbox', checkboxRef.current.checked)
    })
    .catch((err) => {
     error(<p className='search-form__error search-form__error_type_fetch'>Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз</p>)
     isLoader(false)
    })
   setValid(null)
  }
 }
 useEffect(() => {
  inputRef.current.value = localStorage.getItem('input')
  checkboxRef.current.checked = localStorage.getItem('checkbox')
 }, [])
 return (
  <form className='search-form' name='search-movies' noValidate onSubmit={handleSubmit}>
   <input name='movies' className='search-form__input' type='text' placeholder='Фильм' required ref={inputRef}></input>
   {valid}
   <button className='search-form__button-search'>
    <img className='search-form__img' src={lupa} alt='Значок поиска' />
   </button>
   <FilterCheckbox checkboxRef={checkboxRef} />
  </form>
 );
}

export default SearchForm