
//--------------TV Shows Actions-----------

function addTvShow(tvShow) {
    return {
        type: "ADD_TV_SHOW",
        payload: tvShow
    }
}

/* function deleteTvShow(tvshow) {
    return {
        type: "DELETE_TV_SHOW",
        payload: tvshow
    }
} */

const deleteTvShow =  (tvshow) => ({
    type: "DELETE_TV_SHOW",
    payload: tvshow
})

function allTvShow(){ 
return {
    type: "ALL_TV_SHOW"
}
}
module.exports = {
    addTvShow,
    deleteTvShow,
    allTvShow
}


