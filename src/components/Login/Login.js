import React from 'react';
import { Redirect } from 'react-router-dom';
import { useForm } from 'react-hook-form'
import './Login.css'
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg'
function Login({ handleLogin, loggedIn }) {
 const [errMessage, setErrMessage] = React.useState('')


 function clearError() {
  setErrMessage('')
 }
 const {
  register,
  formState: {
   errors,
   isValid
  },
  handleSubmit,
  reset
 } = useForm({ mode: 'all' });
 function onSubmit(data) {
  const { email, password } = data
  handleLogin(email, password)
   .catch((err) => {
    console.log(err)
    if (err.status === 401) {
     setErrMessage('Вы ввели неправильный логин или пароль')
    } else {
     setErrMessage('Ошибка на стороне сервера')
    }
    setTimeout(clearError, 2000)
   })
  reset()
 }
 if (loggedIn) {
  return <Redirect to='/movies' />
 }
 return (
  <section className='entry entry_type_login'>
   <div className='entry__wrapper-img'>
    <Link to='/'>
     <img className='entry__logo' alt='Логотип' src={logo}></img>
    </Link>
   </div>
   <h2 className='entry__title'>Рады видеть!</h2>
   <form className='entry__form' onSubmit={handleSubmit(onSubmit)}>
    <h3 className='entry__input-name'>E-mail</h3>
    <input name='email' className='entry__input entry__input_type_email'  {...register('email',
     {
      required: 'Поле обязательно к заполнению',
      pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i, message: 'Введите корректный адрес' }
     }
    )}></input>
    <p className='entry__error'>{errors ? errors.email ? errors.email.message : null : null}</p>
    <h3 className='entry__input-name'>Пароль</h3>
    <input name='password' className='entry__input entry__input_type_password' type='password'   {...register('password', {
     required: 'Поле обязательно к заполнению',
     minLength: { value: 2, message: 'Минимум 2 символа' },
     maxLength: { value: 30, message: 'Максимум 30 символов' }
    })}></input>
    <p className='entry__error entry__error_type_password entry__error_type_password-change-margin'>{errors ? errors.password ? errors.password.message : null : null}</p>
    <p className='entry__api-error'>{errMessage}</p>
    <button className={`entry__button-register ${isValid ? '' : 'entry__button-register-disabled'}`} disabled={isValid ? false : true}>Войти</button>
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