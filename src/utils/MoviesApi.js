function getMoviesList() {
 return fetch('https://api.nomoreparties.co/beatfilm-movies')
  .then((res) => {
   return res.json();
  })
}

export { getMoviesList }

