import "./Header.css"
import logo from "../../images/logo.svg"
function Header() {
 return (
  <header className="header">
   <div className="header__wrapper">
    <img src={logo} alt="Логотип" className="header__logo" />
    <div className="header__wrapper-button">
     <button type="button" className="header__register" >Регистрация</button>
     <button type="button" className="header__login">Войти</button>
    </div>
   </div>
  </header>
 )
}
export default Header