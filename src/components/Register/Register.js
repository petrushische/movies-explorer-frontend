import './Register.css'
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg'
function Register() {
 return (
  <section className='entry entry_type_register'>
   <div className='entry__wrapper-img'>
    <Link to='/'>
     <img className='entry__logo' alt='Логотип' src={logo}></img>
    </Link>
   </div>
   <h2 className='entry__title'>Добро пожаловать!</h2>
   <form className='entry__form'>
    <h3 className='entry__input-name'>Имя</h3>
    <input className='entry__input entry__input_type_name' type='text' required></input>
    <h3 className='entry__input-name'>E-mail</h3>
    <input className='entry__input entry__input_type_email' type='email' required></input>
    <h3 className='entry__input-name'>Пароль</h3>
    <input className='entry__input entry__input_type_password' type='password' required minLength='2' maxLength='30'></input>
    <button className='entry__button-register'>Зарегистрироваться</button>
    <p className='entry__text'>Уже зарегистрированы?
     <Link className='entry__text-link' to='signin'>Войти</Link>
    </p>
   </form>
  </section >
 );
}

export default Register