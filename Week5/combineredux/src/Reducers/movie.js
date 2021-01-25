
function addMovie(movie){
    return {
        type: "ADD_MOVIE",
        payload: movie
    }
}

function deleteMovie(movie) {
    return {
        type: "DELETE_MOVIE",
        payload: movie
    }
}

function allMovie(){
    return {
        type: ALL_MOVIE
    }
}


const initialState = {
    movie: []
}


function movieReducer(state = initialState, action ){
    switch (action.type) {
        case "ADD_MOVIE":
            return {
                ...state,
                movie: [...state.movie, action.payload]
            }
        case "DELETE_MOVIE":
            const previousMovies = state.movie.filter(movie => movie !== action.payload)
            return {
                ...state,
                movie: previousMovies
            }
        case "ALL_MOVIE":
            return `Movies Showing: ${state.movie}`
            default: return state
        }
}

module.exports = (
    movieReducer,
    addMovie,
    deleteMovie,
    allMovie
    )