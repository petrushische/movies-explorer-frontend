import './Navigation.css'
import { Link } from 'react-router-dom';
import logo from "../../images/logo.svg"
function Navigation() {
 return (
  <header className="header">
   <div className="header__wrapper">
    <Link to='/'>
     <img src={logo} alt="Логотип" className="header__logo" />
    </Link>
    <div className="header__wrapper-button">
     <Link to='/signup' className="header__register">
      Регистрация
     </Link>
     <Link to='/signin'>
      <button type="button" className="header__login">Войти</button>
     </Link>
    </div>
   </div>
  </header>
 );
}

export default Navigation 