


function validateMovies(data, text, checkbox) {
 /*console.log(JSON.parse(localStorage.getItem('movies')))*/
 const sortArray = data.filter((elem) => {
  if (checkbox === true) {
   return elem.nameRU.toLowerCase().includes(text.toLowerCase()) && elem.duration <= 40
  } else {
   return elem.nameRU.toLowerCase().includes(text.toLowerCase())
  }
 })
 return sortArray
}


export { validateMovies }