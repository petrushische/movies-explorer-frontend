import './Profile.css'
import { useForm } from 'react-hook-form'
import { UserContext } from '../../contexts/CurrentUserContext';
import React, { useEffect } from 'react';


function Profile({ cbLogout, handleUpdateUser }) {
 const userData = React.useContext(UserContext)
 const [user, setUser] = React.useState(userData)
 const [disable, setDisable] = React.useState(true)
 const [success, setSuccess] = React.useState('')
 const [error, setError] = React.useState('')
 const {
  register,
  formState: { errors, isValid },
  watch,
  handleSubmit,
  setValue,
 } = useForm({ mode: 'all' });

 useEffect(() => {
  setUser(userData)
  setValue("name", userData.name);
  setValue("email", userData.email);
 }, [userData, setValue]);

 watch((value) => {
  if (value.name === userData.name || value.email === userData.email) {
   setDisable(false)
  } else {
   setDisable(true)
  }
 })

 function clearSuccess() {
  setSuccess('')
 }
 function clearError() {
  setError('')
 }
 function onSubmit(data) {
  handleUpdateUser(localStorage.getItem('jwt'), data.name, data.email)
   .then((res) => {
    setUser(res)
    setSuccess('Данные успешно изменены')
    setTimeout(clearSuccess, 2000)
   })
   .catch((err) => {
    if (err.status === 409) {
     setError('Пользователь с таким емайл уже существует')
    } else {
     setError('При обновлении профиля произошла ошибка')
    }
    setTimeout(clearError, 2000)
   })
 }
 return (
  <section className='profile'>
   <h2 className='profile__title'>Привет, {user.name}!</h2>
   <form className='profile__form' onSubmit={handleSubmit(onSubmit)}>
    <p className='profile__error profile__error_type_name'>{errors ? errors.name ? errors.name.message : null : null}</p>
    <input className='profile__input profile__input_type_name' type='text' placeholder='Имя'  {...register('name',
     {
      required: 'Поле обязательно к заполнению',
      minLength: { value: 2, message: 'минимум 2 символа' },
      maxLength: { value: 30, message: 'Максимум 30 символов' },
      pattern: { value: /^[а-яёА-ЯЁa-zA-Z\s-]+$/i, message: 'Поле может содержать только латиницу, кирилицу, пробелы и "-"' }
     })}></input>
    <input className='profile__input profile__input_type_email' placeholder='E-mail'  {...register('email',
     {
      required: 'Поле обязательно к заполнению',
      pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i, message: 'Введите корректный адрес' }
     })}></input>
    <p className='profile__error profile__error_type_email'>{errors ? errors.email ? errors.email.message : null : null}</p>
    <p className='profile__success'>{success}</p>
    <p className='profile__failure'>{error}</p>
    <button className={`profile_button profile_button_type_edit ${isValid ? disable ? '' : 'profile_button-disabled' : 'profile_button-disabled'}`} disabled={isValid ? disable ? false : true : true}>Редактировать</button>
   </form>
   <button className='profile_button profile_button_type_exit' onClick={cbLogout}>Выйти из акаунта</button>
  </section>
 );
}
export default Profile