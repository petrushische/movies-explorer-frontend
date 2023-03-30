function getRegister(name, email, password) {
  return fetch('https://api.bibliofilms.nomoredomains.work/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: name,
      email: email,
      password: password
    })
  })
    .then((res) => {
      if (res.ok) {
        return res.json()
      }
      return Promise.reject(res)
    })
}

function getLogin(email, password) {
  return fetch('https://api.bibliofilms.nomoredomains.work/signin', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: email,
      password: password
    })
  })
    .then((res) => {
      if (res.ok) {
        return res.json()
      }
      return Promise.reject(res)
    })
}

function checkToken(token) {
  return fetch('https://api.bibliofilms.nomoredomains.work/users/me', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    }
  })
    .then((res) => {
      if (res.ok) {
        return res.json()
      }
      return Promise.reject(res)
    })
}

function updateUserData(token, name, email) {
  return fetch('https://api.bibliofilms.nomoredomains.work/users/me', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify({
      name: name,
      email: email
    })
  })
    .then((res) => {
      if (res.ok) {
        return res.json()
      }
      return Promise.reject(res)
    })
}

export { getRegister, getLogin, checkToken, updateUserData }