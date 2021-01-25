const store = require("../store")
const movie = require("../Reducers/movie")
const tvShow = require("../Reducers/tvShow")

console.log(store.getState().movie)

console.log('add movie ...')
store.dispatch(movie.addMovie('The Matrix'))
console.log(store.getState().movies)

console.log('add movie ...')
store.dispatch(movie.addMovie('The Matrix 2'))
console.log(store.getState().movies)

console.log('add movie ...')
store.dispatch(movie.addMovie('The Matrix 3'))
console.log(store.getState().movies)