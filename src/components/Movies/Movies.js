import React from "react";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
function Movies() {
 const [movies, setMovies] = React.useState([])
 const [loader, setLoader] = React.useState(false)
 const [error, setError] = React.useState(null)
 return (
  <section className="movies">
   <SearchForm setMovies={setMovies} isLoader={setLoader} error={setError} />
   {error}
   <MoviesCardList movies={movies} loader={loader} />
  </section>
 );
}
export default Movies