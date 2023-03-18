import './Profile.css'

function Profile() {
 return (
  <section className='profile'>
   <h2 className='profile__title'>Привет, Виталий!</h2>
   <form className='profile__form'>
    <input className='profile__input profile__input_type_name' type='text' placeholder='Имя' required></input>
    <input className='profile__input profile__input_type_email' type='email' placeholder='E-mail' required></input>
    <button className='profile_button profile_button_type_edit' type='save'>Редактировать</button>
    <button className='profile_button profile_button_type_exit' type='button'>Выйти из акаунта</button>
   </form>
  </section>
 );
}
export default Profile