import React, { useEffect } from 'react';
import './MoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from "../Preloader/Preloader";
function MoviesCardList({ movies, loader }) {
 const storage = JSON.parse(localStorage.getItem('movies')) || [];
 const [size, setSize] = React.useState(undefined);
 const [visible1280, setVisible1280] = React.useState(0)
 const [visible768, setVisible768] = React.useState(0)
 function plusVisible() {
  setVisible1280(visible1280 + 3)
  setVisible768(visible768 + 2)
 }

 useEffect(() => {
  function resizeWindow() {
   setSize(window.innerWidth)
  };
  window.addEventListener("resize", resizeWindow);
  resizeWindow();
  return () => window.removeEventListener("resize", resizeWindow);
 })
 return (
  <>
   {loader ?
    <Preloader />
    :
    <ul className='card-list' >
     {(size > 768 ? storage.slice(0, 12 + visible1280) : (size > 400 ? storage.slice(0, 8 + visible768) : storage.slice(0, 5 + visible768))).map((elem) => (
      <MoviesCard card={elem} key={elem.id} />
     ))}
    </ul>
   }
   {storage.length > 3 ?
    <div className='more'>
     <button className='more__button' type='button' onClick={plusVisible}>Ещё</button>
    </div>
    :
    null}
  </>
 );
}

export default MoviesCardList