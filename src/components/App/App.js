import React from 'react';
import './App.css';
import Header from '../Header/Header'
/*import Main from '../Main/Main'*/
/* import Movies from '../Movies/Movies'*/
import SavedMovies from '../SavedMovies/SavedMovies';
import Footer from '../Footer/Footer'
function App() {

  return (
    <>
      <Header />
      {/* <Main />*/}
      {/* <Movies />*/}
      <SavedMovies />
      <Footer />
    </>
  );
}

export default App;
