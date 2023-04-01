import React, { useEffect } from 'react';
import './MoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from "../Preloader/Preloader";
function MoviesCardList({ loader, moviesStorage }) {
  const [visibleButton, setVisibleButton] = React.useState(false)


  const [size, setSize] = React.useState(undefined);
  const [visible1280, setVisible1280] = React.useState(12)
  const [visible768, setVisible768] = React.useState(8)
  const [visible480, setVisible480] = React.useState(5)
  function plusVisible1280() {
    setVisible1280(visible1280 + 3)
  }
  function plusVisible768() {
    setVisible768(visible768 + 2)
  }

  function plusVisible480() {
    setVisible480(visible480 + 2)
    console.log(visible480)
  }

  useEffect(() => {
    function resizeWindow() {
      setSize(window.innerWidth)
    };
    window.addEventListener("resize", resizeWindow);
    resizeWindow();
    return () => window.removeEventListener("resize", resizeWindow);
  })

  useEffect(() => {

    if (size > 768 && visible1280 >= moviesStorage.length) {
      setVisibleButton(true)
    } else if ((size <= 768 && size > 480) && visible768 >= moviesStorage.length) {
      setVisibleButton(true)
    } else if (size <= 480 && visible480 >= moviesStorage.length) {
      setVisibleButton(true)
    } else {
      setVisibleButton(false)
    }
  }, [visible1280, visible768, visible480, moviesStorage.length, size])
  return (
    <>
      {loader ?
        <Preloader />
        :
        <ul className='card-list'>
          {(size > 768 ? moviesStorage.slice(0, visible1280) : (size > 480 ? moviesStorage.slice(0, visible768) : moviesStorage.slice(0, visible480))).map((elem) => (
            <MoviesCard card={elem} key={elem.id} />
          ))}
        </ul>
      }
      {
        (size > 768 &&
          moviesStorage.length > 12 ?
          <div className='more'>
            <button className={`more__button ${visibleButton ? 'more__button-none' : ''}`} type='button' onClick={plusVisible1280}>Ещё</button>
          </div>
          :
          null)
        ||
        ((size <= 768 && size > 480) &&
          moviesStorage.length > 8 ?
          <div className='more'>
            <button className={`more__button ${visibleButton ? 'more__button-none' : ''}`} type='button' onClick={plusVisible768}>Ещё</button>
          </div>
          :
          null)
        ||
        (size <= 480 &&
          moviesStorage.length > 5 ?
          <div className='more'>
            <button className={`more__button ${visibleButton ? 'more__button-none' : ''}`} type='button' onClick={plusVisible480}>Ещё</button>
          </div>
          :
          null)
      }
    </>
  );
}

export default MoviesCardList