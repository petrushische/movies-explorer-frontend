import React from "react";
import './FilterCheckbox.css'
function FilterCheckbox({ checkboxRef }) {
 return (
  <>
   <label className="search-form__label" htmlFor="checkbox">
    <input type="checkbox" className='search-form__checkbox' ref={checkboxRef} ></input>
    <p id='checkbox-text'>Короткометражки</p>
   </label>
  </>
 );
}
export default FilterCheckbox