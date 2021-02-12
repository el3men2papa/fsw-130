const store = require("../store")
const movie = require("../Action/moviesActions")
const tvShow = require("../Action/tvShowsActions")


const {log} = console
const {getState, dispatch} = store
const {addTvShow, deleteTvShow, allTvShow} = tvShow
const {addMovie, deleteMovie, allMovie} = movie
//const {movies, tvShows} = getState() Dont try this at home

//------------This are the Movies List--------------------------
log(getState().movies)

log('add movie ...')
dispatch(addMovie('The Matrix'))
log(getState().movies) 

log('add movie ...')
dispatch(addMovie('The Matrix 2'))
log(getState().movies)

log('add movie ...')
dispatch(addMovie('The Matrix 3'))
log(getState().movies)

log('delete movie ...')
dispatch(deleteMovie('The Matrix 2'))
log(getState().movies)

dispatch(allMovie())
log(getState().movies)

//---------------This are the TV Shows List-----------------------

log(getState().tvShows)

log('add tv show ...')
dispatch(addTvShow('The Walking Dead'))
log(getState().tvShows)

log('add tv show ...')
dispatch(addTvShow('The Good Doctor'))
log(getState().tvShows)

log('add tv show ...')
dispatch(addTvShow('Warrior'))
log(getState().tvShows)

log('delete tv show ...')
dispatch(deleteTvShow('The Good Doctor'))
log(getState().tvShows)

dispatch(allTvShow())
log(getState().tvShows) 