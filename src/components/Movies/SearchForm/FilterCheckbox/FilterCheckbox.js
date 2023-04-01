import React from "react";
import './FilterCheckbox.css'
function FilterCheckbox({ handleCheckbox, checkboxValue }) {
 return (
  <>
   <label className="search-form__label" htmlFor="checkbox">
    <input type="checkbox" className='search-form__checkbox' checked={checkboxValue} onChange={handleCheckbox}></input>
    <p id='checkbox-text'>Короткометражки</p>
   </label>
  </>
 );
}
export default FilterCheckbox