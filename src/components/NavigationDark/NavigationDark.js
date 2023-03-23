import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import './NavigationDark.css'
import logo from "../../images/logo.svg"
import NavigationSide from '../NavigationSide/NavigationSide';
function NavigationDark() {
 const { pathname } = useLocation();
 const [openNav, setOpenNav] = React.useState(false)
 function handleClickIsOpen() {
  setOpenNav(!openNav)
 }
 function handleClickIsClose() {
  setOpenNav(!openNav)
 }
 return (
  <>
   <header className={`header-dark ${pathname === '/signin' || pathname === '/signup' ? 'header-dark-hidden' : ''} 
   ${pathname !== '/' & pathname !== '/movies' & pathname !== '/saved-movies' & pathname !== '/profile' & pathname !== '/signin' & pathname !== '/signup' ? 'header-dark-hidden' : ''}`}>
    <nav className="header-dark__wrapper">
     <Link to='/'>
      <img src={logo} alt="Логотип" className="header-dark__logo" />
     </Link>
     <div className="header-dark__wrapper-button">
      <Link className='header-dark__movies' to='movies'>
       Фильмы
      </Link>
      <Link className='header-dark__save-movies' to='/saved-movies'>
       Сохраненные фильмы
      </Link>
     </div>
     <Link to='/profile'>
      <button className='header-dark__account' type='button'>Аккаунт</button>
     </Link>
     <button className='header-dark__side-bar' onClick={handleClickIsOpen}></button>
    </nav>
   </header>
   <NavigationSide open={openNav} close={handleClickIsClose} />
  </>
 );
}

export default NavigationDark