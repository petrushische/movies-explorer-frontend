import './MoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard';
import { cardsSave } from '../../../utils/dataCards';
function MoviesCardList() {
    return (
        <>
            <ul className='card-list card-list_type_save-movis' >
                {cardsSave.map((elem) => (
                    <MoviesCard card={elem} key={elem.id} />
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