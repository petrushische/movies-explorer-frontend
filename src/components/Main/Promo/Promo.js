import './Promo.css'
import bannerLogo from '../../../images/banner__logo.svg'
function Promo() {
 return (
  <div className='banner__wrapper'>
   <div className='banner'>
    <h1 className='banner__title'>Учебный проект студента факультета Веб-разработки.</h1>
    <img src={bannerLogo} alt='Логотип' className='banner__logo' />
   </div>
  </div>
 );
}

export default Promo;