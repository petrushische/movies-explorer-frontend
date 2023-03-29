import './Profile.css'
import { UserContext } from '../../contexts/CurrentUserContext';
import React from 'react';

function Profile({ cbLogout }) {
 const userData = React.useContext(UserContext)
 console.log(userData)
 return (
  <section className='profile'>
   <h2 className='profile__title'>Привет, Виталий!</h2>
   <form className='profile__form'>
    <input className='profile__input profile__input_type_name' type='text' placeholder='Имя' required ></input>
    <input className='profile__input profile__input_type_email' type='email' placeholder='E-mail' required ></input>
    <button className='profile_button profile_button_type_edit'>Редактировать</button>
   </form>
   <button className='profile_button profile_button_type_exit' onClick={cbLogout}>Выйти из акаунта</button>
  </section>
 );
}
export default Profile