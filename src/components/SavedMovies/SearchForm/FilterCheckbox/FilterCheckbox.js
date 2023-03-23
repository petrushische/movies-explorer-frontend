import React from "react";
import './FilterCheckbox.css'
function FilterCheckbox() {
 const [check, setCheck] = React.useState(false)
 function handleChangeCheck() {
  setCheck(!check)
 }

 return (
  <>
   <label className="search-form__label" htmlFor="checkbox">
    <input type="checkbox" className='search-form__checkbox' onClick={handleChangeCheck}></input>
    <p id='checkbox-text'>Короткометражки</p>
   </label>
  </>
 );
}
export default FilterCheckbox