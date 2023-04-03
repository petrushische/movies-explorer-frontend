import React from 'react'
import './SavedMovies.css'
import MoviesCardList from './MoviesCardList/MoviesCardList'
import SearchForm from './SearchForm/SearchForm'
function SavedMovies({ handleDeleteMovies, save, setSave }) {
 const [sortArray, setSortArray] = React.useState([])
 return (
  <section className='saved-movies'>
   <SearchForm save={save} setSave={setSave} setSortArray={setSortArray} />
   <MoviesCardList handleDeleteMovies={handleDeleteMovies} save={save} setSave={setSave} sortArray={sortArray} />
  </section>
 )
}
export default SavedMovies