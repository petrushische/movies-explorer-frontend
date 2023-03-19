import React from 'react';
import './App.css';
import Header from '../Header/Header'
/*import Main from '../Main/Main'*/
/* import Movies from '../Movies/Movies'*/
/*import SavedMovies from '../SavedMovies/SavedMovies';*/
import Footer from '../Footer/Footer'

/*import Profile from '../Profile/Profile';*/
import Register from '../Register/Register';
import Login from '../Login/Login';
function App() {

  return (
    <>
      <Header />
      {/* <Main />*/}
      {/* <Movies />*/}
      {/*<SavedMovies />*/}
      {/* <Profile /> */}
      <Register />
      <Login />
      <Footer />
    </>
  );
}

export default App;
