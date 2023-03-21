import React from 'react';
import { Route } from 'react-router-dom';
import { Switch, Redirect } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header'
import Main from '../Main/Main'
import Movies from '../Movies/Movies'
import SavedMovies from '../SavedMovies/SavedMovies';
import Footer from '../Footer/Footer'

import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';

/*import ErrorNotFound from '../ErrorNotFound/ErrorNotFound';*/
function App() {

  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/'>
          <Main />
        </Route>
        <Route path='/movies'>
          <Movies />
        </Route>
        <Route path='/saved-movies'>
          <SavedMovies />
        </Route>
        <Route path='/profile'>
          <Profile />
        </Route>
        <Route path='/signin'>
          <Login />
        </Route>
        <Route path='/signup'>
          <Register />
        </Route>
        <Route patch='/*'>
          {/* <ErrorNotFound />*/}  <Redirect to='/'></Redirect>
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;



