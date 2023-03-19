import './Login.css'
import logo from '../../images/logo.svg'
function Login() {
 return (
  <section className='entry entry_type_login'>
   <div className='entry__wrapper-img'>
    <img className='entry__logo' alt='Логотип' src={logo}></img>
   </div>
   <h2 className='entry__title'>Рады видеть!</h2>
   <form className='entry__form'>
    <h3 className='entry__input-name'>E-mail</h3>
    <input className='entry__input entry__input_type_email' type='email' required></input>
    <h3 className='entry__input-name'>Пароль</h3>
    <input className='entry__input entry__input_type_password' type='password' required minLength='2' maxLength='30'></input>
    <button className='entry__button-register' type='save'>Войти</button>
    <p className='entry__text'>Ещё не зарегистрированы?
     <a className='entry__text-link' href='#'>Зарегистрироваться</a>
    </p>
   </form>
  </section >
 );
}

export default Login