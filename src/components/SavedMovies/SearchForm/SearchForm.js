import './SearchForm.css'
import lupa from '../../../images/Lupa.svg'
import FilterCheckbox from './FilterCheckbox/FilterCheckbox'
function SearchForm() {
 return (
  <form className='search-form' name='search-movies' noValidate>
   <input name='saved-movies' className='search-form__input' type='text' placeholder='Фильм' required minLength='2' maxLength='30'></input>
   <button className='search-form__button-search' type='save'>
    <img className='search-form__img' src={lupa} alt='Значок поиска' />
   </button>
   <FilterCheckbox />
  </form>
 );
}

export default SearchForm