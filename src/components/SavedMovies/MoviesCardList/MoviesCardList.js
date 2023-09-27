import './MoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard';
import React from 'react';
import { UserContext } from '../../../contexts/CurrentUserContext';
function MoviesCardList({ handleDeleteMovies, save, setSave, sortArray }) {
    const userData = React.useContext(UserContext)

    const sort = save.map(elem => {
        if (elem.owner._id === userData._id) {
            return elem
        }
        return elem
    })
    return (
        <>
            <ul className='card-list card-list_type_save-movis' >
                {(sortArray.length === 0 ? sort : sortArray).map((elem) => (
                    <MoviesCard card={elem} key={elem.movieId} handleDeleteMovies={handleDeleteMovies} setSave={setSave} />
                ))}
            </ul>
            <div className='void'></div>
        </>
    );
}

export default MoviesCardList





/*cardsSave.map((elem) => (
    <MoviesCard card={elem} key={elem.id} />
   ))*/