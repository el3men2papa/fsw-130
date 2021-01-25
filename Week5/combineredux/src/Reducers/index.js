const movieReducer = require ("./movie")
const tvShowReducer = require ("./tvShow")

const {combineReducers} = require ("redux")

const allReducers = combineReducers ({
    movie: movieReducer,
    tvShow: tvShowReducer
});

module.exports = (allReducers)