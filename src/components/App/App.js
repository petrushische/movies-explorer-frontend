import React, { useCallback, useEffect } from 'react';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { UserContext } from '../../contexts/CurrentUserContext';
import { getLogin, checkToken, getRegister, updateUserData, saveMovies, deleteMovies, allMovies } from '../../utils/MainApi';
import './App.css';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Header from '../Header/Header'
import Main from '../Main/Main'
import Movies from '../Movies/Movies'
import SavedMovies from '../SavedMovies/SavedMovies';
import Footer from '../Footer/Footer'

import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';

import ErrorNotFound from '../ErrorNotFound/ErrorNotFound';
function App() {
  const [loggedIn, setLoggedIn] = React.useState(false)
  const [userData, setUserData] = React.useState({})

  const [save, setSave] = React.useState([])


  function loggin() {
    localStorage.setItem('loggedIn', true)
  }

  function handleSaveMovies(token, movie) {
    return saveMovies(token, movie)
  }

  function handleDeleteMovies(id, token) {
    return deleteMovies(id, token)
  }


  function handleUpdateUser(token, name, email) {
    return updateUserData(token, name, email)
  }

  useEffect(() => {
    if (localStorage.getItem('jwt')) {
      allMovies(localStorage.getItem('jwt'))
        .then((res) => {
          setSave(res)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }, [])


  const tokenCheck = useCallback(async () => {
    try {
      let jwt = localStorage.getItem('jwt')
      if (!jwt) {
        throw new Error('no token')
      }
      const user = await checkToken(jwt)

      if (!user) {
        throw new Error('invalid user')
      }
      loggin();
      setLoggedIn(true)
      setUserData(user)
    }
    catch (err) {

    }
  }, [])

  const cbLogin = React.useCallback(async (email, password) => {
    try {
      const data = await getLogin(email, password)
      localStorage.setItem('jwt', data.token)
      tokenCheck()
      allMovies(localStorage.getItem('jwt'))
        .then((res) => {
          setSave(res)
        })
        .catch((err) => {
          console.log(err)
        })
    } catch (err) {
      throw err
    }
  }, [tokenCheck])

  const cbRegister = React.useCallback(async (name, email, password) => {
    try {
      await getRegister(name, email, password)
      cbLogin(email, password)
    } catch (err) {
      throw err
    }
  }, [cbLogin])

  const cbLogout = () => {
    setLoggedIn(false)
    localStorage.clear()
    setUserData({})
  }


  useEffect(() => {
    tokenCheck()
  }, [tokenCheck])

  return (
    <>
      <UserContext.Provider value={userData}>
        <Header loggedIn={loggedIn} />
        <Switch>
          <Route exact path='/'>
            <Main loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
          </Route>
          <ProtectedRoute path='/movies' loggedIn={loggedIn} component={Movies} handleSAveMovies={handleSaveMovies} handleDeleteMovies={handleDeleteMovies} save={save} setSave={setSave} />
          <ProtectedRoute path='/saved-movies' loggedIn={loggedIn} component={SavedMovies} handleDeleteMovies={handleDeleteMovies} save={save} setSave={setSave} />
          <ProtectedRoute path='/profile' loggedIn={loggedIn} component={Profile} cbLogout={cbLogout} handleUpdateUser={handleUpdateUser} setUserData={setUserData} />
          <Route path='/signin'>
            <Login handleLogin={cbLogin} loggedIn={loggedIn} />
          </Route>
          <Route path='/signup'>
            <Register handleRegister={cbRegister} loggedIn={loggedIn} />
          </Route>
          <Route patch='/*'>
            <ErrorNotFound />
          </Route>
        </Switch>
        <Footer />
      </UserContext.Provider>
    </>
  );
}

export default App;



