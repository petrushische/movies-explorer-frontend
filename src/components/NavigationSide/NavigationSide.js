import "./NavigationSide.css";

function NavigationSide({ open, close }) {
 return (
  <div className={`navigation-side__wrapper ${open ? 'navigation-side__wrapper-open' : ''}`}>
   <div className='navigation-side'>
    <button className="navigation-side__close" type="button" onClick={close}></button>
    <button type="button" className="navigation-side__main">Главная</button>
    <button type="button" className="navigation-side__movies">Фильмы</button>
    <button type="button" className="navigation-side__save-movies">Сохраненные фильмы</button>
    <button className='navigation-side__account' type='button'>Аккаунт</button>
   </div>
  </div>
 );
}

export default NavigationSide