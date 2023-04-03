import './SavedMovies.css'
import MoviesCardList from './MoviesCardList/MoviesCardList'
import SearchForm from './SearchForm/SearchForm'
function SavedMovies({ handleDeleteMovies, save, setSave }) {
 return (
  <section className='saved-movies'>
   <SearchForm />
   <MoviesCardList handleDeleteMovies={handleDeleteMovies} save={save} setSave={setSave} />
  </section>
 )
}
export default SavedMovies