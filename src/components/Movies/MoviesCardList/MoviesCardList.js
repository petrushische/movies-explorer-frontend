import React from 'react';
import './MoviesCardList.css'
import { cards } from '../../../utils/dataCards'
import MoviesCard from '../MoviesCard/MoviesCard';
function MoviesCardList() {
 const [visible, SetVisible] = React.useState(false)
 function See() {
  SetVisible(!visible)
 }
 return (
  <>
   <ul className='card-list' >
    {cards.map((elem) => (
     <MoviesCard card={elem} key={elem.id} visible={visible} />
    ))}
   </ul>
   <div className='more'>
    <button className='more__button' type='button' onClick={See}>Ещё</button>
   </div>
  </>
 );
}

export default MoviesCardList