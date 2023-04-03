import React from 'react'
import './SearchForm.css'
import lupa from '../../../images/Lupa.svg'
import FilterCheckbox from './FilterCheckbox/FilterCheckbox'
import { validateMovies } from '../../../utils/filterMovies'
function SearchForm({ save, setSortArray, setSave }) {
 const [inputValue, setInputValue] = React.useState('')
 const [checkboxValue, setCheckboxValue] = React.useState(false)
 const [err, setErr] = React.useState('')


 function handleInput(evt) {
  setInputValue(evt.target.value)
 }
 function handleCheckbox(evt) {
  setCheckboxValue(evt.target.checked)
 }
 function handleSubmit(evt) {
  evt.preventDefault();
  if (inputValue.length === 0) {
   setSortArray([])
   setErr('Нужно ввести значение')
  } else {
   if (setSortArray(validateMovies(save, inputValue, checkboxValue))) {
    setErr('Ничего не найдено')
    setSave([])
   } else {
    setSortArray(validateMovies(save, inputValue, checkboxValue))
    setErr('')
   }
  }
 }
 return (
  <form className='search-form' name='search-movies' noValidate onSubmit={handleSubmit}>
   <input name='saved-movies' className='search-form__input' type='text' placeholder='Фильм' required minLength='2' maxLength='30' value={inputValue} onChange={handleInput}></input>
   <p className='search-form__error'>{err}</p>
   <button className='search-form__button-search' type='save'>
    <img className='search-form__img' src={lupa} alt='Значок поиска' />
   </button>
   <FilterCheckbox checkboxValue={checkboxValue} handleCheckbox={handleCheckbox} />
  </form>
 );
}

export default SearchForm