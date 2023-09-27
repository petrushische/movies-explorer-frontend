import React from 'react';
import { useForm } from 'react-hook-form'
import { Redirect } from 'react-router-dom';
import './Register.css'
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg'
function Register({ handleRegister, loggedIn }) {
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
  const { name, email, password } = data
  handleRegister(name, email, password)
   .catch((err) => {
    console.log(err)
    if (err.status === 409) {
     setErrMessage('Пользователь с таким email уже существует')
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
  <section className='entry entry_type_register'>
   <div className='entry__wrapper-img'>
    <Link to='/'>
     <img className='entry__logo' alt='Логотип' src={logo}></img>
    </Link>
   </div>
   <h2 className='entry__title'>Добро пожаловать!</h2>
   <form className='entry__form' onSubmit={handleSubmit(onSubmit)}>
    <h3 className='entry__input-name'>Имя</h3>
    <input className='entry__input entry__input_type_name' type='text' {...register('name',
     {
      required: 'Поле обязательно к заполнению',
      minLength: { value: 2, message: 'минимум 2 символа' },
      maxLength: { value: 30, message: 'Максимум 30 символов' },
      pattern: { value: /^[а-яёА-ЯЁa-zA-Z\s-]+$/i, message: 'Поле может содержать только латиницу, кирилицу, пробелы и "-"' }
     })}>
    </input>
    <p className='entry__error'>{errors ? errors.name ? errors.name.message : null : null}</p>
    <h3 className='entry__input-name'>E-mail</h3>
    <input className='entry__input entry__input_type_email' {...register('email',
     {
      required: 'Поле обязательно к заполнению',
      pattern: { value: /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu, message: 'Введите корректный адрес' }
     }
    )}>
    </input>
    <p className='entry__error'>{errors ? errors.email ? errors.email.message : null : null}</p>
    <h3 className='entry__input-name'>Пароль</h3>
    <input className='entry__input entry__input_type_password' type='password'  {...register('password', {
     required: 'Поле обязательно к заполнению',
     minLength: { value: 2, message: 'Минимум 2 символа' },
     maxLength: { value: 30, message: 'Максимум 30 символов' }
    })}>
    </input>
    <p className='entry__error entry__error_type_password'>{errors ? errors.password ? errors.password.message : null : null}</p>
    <p className='entry__api-error'>{errMessage}</p>
    <button className={`entry__button-register ${isValid ? '' : 'entry__button-register-disabled'}`} disabled={isValid ? false : true} >Зарегистрироваться</button>
    <p className='entry__text'>Уже зарегистрированы?
     <Link className='entry__text-link' to='signin'>Войти</Link>
    </p>
   </form>
  </section >
 );
}

export default Register