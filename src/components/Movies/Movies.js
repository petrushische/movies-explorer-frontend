import React from "react";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
function Movies({ handleSAveMovies, handleDeleteMovies, setSave, save }) {
 const moviesStorage = JSON.parse(localStorage.getItem('movies')) || [];
 const nullMoviesLength = localStorage.getItem('movies') && JSON.parse(localStorage.getItem('movies')).length < 1;
 const [loader, setLoader] = React.useState(false)
 const [requestError, setRequestError] = React.useState('')

 return (
  <section className="movies">
   <SearchForm isLoader={setLoader} setRequestError={setRequestError} />
   {requestError.length === 0 ?
    nullMoviesLength === true ?
     <p className="search-form__error search-form__error_type_length">Ничего не найдено</p> : <MoviesCardList loader={loader} moviesStorage={moviesStorage} handleSAveMovies={handleSAveMovies} handleDeleteMovies={handleDeleteMovies} setSave={setSave} save={save} />
    :
    <p className='search-form__error search-form__error_type_fetch'>{requestError}</p>}
  </section>
 );
}
export default Movies


/* <p className="search-form__error search-form__error_type_length">Ничего не найдено</p> */