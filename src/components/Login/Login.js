import './Login.css'
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg'
function Login() {
 return (
  <section className='entry entry_type_login'>
   <div className='entry__wrapper-img'>
    <Link to='/'>
     <img className='entry__logo' alt='Логотип' src={logo}></img>
    </Link>
   </div>
   <h2 className='entry__title'>Рады видеть!</h2>
   <form className='entry__form'>
    <h3 className='entry__input-name'>E-mail</h3>
    <input className='entry__input entry__input_type_email' type='email' required></input>
    <h3 className='entry__input-name'>Пароль</h3>
    <input className='entry__input entry__input_type_password entry__input_type_password-change-margin' type='password' required minLength='2' maxLength='30'></input>
    <button className='entry__button-register'>Войти</button>
    <p className='entry__text'>Ещё не зарегистрированы?
     <Link className='entry__text-link' to='signup'>
      Регистрация
     </Link>
    </p>
   </form>
  </section >
 );
}

export default Login