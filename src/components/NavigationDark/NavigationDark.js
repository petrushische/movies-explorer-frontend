import React from 'react';
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
   <header className={`header-dark ${pathname === '/signin' || pathname === '/signup' ? 'header-dark-hidden' : ''}`}>
    <div className="header-dark__wrapper">
     <img src={logo} alt="Логотип" className="header-dark__logo" />
     <div className="header-dark__wrapper-button">
      <button type="button" className="header-dark__movies">Фильмы</button>
      <button type="button" className="header-dark__save-movies">Сохраненные фильмы</button>
     </div>
     <button className='header-dark__account' type='button'>Аккаунт</button>
     <button className='header-dark__side-bar' onClick={handleClickIsOpen}></button>
    </div>
   </header>
   <NavigationSide open={openNav} close={handleClickIsClose} />
  </>
 );
}

export default NavigationDark