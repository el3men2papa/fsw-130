//--------------Movies Actions---------------
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
        type: "ALL_MOVIE"
    }
}


module.exports = {
    addMovie,
    deleteMovie,
    allMovie
}