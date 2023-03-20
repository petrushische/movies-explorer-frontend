import './Footer.css'
import { useLocation } from 'react-router-dom';

function Footer() {
 const { pathname } = useLocation();
 const data = new Date().getFullYear();
 return (
  <footer className={`footer ${pathname === '/profile' || pathname === '/signin' || pathname === '/signup' ? 'footer-hiden' : ''}`}>
   <h2 className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</h2>
   <div className='footer__line'></div>
   <div className='footer__wrapper'>
    <p className='footer__data'>© {data}</p>
    <div className='footer__wrapper-link'>
     <a className='footer__link' href='https://practicum.yandex.ru/' target="_blank" rel="noopener noreferrer">Яндекс.Практикум</a>
     <a className='footer__link' href='https://github.com/' target="_blank" rel="noopener noreferrer">Github</a>
    </div>
   </div>
  </footer>
 );
}

export default Footer