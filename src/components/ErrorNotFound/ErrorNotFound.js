import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import './ErrorNotFound.css'
function ErrorNotFound() {
 const { pathname } = useLocation();
 console.log(pathname === '/*')
 const history = useHistory()
 function goBack() {
  history.goBack()
 }
 return (
  <section className='error-not-found'>
   <h1 className='error-not-found__title'>404</h1>
   <h2 className='error-not-found__subtitle'>Страница не найдена</h2>
   <button className='error-not-found__button-back' type='button' onClick={goBack}>Назад</button>
  </section>
 );
}
/*console.log(pathname !== '/' || pathname !== '/movies' || pathname !== '/saved-movies' || pathname !== '/profile' || pathname !== '/signin' || pathname !== '/signup')*/
export default ErrorNotFound;