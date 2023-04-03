import './MoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard';
import React from 'react';

function MoviesCardList({ handleDeleteMovies, save, setSave, sortArray }) {

    return (
        <>
            <ul className='card-list card-list_type_save-movis' >
                {(sortArray.length === 0 ? save : sortArray).map((elem) => (
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