const movieReducer = require ("./movie")
const tvShowReducer = require ("./tvShow")
const {combineReducers} = require ("redux")

const allReducers = combineReducers ({
    movies: movieReducer,
    tvShows: tvShowReducer
});

module.exports = (allReducers)