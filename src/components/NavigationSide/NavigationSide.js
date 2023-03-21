import "./NavigationSide.css";
import { NavLink } from "react-router-dom";

function NavigationSide({ open, close }) {
 return (
  <div className={`navigation-side__wrapper ${open ? 'navigation-side__wrapper-open' : ''}`}>
   <div className='navigation-side'>
    <button className="navigation-side__close" type="button" onClick={close}></button>
    <nav className="navigation-side__menu">
     <NavLink to='/' exact className={({ isActive }) => `navigation-side__main ${isActive ? "link-activ" : ""}`}>Главная</NavLink>
     <NavLink to='/movies' className={({ isActive }) => `navigation-side__movies ${isActive ? "link-activ" : ""}`} onClick={close}>Фильмы</NavLink>
     <NavLink to='/saved-movies' className={({ isActive }) => `navigation-side__save-movies ${isActive ? "link-activ" : ""}`} onClick={close}>Сохраненные фильмы</NavLink>
     <NavLink to='/profile' onClick={close}>
      <button className='navigation-side__account' type='button'>Аккаунт</button>
     </NavLink>
    </nav>
   </div>
  </div>
 );
}

export default NavigationSide